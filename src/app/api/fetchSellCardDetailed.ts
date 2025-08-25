import { TAG_CODES_CONSTANT } from "../constants/common";

export type SellCardDetailedQuery = {
	locale?: string;
	currency?: string;
	minPrice?: string;
	maxPrice?: string;
	beds?: string;
	baths?: string;
	sortBy?: string;
	page?: string | number;
	limit?: string | number;
};

function buildSellCardDetailedSearchParams(q: SellCardDetailedQuery) {
	const qs = new URLSearchParams();
	if (q.locale) qs.set("locale", q.locale);
	if (q.currency) qs.set("currency", q.currency);
	if (q.minPrice) qs.set("minPrice", q.minPrice);
	if (q.maxPrice) qs.set("maxPrice", q.maxPrice);
	if (q.beds) qs.set("beds", q.beds);
	if (q.baths) qs.set("baths", q.baths);
	if (q.sortBy) qs.set("sortBy", q.sortBy);
	if (q.page != null) qs.set("page", String(q.page));
	if (q.limit != null) qs.set("limit", String(q.limit));
	return qs;
}

export async function fetchSellCardDetailedPage(
	id: string,
	query: SellCardDetailedQuery = {},
	signal?: AbortSignal,
	path = "/sell-card-detailed/"
) {
	const base = process.env.NEXT_PUBLIC_BACKEND_HOST;
	const url = new URL(path + id, base);
	url.search = buildSellCardDetailedSearchParams(query).toString();

	const res = await fetch(url.toString(), { signal, cache: "no-store" });
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`HTTP ${res.status}: ${text}`);
	}
	const data = await res.json();

	function mapTags(tags: any[] = []) {
		return tags.map((tag) => ({
			...tag,
			svgIconComponent:
				TAG_CODES_CONSTANT[
					tag.code as keyof typeof TAG_CODES_CONSTANT
				] || null,
		}));
	}

	if (data.tagsSell) data.tagsSell.tags = mapTags(data.tagsSell.tags);
	if (data.tagsDetailed)
		data.tagsDetailed.tags = mapTags(data.tagsDetailed.tags);
	if (data.complex) data.complex.tags = mapTags(data.complex.tags);
	if (data.moreFromComplex && Array.isArray(data.moreFromComplex.cards)) {
		data.moreFromComplex.cards = data.moreFromComplex.cards.map(
			(card: any) => ({
				...card,
				tags: mapTags(card.tags),
			})
		);
	}
	if (data.similar && Array.isArray(data.similar.cards)) {
		data.similar.cards = data.similar.cards.map((card: any) => ({
			...card,
			tags: mapTags(card.tags),
		}));
	}

	return data;
}
