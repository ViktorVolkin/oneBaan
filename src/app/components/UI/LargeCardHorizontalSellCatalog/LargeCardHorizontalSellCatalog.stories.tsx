import type { Meta, StoryObj } from "@storybook/react";
import { LargeCardHorizontalSellCatalog } from "./LargeCardHorizontalSellCatalog";
const authorIcon = "/agent-logo.svg";
import { TAG_CODES_CONSTANT } from "../../../constants/common";

const meta: Meta<typeof LargeCardHorizontalSellCatalog> = {
	title: "Cards/LargeCardHorizontal",
	component: LargeCardHorizontalSellCatalog,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LargeCardHorizontalSellCatalog>;

export const Default: Story = {
	args: {
		apartmentImages: {
			images: [
				"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
				"https://images.unsplash.com/photo-1506744038136-46273834b3fc",
			],
		},
		price: "$1,200,000",
		pricePerMeter: "$15,200 за м²",
		cardDescription: "Просторная квартира с видом на горы",
		details: "3/6 этаж | Вид на горы",
		stats: {
			amountOfBeds: 2,
			amountOfBaths: 4,
			area: 2038,
		},
		tags: [
			TAG_CODES_CONSTANT["object_verified"],
			TAG_CODES_CONSTANT["with_furniture"],
			TAG_CODES_CONSTANT["beneficial_price"],
		],
		agentLogo: authorIcon,
		contactWithSalesman: { path: "#" },
		contactWhatsApp: { path: "#" },
	},
};
