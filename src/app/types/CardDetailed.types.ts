export interface CardDetailedBaseProps {
	images: string[];
	offerId: string;
	breadcrumbs: { label: string; href: string }[];
	price: string;
	propDetailsCard: Array<{
		title: string;
		text: string;
		icon: string;
		leadsTo?: string;
	}>;
	subText?: string;
}

export interface SellCardDetailedProps extends CardDetailedBaseProps {
	mode: "Sell" | "Rent" | "Complex";
	tagsSell?: import("./CardTags.types").CardTagsProps;
	offerFeatureText: string;
	tagsDetailed: import("./CardTags.types").CardTagsProps;
	detailsOnOneBaan: {
		daysOnOneBaan: number;
		amountOfViews: number;
	};
	stats: {
		amountOfBeds: number;
		amountOfBaths: number;
		area: number;
	};
	offerDetail: string;
}

export interface RentCardDetailedProps extends CardDetailedBaseProps {
	isRent: true;
	offerDetail: string;
}

export type CardDetailedProps = SellCardDetailedProps | RentCardDetailedProps;
