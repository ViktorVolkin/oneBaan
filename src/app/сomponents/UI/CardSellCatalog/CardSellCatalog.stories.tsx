import type { Meta, StoryObj } from "@storybook/react";
import { CardSellCatalog } from "./CardSellCatalog";
import BiBed from "../../assets/BiBed.svg";
import BiBath from "../../assets/BiBath.svg";
import BiBorderOuter from "../../assets/BiBorderOuter.svg";
import Check from "../../assets/BiCheckCircle.svg?react";
import Price from "../../assets/BiDollar.svg?react";
import Mebel from "../../assets/MdOutlineChair.svg?react";
import authorIcon from "../../assets/agent-logo.svg";

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
		iconRow: [
			{ iconPath: BiBed, value: 3 },
			{ iconPath: BiBath, value: 2 },
			{ iconPath: BiBorderOuter, value: "110 м²" },
		],
		tags: [
			{ label: "Новостройка", color: "green", svgIconComponent: Check },
			{ label: "Ремонт", color: "blue", svgIconComponent: Price },
			{ label: "Мебель", color: "yellow", svgIconComponent: Mebel },
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
