import type { Meta, StoryObj } from "@storybook/nextjs";
import { SimilarOffersRentCard } from "./SimilarOffersRentCard";
import type { SimilarRentCard } from "../../../types/similarOffers.types";

const meta: Meta<typeof SimilarOffersRentCard> = {
	title: "UI/SimilarOffersRentCard",
	component: SimilarOffersRentCard,
};
export default meta;
type Story = StoryObj<typeof SimilarOffersRentCard>;

export const Default: Story = {
	args: {
		mainImage:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
		cardDescription: "Уютная квартира",
		price: "$800",
		details: "2/5 этаж | Центр города",
		stats: { amountOfBeds: 2, amountOfBaths: 1, area: 45 },
		breadcrumbs: [
			{ label: "Главная", href: "/" },
			{ label: "Аренда", href: "/rent" },
		],
	} as SimilarRentCard,
};
