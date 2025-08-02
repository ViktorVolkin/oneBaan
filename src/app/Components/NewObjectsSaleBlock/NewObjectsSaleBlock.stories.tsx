import type { Meta, StoryObj } from "@storybook/react";
import { NewObjectsSaleBlock } from "./NewObjectsSaleBlock";
import MockImage from "@/../public/backgroundImage.png";

const fakeRecentlyAddedForSale = [
	{
		image: MockImage,
		price: "$124,200",
		details: "properties.bangtaoApartment2br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$98,500",
		details: "properties.patongStudio1br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$210,000",
		details: "properties.kamalaVilla3br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$150,000",
		details: "properties.cherngtalayTownhouse2br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$175,000",
		details: "properties.rawaiCondo2br",
		whatsAppLink: "https://whatsapp",
	},
];

const meta: Meta<typeof NewObjectsSaleBlock> = {
	title: "Components/NewObjectsSaleBlock",
	component: NewObjectsSaleBlock,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewObjectsSaleBlock>;

export const Default: Story = {
	args: {
		data: fakeRecentlyAddedForSale,
	},
};
