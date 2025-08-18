export const TAG_CODES = [
	"object_verified",
	"only_on_oneBaan",
	"beneficial_price",
	"with_furniture",
] as const;
export type TagCode = (typeof TAG_CODES)[number];

export interface ApiTag {
	code: TagCode;
	label: string;
	color: string;
}

export type ApiListingCard = {
	idOfCard: string;
	apartmentImages: { images: string[] };
	priceUsd: number;
	pricePerMeterUsd: number;
	iconRow: { icons: { iconPath: string; value: number | string }[] };
	agentLogo: string;
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	breadcrumbs: { label: string; href: string }[];
	isLiked: boolean;
	ageDays: number;
	translations: {
		en: { cardDescription: string; details: string };
		ru: { cardDescription: string; details: string };
	};
	tags: ApiTag[];
};
