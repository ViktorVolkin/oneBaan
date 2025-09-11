function buildComplexCardSearchParams(params: {
	locale: string;
	currency: string;
	moreOffersPageSell: number;
	moreOffersPageRent: number;
	limitSell: number;
	limitRent: number;
}) {
	const qs = new URLSearchParams();
	qs.set("locale", params.locale);
	qs.set("currency", params.currency);
	qs.set("moreOffersPageSell", String(params.moreOffersPageSell));
	qs.set("moreOffersPageRent", String(params.moreOffersPageRent));
	qs.set("limitSell", String(params.limitSell));
	qs.set("limitRent", String(params.limitRent));
	return qs;
}
import { routing } from "@/i18n/routing";
import type { CatalogQuery } from "./fetchListingsCatalog";
import { normalizeTags } from "../utils/normalizeTags";
import { ListingCardBase } from "../types/LargeCardHorizontalSellCatalog.types";

export type ComplexCardItem = Omit<ListingCardBase, "isRentCard">;
interface FetchComplexInfoParams {
	id: string;
	locale: (typeof routing.locales)[number];
	currency: string;
	moreOffersPageSell: number;
	moreOffersPageRent: number;
	limitSell?: number;
	limitRent?: number;
	signal?: AbortSignal;
}

export async function fetchComplexInfo({
	id,
	locale,
	currency,
	moreOffersPageSell,
	moreOffersPageRent,
	limitSell = 4,
	limitRent = 4,
	signal,
}: FetchComplexInfoParams) {
	const base = process.env.NEXT_PUBLIC_BACKEND_HOST;
	if (!base) throw new Error("NEXT_PUBLIC_BACKEND_HOST is not set");

	const url = new URL(`/complex-card/${id}`, base);

	const qs = buildComplexCardSearchParams({
		locale,
		currency: currency ?? "USD",
		moreOffersPageSell,
		moreOffersPageRent,
		limitSell,
		limitRent,
	});
	url.search = qs.toString();

	const res = await fetch(url.toString(), { signal, cache: "no-store" });
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`HTTP ${res.status}: ${text}`);
	}

	const data = await res.json();

	if (data.complex) data.complex.tags = normalizeTags(data.complex.tags);

	return data;
}
