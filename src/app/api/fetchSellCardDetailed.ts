import { TAG_CODES_CONSTANT } from "../constants/common";
import type { CardTagProps } from "@/app/types/CardTags.types";
import type {
	ApiSellCardDetailedResponse,
	ApiListingCardBaseDTO,
	SellCardDetailedResponseNormalized,
	ListingCardBaseNormalized,
	ApiTag,
} from "@/app/types/api/apiDetailedCard";

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

const normalizeTags = (tags: ApiTag[] = []): CardTagProps[] =>
	tags
		.map((t) => t.code)
		.filter((code): code is string => Boolean(code))
		.map((code) => TAG_CODES_CONSTANT[code] ?? { label: code });

const normalizeCard = (
	c: ApiListingCardBaseDTO
): ListingCardBaseNormalized => ({
	...c,
	tags: normalizeTags(c.tags),
});

export async function fetchSellCardDetailedPage(
	id: string,
	query: SellCardDetailedQuery = {},
	signal?: AbortSignal,
	path = "/sell-card-detailed/"
): Promise<SellCardDetailedResponseNormalized> {
	const base = process.env.NEXT_PUBLIC_BACKEND_HOST;
	const url = new URL(path + id, base);
	url.search = buildSellCardDetailedSearchParams(query).toString();

	const res = await fetch(url.toString(), { signal, cache: "no-store" });
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`HTTP ${res.status}: ${text}`);
	}

	const raw: ApiSellCardDetailedResponse = await res.json();

	const normalized: SellCardDetailedResponseNormalized = {
		...raw,
		tagsSell: raw.tagsSell
			? { tags: normalizeTags(raw.tagsSell.tags) }
			: undefined,
		tagsDetailed: raw.tagsDetailed
			? { tags: normalizeTags(raw.tagsDetailed.tags) }
			: undefined,
		complex: {
			...raw.complex,
			tags: normalizeTags(raw.complex.tags),
		},
		moreFromComplex: {
			...raw.moreFromComplex,
			cards: raw.moreFromComplex.cards.map(normalizeCard),
		},
		similar: {
			...raw.similar,
			cards: raw.similar.cards.map(normalizeCard),
		},
	};

	return normalized;
}
