const image1 = "/backgroundImage.png";
const image2 = "/realEstateSpecialistBlock_image.jpg";

import type { Meta, StoryObj } from "@storybook/react";
import CardSlider from "./CardSlider";
import { IntlProvider } from "next-intl";
import React from "react";
import { ICard } from "@/app/types/Card.types";

const messages = {
	en: {
		card: {
			villa: "Luxury Villa",
			condo: "Modern Condo",
			house: "Family House",
		},
	},
};

const data: ICard[] = [
	{
		image: image1,
		price: "$500,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.villa",
	},
	{
		image: image2,
		price: "$300,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.condo",
	},
	{
		image: image1,
		price: "$700,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.house",
	},
	{
		image: image2,
		price: "$500,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.villa",
	},
	{
		image: image1,
		price: "$300,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.condo",
	},
	{
		image: image2,
		price: "$700,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.house",
	},
	{
		image: image1,
		price: "$500,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.villa",
	},
	{
		image: image2,
		price: "$300,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.condo",
	},
	{
		image: image1,
		price: "$700,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.house",
	},
];

const meta: Meta<typeof CardSlider> = {
	title: "Components/CardSlider",
	component: CardSlider,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<IntlProvider locale="en" messages={messages.en}>
				<div style={{ width: "1024px", margin: "0 auto" }}>
					<Story />
				</div>
			</IntlProvider>
		),
	],
};

export default meta;
type Story = StoryObj<typeof CardSlider>;

export const Default: Story = {
	args: { data },
	parameters: {
		docs: {
			description: {
				story: "Default card slider with sample property cards.",
			},
		},
	},
};

export const MobileView: Story = {
	args: { data },
	render: (args) => (
		<div style={{ width: "375px" }}>
			<CardSlider {...args} />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Card slider displayed in a mobile viewport width.",
			},
		},
	},
};

export const DesktopView: Story = {
	args: { data },
	render: (args) => (
		<div style={{ width: "1440px" }}>
			<CardSlider {...args} />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Card slider displayed in a desktop viewport width.",
			},
		},
	},
};
