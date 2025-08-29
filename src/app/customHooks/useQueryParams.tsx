"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Primitive = string | number | boolean | null | undefined;

type SetOptions = {
	method?: "replace" | "push";
	scroll?: boolean;
	reset?: string[];
};

function commitUrl(
	router: ReturnType<typeof useRouter> | undefined,
	pathname: string,
	params: URLSearchParams,
	{ method = "replace", scroll = false }: SetOptions = {}
) {
	const qs = params.toString();
	const url = qs ? `${pathname}?${qs}` : pathname;

	if (router && typeof router[method] === "function") {
		router[method](url, { scroll });
		return;
	}

	if (typeof window !== "undefined" && window.history) {
		const fn = method === "push" ? "pushState" : "replaceState";
		window.history[fn](null, "", url);
	}
}

export function useQueryParams() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const get = useCallback(
		(name: string) => searchParams.get(name),
		[searchParams]
	);

	const set = useCallback(
		(name: string, value: Primitive, opts?: SetOptions) => {
			const params = new URLSearchParams(searchParams.toString());

			opts?.reset?.forEach((k) => params.delete(k));

			const str =
				value === undefined || value === null
					? ""
					: typeof value === "string"
					? value.trim()
					: String(value);

			if (str === "") params.delete(name);
			else params.set(name, str);

			commitUrl(router, pathname, params, opts);
		},
		[pathname, router, searchParams]
	);

	const setMany = useCallback(
		(entries: Record<string, Primitive>, opts?: SetOptions) => {
			const params = new URLSearchParams(searchParams.toString());

			opts?.reset?.forEach((k) => params.delete(k));

			for (const [key, val] of Object.entries(entries)) {
				const str =
					val === undefined || val === null
						? ""
						: typeof val === "string"
						? val.trim()
						: String(val);

				if (str === "") params.delete(key);
				else params.set(key, str);
			}

			commitUrl(router, pathname, params, opts);
		},
		[pathname, router, searchParams]
	);

	const toggleInList = useCallback(
		(name: string, value: string, delimiter = ",", opts?: SetOptions) => {
			const params = new URLSearchParams(searchParams.toString());

			const current = params.get(name);
			const setVals = new Set(
				(current ? current.split(delimiter) : []).filter(Boolean)
			);

			if (setVals.has(value)) setVals.delete(value);
			else setVals.add(value);

			if (setVals.size === 0) params.delete(name);
			else params.set(name, Array.from(setVals).join(delimiter));

			opts?.reset?.forEach((k) => params.delete(k));

			commitUrl(router, pathname, params, opts);
		},
		[pathname, router, searchParams]
	);

	const clear = useCallback(
		(names?: string[], opts?: SetOptions) => {
			const params = new URLSearchParams(searchParams.toString());

			if (!names || names.length === 0) {
				commitUrl(router, pathname, new URLSearchParams(), opts);
				return;
			}
			names.forEach((n) => params.delete(n));
			commitUrl(router, pathname, params, opts);
		},
		[pathname, router, searchParams]
	);

	return {
		get,
		set,
		setMany,
		toggleInList,
		clear,
		params: searchParams,
	};
}
