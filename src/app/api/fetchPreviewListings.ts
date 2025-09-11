import { buildSearchParams, CatalogQuery } from "./fetchListingsCatalog";

export async function fetchListingsPreview(
	query: Omit<CatalogQuery, "page" | "limit">,
	signal?: AbortSignal,
	path = "/sell-catalog-offers/preview"
): Promise<{ total: number }> {
	const base = process.env.NEXT_PUBLIC_BACKEND_HOST;
	if (!base) throw new Error("NEXT_PUBLIC_BACKEND_HOST is not set");

	const url = new URL(path, base);
	const qs = buildSearchParams({
		...query,
	});
	url.search = qs.toString();

	const res = await fetch(url.toString(), { signal, cache: "no-store" });
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`HTTP ${res.status}: ${text}`);
	}

	const data = (await res.json()) as { total: number };
	if (typeof data.total !== "number") {
		throw new Error("Invalid preview response: no total");
	}
	return data;
}
