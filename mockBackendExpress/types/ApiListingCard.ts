export type Locale = "en" | "ru";

export type ApiTag = {
	code:
		| "object_verified"
		| "only_on_oneBaan"
		| "beneficial_price"
		| "with_furniture";
	color: string;
	translations: Record<Locale, string>;
};

export type CatalogBreadcrumb = {
	href: string;
	translations: Record<Locale, string>;
};

export type CatalogItem = {
	idOfCard: string;
	apartmentImages: { images: string[] };
	priceUsd: number;
	pricePerMeterUsd?: number;
	iconRow: { icons: { iconPath: string; value: number | string }[] };
	agentLogo: string;
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	breadcrumbs: CatalogBreadcrumb[];
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
	tags: { code: ApiTag["code"]; color: string; label: string }[];
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	whenPosted: string;
	breadcrumbs: { href: string; label: string }[];
	isLiked: boolean;
};
