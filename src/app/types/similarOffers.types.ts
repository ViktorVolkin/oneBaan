import { ComplexCardsMinPricesProps } from "../components/UI/ComplexCardsMinPrices/ComplexCardsMinPrices";
import type { ListingCardBase } from "./LargeCardHorizontalSellCatalog.types";

export interface SimilarCardBase {
	cardDescription: string;
	mainImage: string;
	idOfCard: string;
	phoneHref: string;
	whatsAppHref: string;
	cardsBasePath: string;
	details: string;
	breadcrumbs: { label: string; href: string }[];
}

export interface SimilarRentCard extends SimilarCardBase {
	mode: "Rent";
	stats: {
		amountOfBeds?: number;
		amountOfBaths?: number;
		area?: number;
	};
	price: string;
}

export interface SimilarComplexCard extends SimilarCardBase {
	mode: "Complex";
	complexMinPrices: {
		sell: {
			amountOfApartments: number;
			minPrice: string;
		};
		rent: {
			amountOfApartments: number;
			minPrice: string;
		};
	};
}
export type SimilarCard = SimilarComplexCard | SimilarRentCard;
export type SimilarOffersProps =
	| {
			titleKey?: string;
			mode?: "Sell";
			tags: string[];
			cards: (ListingCardBase & { mainImage: string })[];
			cardsBasePath: string;
	  }
	| {
			titleKey?: string;
			mode: "Rent";
			tags: string[];
			cards: SimilarRentCard[];
			cardsBasePath: string;
	  }
	| {
			titleKey?: string;
			mode: "Complex";
			tags: string[];
			cards: SimilarComplexCard[];
			cardsBasePath: string;
	  };
