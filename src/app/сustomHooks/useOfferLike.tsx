"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "favourites:ids";

export function readIds(whereToRead: string): string[] {
	try {
		const raw = localStorage.getItem(whereToRead);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed)
			? parsed.filter((x) => typeof x === "string")
			: [];
	} catch {
		return [];
	}
}

export function writeIds(ids: string[], whereToWrite: string) {
	localStorage.setItem(whereToWrite, JSON.stringify(ids));
}

export function useOfferLike(offerId: string, initial: boolean) {
	const [liked, setLiked] = useState(initial);

	useEffect(() => {
		const ids = readIds(STORAGE_KEY);
		setLiked(ids.includes(offerId));
	}, [offerId]);

	useEffect(() => {
		const onFavChanged = (e: Event) => {
			const { id, liked } = (
				e as CustomEvent<{ id: string; liked: boolean }>
			).detail;
			if (id === offerId) setLiked(liked);
		};
		window.addEventListener("fav-changed", onFavChanged);
		return () => window.removeEventListener("fav-changed", onFavChanged);
	}, [offerId]);

	useEffect(() => {
		const onStorage = (e: StorageEvent) => {
			if (e.key !== STORAGE_KEY) return;
			const ids = readIds(STORAGE_KEY);
			setLiked(ids.includes(offerId));
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, [offerId]);

	const toggle = useCallback(() => {
		const ids = readIds(STORAGE_KEY);
		const has = ids.includes(offerId);

		const next = has
			? ids.filter((id) => id !== offerId)
			: [...ids, offerId];

		writeIds(next, STORAGE_KEY);
		setLiked(!has);

		window.dispatchEvent(
			new CustomEvent("fav-changed", {
				detail: { id: offerId, liked: !has },
			})
		);
	}, [offerId]);

	return { liked, toggle };
}
