import type { Meta, StoryObj } from "@storybook/nextjs";
import { MoreOffersFromThisComplexCard } from "./MoreOffersFromThisComplexCard";
// import type { ListingCardBase } from "../../../types/LargeCardHorizontalSellCatalog.types";
import { TAG_CODES_CONSTANT } from "../../../constants/common";

const meta: Meta<typeof MoreOffersFromThisComplexCard> = {
	title: "UI/MoreOffersFromThisComplexCard",
	component: MoreOffersFromThisComplexCard,
};
export default meta;
type Story = StoryObj<typeof MoreOffersFromThisComplexCard>;

const baseArgs = {
	idOfCard: "1",
	apartmentImages: {
		images: [
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
		],
	},
	price: "$1,200,000",
	pricePerMeter: "$15,200 за м² ",
	stats: { amountOfBeds: 2, amountOfBaths: 3, area: 2010 },
	details: "Короткое описание",
	cardDescription: "Описание карточки",
	agentLogo: "/agent-logo.svg",
	tags: [
		TAG_CODES_CONSTANT["object_verified"],
		TAG_CODES_CONSTANT["only_on_oneBaan"],
		TAG_CODES_CONSTANT["beneficial_price"],
		TAG_CODES_CONSTANT["with_furniture"],
	],
	contactWhatsApp: { path: "" },
	contactWithSalesman: { path: "" },
	whenPosted: "2 дня назад",
	breadcrumbs: [],
	mainImage: "/backgroundImage.png",
	cardsBasePath: "/catalog/sell",
};

export const Sell: Story = {
	args: {
		...baseArgs,
		mode: "Sell",
	},
};

export const Rent: Story = {
	args: {
		...baseArgs,
		mode: "Rent",
		cardsBasePath: "/catalog/rent",
	},
};

export const Complex: Story = {
	args: {
		...baseArgs,
		mode: "Complex",
		pricePerMeter: "$15,200 за м² ",
		cardsBasePath: "/complex",
	},
};
