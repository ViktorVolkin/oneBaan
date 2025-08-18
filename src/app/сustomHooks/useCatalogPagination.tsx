"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import {
	fetchListingsPage,
	type CatalogQuery,
	type CatalogPage,
} from "@/app/api/fetchListingsCatalog";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";

function stableKey(obj: object) {
	return JSON.stringify(obj, Object.keys(obj).sort());
}

export function useCatalogPagination(
	baseQuery: Omit<CatalogQuery, "page" | "limit">,
	options: { initialPage?: number; pageSize?: number } = {},
	pathToAsk?: string
) {
	const pageSize = options.pageSize ?? 12;
	const [page, setPage] = useState(options.initialPage ?? 1);
	const [items, setItems] = useState<ListingCardBase[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [total, setTotal] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const queryKey = useMemo(() => stableKey(baseQuery), [baseQuery]);

	useEffect(() => {
		setPage(1);
		setItems([]);
		setTotal(0);
		setHasMore(true);
		setError(null);
	}, [queryKey]);

	useEffect(() => {
		let cancelled = false;
		const ctrl = new AbortController();

		(async () => {
			setLoading(true);
			setError(null);
			try {
				const data: CatalogPage = await fetchListingsPage(
					{ ...baseQuery, page, limit: pageSize },
					ctrl.signal,
					pathToAsk
				);
				if (cancelled) return;

				setItems(data.items);
				setTotal(data.total);
				setHasMore(data.hasMore);
			} catch (e: any) {
				if (e?.name === "AbortError") return;
				setError(e?.message ?? "Failed to load");
			} finally {
				if (!cancelled) setLoading(false);
			}
		})();

		return () => {
			cancelled = true;
			ctrl.abort();
		};
	}, [queryKey, page, pageSize]);

	const totalPages = Math.max(1, Math.ceil(total / pageSize));
	const canPrev = page > 1;
	const canNext = page < totalPages;

	const goTo = useCallback(
		(p: number) => {
			setPage((prev) => {
				const next = Math.min(Math.max(1, p), totalPages || 1);
				return next === prev ? prev : next;
			});
		},
		[totalPages]
	);

	const next = useCallback(() => {
		if (canNext && !loading) setPage((p) => p + 1);
	}, [canNext, loading]);
	const prev = useCallback(() => {
		if (canPrev && !loading) setPage((p) => p - 1);
	}, [canPrev, loading]);

	return {
		items,
		loading,
		error,
		page,
		setPage: goTo,
		next,
		prev,
		pageSize,
		total,
		totalPages,
		hasMore,
	};
}
