import type { CardTagProps } from "@/app/types/CardTags.types";
import type { CatalogCardUI, BreadcrumbUI } from "./apiCatalog";

export type ApiTag = { code: string };

export type ApiListingCardBaseDTO = {
	idOfCard: string;
	apartmentImages: { images: string[] };
	price: string;
	pricePerMeter?: string;
	stats: {
		amountOfBeds: number;
		amountOfBaths: number;
		area: number;
	};
	details?: string;
	cardDescription?: string;
	agentLogo?: string;
	tags: ApiTag[];
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	whenPosted: string;
	breadcrumbs: BreadcrumbUI[];
	isRentCard?: boolean;
	mainImage?: string;
};

export type ApiSellCardDetailedResponse = {
	images: string[];
	amountOfLikes: number;
	offerDetail: string;
	price: string;
	subText?: string;
	breadcrumbs: BreadcrumbUI[];
	stats: { amountOfBeds: number; amountOfBaths: number; area: number };
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
		cards: ApiListingCardBaseDTO[];
	};
	location: {
		image: string;
		breadcrumbs: BreadcrumbUI[];
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
		cards: ApiListingCardBaseDTO[];
	};
};

export type ListingCardBaseNormalized = Omit<ApiListingCardBaseDTO, "tags"> & {
	tags: CardTagProps[];
};

export type SellCardDetailedResponseNormalized = Omit<
	ApiSellCardDetailedResponse,
	"tagsSell" | "tagsDetailed" | "complex" | "moreFromComplex" | "similar"
> & {
	tagsSell?: { tags: CardTagProps[] };
	tagsDetailed?: { tags: CardTagProps[] };
	complex: Omit<ApiSellCardDetailedResponse["complex"], "tags"> & {
		tags: CardTagProps[];
	};
	moreFromComplex: Omit<
		ApiSellCardDetailedResponse["moreFromComplex"],
		"cards"
	> & {
		cards: ListingCardBaseNormalized[];
	};
	similar: Omit<ApiSellCardDetailedResponse["similar"], "cards"> & {
		cards: ListingCardBaseNormalized[];
	};
};

export type SellDetailsUI = {
	images: string[];
	amountOfLikes: number;
	offerDetail: string;
	price: string;
	subText?: string;
	breadcrumbs: BreadcrumbUI[];
	stats: { amountOfBeds: number; amountOfBaths: number; area: number };
	detailValues: {
		yearOfBuilding?: string;
		distanceToSea?: string;
		level?: string;
		checkOnMapHref: string;
	};
	tagsSell?: { tags: CardTagProps[] };
	offerFeatureText?: string;
	tagsDetailed?: { tags: CardTagProps[] };
	detailsOnOneBaan?: { daysOnOneBaan: number; amountOfViews: number };

	complex: {
		complexName: string;
		complexImage: string;
		yearOfBuilding?: number;
		amountOfApartments?: number;
		builder?: string;
		tags: CardTagProps[];
	};

	moreFromComplex: {
		nameOfComplex: string;
		cards: CatalogCardUI[];
	};

	location: {
		image: string;
		breadcrumbs: BreadcrumbUI[];
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
		cards: CatalogCardUI[];
	};
};
