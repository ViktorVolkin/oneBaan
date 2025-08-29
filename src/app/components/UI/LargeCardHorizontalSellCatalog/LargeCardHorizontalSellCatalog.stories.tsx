import type { Meta, StoryObj } from "@storybook/react";
import { LargeCardHorizontalSellCatalog } from "./LargeCardHorizontalSellCatalog";
import type { ILargeCardHorizontal } from "../../types/ILargeCardHorizontal";
import BiBed from "../../assets/BiBed.svg";
import BiBath from "../../assets/BiBath.svg";
import BiBorderOuter from "../../assets/BiBorderOuter.svg";
import Check from "../../assets/BiCheckCircle.svg?react";
import Price from "../../assets/BiDollar.svg?react";
import Mebel from "../../assets/MdOutlineChair.svg?react";
import Logo from "../../assets/logo.svg?react";
import authorIcon from "../../assets/agent-logo.svg";

const meta: Meta<ILargeCardHorizontal> = {
	title: "Cards/LargeCardHorizontal",
	component: LargeCardHorizontalSellCatalog,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<ILargeCardHorizontal>;

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
		iconRow: [
			{ iconPath: BiBed, value: 2 },
			{ iconPath: BiBath, value: 4 },
			{ iconPath: BiBorderOuter, value: "2038 м²" },
		],
		tags: [
			{ label: "Новостройка", color: "green", svgIconComponent: Check },
			{ label: "Ремонт", color: "blue", svgIconComponent: Price },
			{ label: "Новостройка", color: "yellow", svgIconComponent: Mebel },
			{ label: "Новостройка", color: "black", svgIconComponent: Logo },
		],
		agentLogo: authorIcon,
		contactWithSalesman: { path: "#" },
		contactWhatsApp: { path: "#" },
	},
};
