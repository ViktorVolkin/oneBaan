import type { Meta, StoryObj } from "@storybook/nextjs";
import { ComplexCardsMinPrices } from "./ComplexCardsMinPrices";

const meta: Meta<typeof ComplexCardsMinPrices> = {
	title: "UI/ComplexCardsMinPrices",
	component: ComplexCardsMinPrices,
};
export default meta;
type Story = StoryObj<typeof ComplexCardsMinPrices>;

export const Default: Story = {
	args: {
		size: "md",
		cards: [
			{
				type: "1-комнатные",
				priceStartsFrom: "от $100,000",
				amountOfApartments: "10 квартир",
			},
			{
				type: "2-комнатные",
				priceStartsFrom: "от $150,000",
				amountOfApartments: "8 квартир",
			},
			{
				type: "3-комнатные",
				priceStartsFrom: "от $200,000",
				amountOfApartments: "5 квартир",
			},
		],
	},
};
