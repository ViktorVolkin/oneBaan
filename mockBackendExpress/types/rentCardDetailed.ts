import { ApiTag } from "./ApiListingCard";
import { Breadcrumb } from "./breadcrumb";
import { ListingCardBaseDTO } from "./sellCardDetailed";

export type RentListingDetailsDTO = {
	images: string[];
	offerDetail: string;
	price: string;
	subText?: string;
	breadcrumbs: Breadcrumb[];
	stats: { amountOfBeds: number; amountOfBaths: number; area: number };
	detailValues: {
		yearOfBuilding?: string;
		distanceToSea?: string;
		level?: string;
		amountOfApartments: string;
	};
	tagsSell?: { tags: ApiTag[] };
	offerFeatureText?: string;
	tagsDetailed?: { tags: ApiTag[] };
	detailsOnOneBaan?: { daysOnOneBaan: number; amountOfViews: number };
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
		cards: Omit<
			ListingCardBaseDTO,
			| "pricePerMeter"
			| "breadcrumbs"
			| "tags"
			| "cardDescription"
			| "contactWhatsApp"
			| "contactWithSalesman"
		>[];
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
		cards: Omit<
			ListingCardBaseDTO,
			"pricePerMeter" | "tags" | "apartmentImages"
		>[];
	};
};
