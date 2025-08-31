import { TAG_CODES_CONSTANT } from "../constants/common";
import type {
	ApiCatalogPage,
	ApiCatalogItemDTO,
	CatalogPageUI,
	CatalogCardUI,
	Locale,
	Currency,
} from "@/app/types/api/apiCatalog";

export type CatalogQuery = {
	search?: string | null;
	location?: string | null;
	type?: string | null;
	beds?: string | null;
	baths?: string | null;
	minPrice?: string | null;
	maxPrice?: string | null;
	sortBy?: string | null;
	page?: number;
	limit?: number;
	locale?: Locale | null;
	currency?: Currency;
	state?: string;
};

function putIfHasValue(
	params: URLSearchParams,
	key: string,
	value?: string | null
) {
	if (value != null && String(value).trim() !== "") {
		params.set(key, String(value).trim());
	}
}

export function buildSearchParams(q: CatalogQuery) {
	const qs = new URLSearchParams();
	putIfHasValue(qs, "search", q.search);
	putIfHasValue(qs, "location", q.location);
	putIfHasValue(qs, "type", q.type);
	putIfHasValue(qs, "beds", q.beds);
	putIfHasValue(qs, "baths", q.baths);
	putIfHasValue(qs, "minPrice", q.minPrice);
	putIfHasValue(qs, "maxPrice", q.maxPrice);
	putIfHasValue(qs, "sortBy", q.sortBy ?? "recommended");
	putIfHasValue(qs, "page", String(q.page ?? 1));
	putIfHasValue(qs, "limit", String(q.limit ?? 12));
	putIfHasValue(qs, "locale", q.locale ?? "en");
	putIfHasValue(qs, "currency", q.currency ?? null);
	putIfHasValue(qs, "state", q.state);
	return qs;
}

const normalizeCard = (item: ApiCatalogItemDTO): CatalogCardUI => ({
	...item,
	tags: item.tags.map(
		({ code }) => TAG_CODES_CONSTANT[code] ?? { label: code }
	),
});

export async function fetchListingsPage(
	query: CatalogQuery,
	signal?: AbortSignal,
	path = "/sell-catalog-offers"
): Promise<CatalogPageUI> {
	const base = process.env.NEXT_PUBLIC_BACKEND_HOST;
	if (!base) throw new Error("NEXT_PUBLIC_BACKEND_HOST is not set");

	const url = new URL(path, base);
	url.search = buildSearchParams(query).toString();

	const res = await fetch(url.toString(), { signal, cache: "no-store" });
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`HTTP ${res.status}: ${text}`);
	}

	const data = (await res.json()) as ApiCatalogPage;

	return {
		...data,
		items: data.items.map(normalizeCard),
	};
}
