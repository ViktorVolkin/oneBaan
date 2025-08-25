export interface CardHorizontalProps {
	apartmentImages: {
		images: string[];
	};
	price: string;
	pricePerMeter?: string;
	stats?: {
		amountOfBeds?: number;
		amountOfBaths?: number;
		area?: number;
	};
	details: string;
	agentLogo: string;
	idOfCard: string;
}
