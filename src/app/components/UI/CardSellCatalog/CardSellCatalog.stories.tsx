import type { Meta, StoryObj } from "@storybook/nextjs";
import { CardSellCatalog } from "./CardSellCatalog";

const authorIcon = "/agent-logo.svg";
import { TAG_CODES_CONSTANT } from "../../../constants/common";

const meta: Meta<typeof CardSellCatalog> = {
	title: "Cards/Card",
	component: CardSellCatalog,
};

export default meta;

type Story = StoryObj<typeof CardSellCatalog>;

export const Example: Story = {
	args: {
		apartmentImages: {
			images: [
				"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
				"https://images.unsplash.com/photo-1506744038136-46273834b3fc",
				"https://images.unsplash.com/photo-1506744038136-46273834b3fd",
			],
		},
		price: "$1,200,000",
		pricePerMeter: "$15,200 за м²",
		cardDescription: "Просторная квартира с панорамными окнами",
		details: "3 этаж из 12 | Монолитный дом",
		breadcrumbs: [
			{ href: "#", label: "Главная" },
			{ href: "#", label: "Москва" },
			{ href: "#", label: "ЖК Счастье" },
		],
		stats: {
			amountOfBeds: 3,
			amountOfBaths: 2,
			area: 110,
		},
		tags: [
			TAG_CODES_CONSTANT["object_verified"],
			TAG_CODES_CONSTANT["with_furniture"],
			TAG_CODES_CONSTANT["beneficial_price"],
		],
		agentLogo: authorIcon,
		contactWithSalesman: {
			path: "tel:+70000000000",
		},
		contactWhatsApp: {
			path: "https://wa.me/70000000000",
		},

		whenPosted: "2 дня назад",
	},
};
