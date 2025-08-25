import type { Request, Response } from "express";
import { CURRENCY_RATES } from "../MockData/mockData";
import type {
	ApiTag,
	CatalogItem,
	ListingCardBase,
} from "../types/ApiListingCard";
import { ListQuery } from "../types/ListQuery";
import { whenPostedLabelFromAge } from "./whenPosted";

const SYMBOL: Record<ListQuery["currency"], string> = {
	USD: "$",
	THB: "฿",
	RUB: "₽",
	EUR: "€",
};

function fmtMoney(usd: number | null, cur: ListQuery["currency"]) {
	if (!usd || !CURRENCY_RATES[cur]) return "";
	const amount = Math.round(usd * CURRENCY_RATES[cur]);
	return `${SYMBOL[cur]}${amount.toLocaleString()}`;
}

type Locale = "en" | "ru";

const pickLocale = <T extends Record<Locale, string>>(
	dict: T,
	locale: Locale
) => dict[locale] ?? dict.en;

const localizeBreadcrumbs = (
	arr: CatalogItem["breadcrumbs"],
	locale: Locale
): { href: string; label: string }[] =>
	arr.map((b) => ({
		href: b.href,
		label: pickLocale(b.translations, locale),
	}));

const localizeTags = (
	arr: ApiTag[],
	locale: Locale
): { code: ApiTag["code"]; color: string; label: string }[] =>
	arr.map((t) => ({
		code: t.code,
		color: t.color,
		label: pickLocale(t.translations, locale),
	}));

const toNum = (v: unknown) => {
	const n = Number(v);
	return Number.isFinite(n) ? n : undefined;
};

function parseListQuery(q: Record<string, any>): ListQuery {
	const s = (v: any) =>
		String(v ?? "")
			.trim()
			.toLowerCase();
	const bedsMin = q.beds === "4plus" ? 4 : toNum(q.beds);
	const bathsMin = q.baths === "4plus" ? 4 : toNum(q.baths);

	const currency = String(
		q.currency ?? "USD"
	).toUpperCase() as ListQuery["currency"];
	const safeCurrency: ListQuery["currency"] = [
		"USD",
		"THB",
		"RUB",
		"EUR",
	].includes(currency)
		? currency
		: "USD";

	return {
		search: s(q.search),
		location: s(q.location),
		bedsMin,
		bathsMin,
		minPrice: toNum(q.minPrice),
		maxPrice: toNum(q.maxPrice),
		sortBy: String(
			q.sortBy ?? "recommended"
		).toLowerCase() as ListQuery["sortBy"],
		locale: q.locale === "ru" ? "ru" : "en",
		currency: safeCurrency,
		page: Math.max(1, parseInt(q.page ?? "1", 10) || 1),
		limit: Math.min(100, Math.max(1, parseInt(q.limit ?? "12", 10) || 12)),
	};
}

function matchesLocation(breadcrumbs: CatalogItem["breadcrumbs"], loc: string) {
	if (!loc) return true;
	return breadcrumbs.some((b) => {
		if (b.translations.en.toLowerCase() === loc) return true;
		const qs = new URLSearchParams(b.href.split("?")[1] ?? "");
		return (qs.get("location") ?? "").toLowerCase() === loc;
	});
}

export function makeCatalogHandler(data: CatalogItem[]) {
	return function catalogHandler(req: Request, res: Response) {
		try {
			const q = parseListQuery(req.query as any);

			let list = data.slice();

			if (q.search) {
				list = list.filter((c) => {
					const t = c.translations[q.locale];
					return [t.cardDescription, t.details].some((s) =>
						s.toLowerCase().includes(q.search)
					);
				});
			}

			if (q.location)
				list = list.filter((c) =>
					matchesLocation(c.breadcrumbs, q.location)
				);

			if (q.bedsMin != null)
				list = list.filter(
					(c) => (c.stats?.amountOfBeds ?? 0) >= q.bedsMin!
				);
			if (q.bathsMin != null)
				list = list.filter(
					(c) => (c.stats?.amountOfBaths ?? 0) >= q.bathsMin!
				);

			if (q.minPrice != null)
				list = list.filter((c) => c.priceUsd >= q.minPrice!);
			if (q.maxPrice != null)
				list = list.filter((c) => c.priceUsd <= q.maxPrice!);

			switch (q.sortBy) {
				case "newest":
					list.sort((a, b) => a.ageDays - b.ageDays);
					break;
				case "oldest":
					list.sort((a, b) => b.ageDays - a.ageDays);
					break;
				case "popular":
					list.sort((a, b) => Number(b.isLiked) - Number(a.isLiked));
					break;
			}

			const total = list.length;
			const start = (q.page - 1) * q.limit;
			const chunk = list.slice(start, start + q.limit);
			const hasMore = start + q.limit < total;

			const items: ListingCardBase[] = chunk.map((c) => {
				const t = c.translations[q.locale];
				return {
					idOfCard: c.idOfCard,
					apartmentImages: c.apartmentImages,
					price: fmtMoney(c.priceUsd, q.currency),
					pricePerMeter: `${fmtMoney(
						c.pricePerMeterUsd ?? null,
						q.currency
					)} ${c.pricePerMeterUsd ? "/m²" : ""}`,
					stats: c.stats,
					details: t.details,
					cardDescription: t.cardDescription,
					agentLogo: c.agentLogo,
					tags: localizeTags(c.tags, q.locale),
					contactWhatsApp: c.contactWhatsApp,
					contactWithSalesman: c.contactWithSalesman,
					whenPosted: whenPostedLabelFromAge(c.ageDays, q.locale),
					breadcrumbs: localizeBreadcrumbs(c.breadcrumbs, q.locale),
					isLiked: c.isLiked,
				};
			});

			res.json({ items, page: q.page, limit: q.limit, total, hasMore });
		} catch (e) {
			console.error(e);
			res.status(500).json({ message: "Internal Server Error" });
		}
	};
}
