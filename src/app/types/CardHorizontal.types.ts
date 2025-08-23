export interface CardHorizontalProps {
	apartmentImages: {
		images: string[];
	};
	price: string;
	pricePerMeter?: string;
	iconRow?: { iconPath: string; value: number | string }[];
	details: string;
	agentLogo: string;
	idOfCard: string;
}
