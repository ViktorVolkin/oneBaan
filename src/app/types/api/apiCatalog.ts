import type { CardTagProps } from "@/app/types/CardTags.types";

export type Locale = "en" | "ru";
export type Currency = "USD" | "THB" | "RUB" | "EUR";

export type BreadcrumbUI = { href: string; label: string };
export type ApiCatalogTag = { code: string };

export type ApiCatalogItemDTO = {
	idOfCard: string;
	apartmentImages: { images: string[] };

	price: string;
	pricePerMeter?: string;

	stats: { amountOfBeds: number; amountOfBaths: number; area: number };

	details?: string;
	cardDescription?: string;

	agentLogo?: string;
	tags: ApiCatalogTag[];

	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	whenPosted: string;
	breadcrumbs: BreadcrumbUI[];

	isRentCard?: boolean;
	mainImage?: string;
};

export type ApiCatalogPage = {
	items: ApiCatalogItemDTO[];
	page: number;
	limit: number;
	total: number;
	hasMore: boolean;
};

export type CatalogCardUI = Omit<ApiCatalogItemDTO, "tags"> & {
	tags: CardTagProps[];
};

export type CatalogPageUI = {
	items: CatalogCardUI[];
	page: number;
	limit: number;
	total: number;
	hasMore: boolean;
};
