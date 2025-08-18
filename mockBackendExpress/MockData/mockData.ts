import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { Offer } from "../types/offers";
import { Subscriber } from "../types/subscriber";
import { ApiListingCard } from "../types/ApiListingCard";
export const CURRENCY_RATES: Record<string, number> = {
	USD: 1,
	THB: 36,
	RUB: 92,
	EUR: 0.9,
};

export function formatPrice(
	usd: number,
	currency: string
): { amount: number; formatted: string; currency: string } {
	const cur = currency.toUpperCase();
	const rate = CURRENCY_RATES[cur] ?? 1;
	const amount = Math.round(usd * rate);
	const symbol =
		cur === "USD" ? "$" : cur === "THB" ? "฿" : cur === "RUB" ? "₽" : "€";
	return {
		amount,
		formatted: `${symbol}${amount.toLocaleString()}`,
		currency: cur,
	};
}

export const OFFERS: Offer[] = [
	{
		id: "1",
		type: "rent",
		translations: {
			en: {
				title: "Cozy apartment",
				description: "Description of a cozy apartment",
			},
			ru: {
				title: "Уютная квартира",
				description: "Описание уютной квартиры",
			},
		},
	},
	{
		id: "2",
		type: "buy",
		translations: {
			en: { title: "Seaside villa", description: "Villa near the sea" },
			ru: { title: "Вилла у моря", description: "Описание виллы у моря" },
		},
	},
	{
		id: "3",
		type: "buy",
		translations: {
			en: {
				title: "City center condo",
				description: "Description of a city center condo",
			},
			ru: {
				title: "Кондо в центре",
				description: "Описание кондо в центре",
			},
		},
	},
];

type RecentlyItem = {
	id: string;
	image: string;
	priceUsd: number;
	translations: {
		en: { details: string };
		ru: { details: string };
	};
	whatsAppLink: string;
};

export const RECENTLY: RecentlyItem[] = [
	{
		id: "1",
		image: "/backgroundImage.png",
		priceUsd: 3500,
		translations: {
			en: { details: "Bangtao apartment, 2BR" },
			ru: { details: "Апартаменты Бангтао, 2 спальни" },
		},
		whatsAppLink: "https://wa.me/1234567890",
	},
	{
		id: "2",
		image: "https://picsum.photos/500/600?2",
		priceUsd: 98500,
		translations: {
			en: { details: "Patong studio, 1BR" },
			ru: { details: "Студия Патонг, 1 спальня" },
		},
		whatsAppLink: "https://wa.me/1234567890",
	},
	{
		id: "3",
		image: "https://picsum.photos/500/600?3",
		priceUsd: 210000,
		translations: {
			en: { details: "Kamala villa, 3BR" },
			ru: { details: "Вилла Камала, 3 спальни" },
		},
		whatsAppLink: "https://wa.me/1234567890",
	},
	{
		id: "4",
		image: "https://picsum.photos/500/600?4",
		priceUsd: 150000,
		translations: {
			en: { details: "Cherngtalay townhouse, 2BR" },
			ru: { details: "Таунхаус Чернгталай, 2 спальни" },
		},
		whatsAppLink: "https://wa.me/1234567890",
	},
	{
		id: "5",
		image: "https://picsum.photos/500/600?5",
		priceUsd: 175000,
		translations: {
			en: { details: "Rawai condo, 2BR" },
			ru: { details: "Кондо Раваи, 2 спальни" },
		},
		whatsAppLink: "https://wa.me/1234567890",
	},
	{
		id: "6",
		image: "https://picsum.photos/500/600?6",
		priceUsd: 195000,
		translations: {
			en: { details: "Rawai condo, 4BR" },
			ru: { details: "Кондо Раваи, 4 спальни" },
		},
		whatsAppLink: "https://wa.me/1234567890",
	},
];

export const SUBSCRIBERS: Subscriber[] = [
	{ id: "1", email: "test@example.com" },
];
