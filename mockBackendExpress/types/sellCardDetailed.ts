import { ApiTag } from "./ApiListingCard";
import { Breadcrumb } from "./breadcrumb";
export interface ListingStats {
	amountOfBeds: number;
	amountOfBaths: number;
	area: number;
}
export type ListingCardBaseDTO = {
	idOfCard: string;
	apartmentImages: { images: string[] };
	price: string;
	pricePerMeter?: string;
	stats: ListingStats;
	details?: string;
	cardDescription?: string;
	agentLogo?: string;
	tags: ApiTag[];
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	breadcrumbs: Breadcrumb[];
	mainImage?: string;
};
export type ListingSellDetailsDTO = {
	images: string[];
	amountOfLikes: number;
	offerDetail: string;
	price: string;
	subText?: string;
	breadcrumbs: Breadcrumb[];
	stats: ListingStats;
	detailValues: {
		yearOfBuilding?: string;
		distanceToSea?: string;
		level?: string;
		checkOnMapHref: string;
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
		cards: Omit<ListingCardBaseDTO, "mainImage">[];
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
		cards: ListingCardBaseDTO[];
	};
};
