import type { ListingCardBase } from "./LargeCardHorizontalSellCatalog.types";

export interface SimilarRentCard {
	idOfCard: string;
	price: string;
	mainImage: string;
	cardDescription: string;
	details: string;
	breadcrumbs: { label: string; href: string }[];
	iconRow?: ListingCardBase["iconRow"];
	phoneHref: string;
	whatsAppHref: string;
}

export type SimilarOffersProps =
	| {
			isRent: false;
			tags: string[];
			cards: (ListingCardBase & { mainImage: string })[];
	  }
	| {
			isRent: true;
			tags: string[];
			cards: SimilarRentCard[];
	  };
