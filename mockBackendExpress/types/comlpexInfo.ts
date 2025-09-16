import { ApiTag } from "./ApiListingCard";
import { Breadcrumb } from "./breadcrumb";
import { ListingCardBaseDTO } from "./sellCardDetailed";

export type ComplexInfoType = {
	images: string[];
	offerDetail: string;
	breadcrumbs: Breadcrumb[];
	complexMinPrices: {
		sell: {
			amountOfApartments?: number;
			minPrice?: string;
		};
		rent: {
			amountOfApartments?: number;
			minPrice?: string;
		};
	};
	detailValues: {
		yearOfBuilding?: string;
		distanceToSea?: string;
		level?: string;
		amountOfApartments: string;
	};
	complex: {
		complexName: string;
		complexImage: string;
		yearOfBuilding?: number;
		amountOfApartments?: number;
		builder?: string;
		tags: ApiTag[];
	};

	moreFromComplex: {
		nameOfComplex: string;
		sellCards: Omit<
			ListingCardBaseDTO,
			"tags" | "breadcrumbs" | "cardDescription"
		>[];
		rentCards: Omit<ListingCardBaseDTO, "tags" | "breadcrumbs">[];
	};

	location: {
		image: string;
		breadcrumbs: Breadcrumb[];
		toLocationHref: string;
		countryName: string;
	};
	agent: {
		agentIcon: string;
		agentName: string;
		agentExperienceOnPhuket?: string;
		phuketWorkingHours?: string;
		languages?: string;
		allOffers: { href: string; amountOfOffers: string };
		agentStatus: { text: string; img: string };
		phoneHref: string;
		whatsAppHref: string;
	};

	similar: {
		tags: string[];

		cards: {
			cardDescription: string;
			mainImage: string;
			idOfCard: string;
			phoneHref: string;
			whatsAppHref: string;
			cardsBasePath: string;
			details: string;
			breadcrumbs: { label: string; href: string }[];
			complexMinPrices: {
				sell: {
					amountOfApartments?: number;
					minPrice?: string;
				};
				rent: {
					amountOfApartments?: number;
					minPrice?: string;
				};
			};
		}[];
	};
};
