export type Locale = "en" | "ru";

export type ApiTag = {
	code:
		| "object_verified"
		| "only_on_oneBaan"
		| "beneficial_price"
		| "with_furniture"
		| "with_parking"
		| "ready_for_rent"
		| "form_of_ownership"
		| "guards"
		| "view_on_mountains"
		| "with_pool"
		| "with_gym"
		| "with_child_club"
		| "reception"
		| "with_cameras"
		| "guarded_whole_day"
		| "with_coworking"
		| "access_by_card"
		| "with_restaurant"
		| "with_garden";
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
	stats?: {
		amountOfBeds: number;
		amountOfBaths: number;
		area: number;
	};
	agentLogo: string;
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	breadcrumbs: CatalogBreadcrumb[];
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
	details: string;
	cardDescription: string;
	agentLogo: string;
	tags: { code: ApiTag["code"] }[];
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	whenPosted: string;
	breadcrumbs: { href: string; label: string }[];
};
