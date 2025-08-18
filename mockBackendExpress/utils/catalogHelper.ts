import type { Request, Response } from "express";
import { CURRENCY_RATES } from "../MockData/mockData";
export type ApiTag = {
	code:
		| "object_verified"
		| "only_on_oneBaan"
		| "beneficial_price"
		| "with_furniture";
	label: string;
	color: string;
};

export type CatalogItem = {
	idOfCard: string;
	apartmentImages: { images: string[] };
	priceUsd: number;
	pricePerMeterUsd: number;
	iconRow: { icons: { iconPath: string; value: number | string }[] };
	agentLogo: string;
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	breadcrumbs: { label: string; href: string }[];
	isLiked: boolean;
	ageDays: number;
	translations: {
		en: { cardDescription: string; details: string };
		ru: { cardDescription: string; details: string };
	};
	tags: ApiTag[];
};

export type ListingCardBase = {
	idOfCard: string;
	apartmentImages: { images: string[] };
	price: string;
	pricePerMeter: string;
	iconRow: { icons: { iconPath: string; value: number | string }[] };
	details: string;
	cardDescription: string;
	agentLogo: string;
	tags: ApiTag[];
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	whenPosted: string;
	breadcrumbs: { label: string; href: string }[];
	isLiked: boolean;
};

type ListQuery = {
	search: string;
	location: string;
	bedsMin?: number;
	bathsMin?: number;
	minPrice?: number;
	maxPrice?: number;
	sortBy: "recommended" | "newest" | "oldest" | "popular";
	locale: "en" | "ru";
	currency: "USD" | "THB" | "RUB" | "EUR";
	page: number;
	limit: number;
};

const SYMBOL: Record<ListQuery["currency"], string> = {
	USD: "$",
	THB: "฿",
	RUB: "₽",
	EUR: "€",
};

function fmtMoney(usd: number, cur: ListQuery["currency"]) {
	const amount = Math.round(usd * CURRENCY_RATES[cur]);
	return `${SYMBOL[cur]}${amount.toLocaleString()}`;
}

export function whenPostedLabelFromAge(ageDays: number, locale: "ru" | "en") {
	const d = Math.max(0, Math.floor(ageDays || 0));
	if (locale === "en")
		return d === 0 ? "Today" : d === 1 ? "Yesterday" : `${d}d ago`;
	return d === 0 ? "Сегодня" : d === 1 ? "Вчера" : `${d} д. назад`;
}

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

function valueOfIcon(item: CatalogItem, needle: "bed" | "bath") {
	const it = item.iconRow.icons.find((i) =>
		i.iconPath.toLowerCase().includes(needle)
	);
	return typeof it?.value === "number" ? it!.value : Number(it?.value) || 0;
}

function matchesLocation(breadcrumbs: CatalogItem["breadcrumbs"], loc: string) {
	if (!loc) return true;
	return breadcrumbs.some((b) => {
		if (b.label.toLowerCase() === loc) return true;
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
				list = list.filter((c) => valueOfIcon(c, "bed") >= q.bedsMin!);
			if (q.bathsMin != null)
				list = list.filter(
					(c) => valueOfIcon(c, "bath") >= q.bathsMin!
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
						c.pricePerMeterUsd,
						q.currency
					)}/m²`,
					iconRow: c.iconRow,
					details: t.details,
					cardDescription: t.cardDescription,
					agentLogo: c.agentLogo,
					tags: c.tags,
					contactWhatsApp: c.contactWhatsApp,
					contactWithSalesman: c.contactWithSalesman,
					whenPosted: whenPostedLabelFromAge(c.ageDays, q.locale),
					breadcrumbs: c.breadcrumbs,
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
