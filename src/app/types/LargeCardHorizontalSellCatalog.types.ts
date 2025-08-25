import type { IconRowProps } from "./IconRow.types";
import type { CardTagProps } from "./CardTags.types";

export interface ListingCardBase {
	idOfCard: string;

	apartmentImages: { images: string[] };

	price: string;
	pricePerMeter: string;

	// iconRow убран, теперь используем stats
	stats: {
		amountOfBeds?: number;
		amountOfBaths?: number;
		area?: number;
	};

	details: string;
	cardDescription: string;

	agentLogo: string;

	tags: CardTagProps[];

	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };

	whenPosted: string;
	breadcrumbs: { label: string; href: string }[];
	isRentCard: boolean;
	mainImage?: string;
}

export type ListingCardProps = ListingCardBase;
