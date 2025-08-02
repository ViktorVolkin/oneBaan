"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState<boolean>(() => {
		if (typeof window !== "undefined" && window.matchMedia) {
			return window.matchMedia(query).matches;
		}
		return false;
	});

	useEffect(() => {
		if (typeof window === "undefined" || !window.matchMedia) return;

		const mediaQueryList = window.matchMedia(query);

		const listener = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		mediaQueryList.addEventListener("change", listener);

		// Storybook viewport fix: обновлять при resize
		const resizeListener = () => setMatches(mediaQueryList.matches);
		window.addEventListener("resize", resizeListener);

		setMatches(mediaQueryList.matches);

		return () => {
			mediaQueryList.removeEventListener("change", listener);
			window.removeEventListener("resize", resizeListener);
		};
	}, [query]);

	return matches;
}
