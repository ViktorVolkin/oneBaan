import type { Meta, StoryObj } from "@storybook/nextjs";
import { SimilarOffers } from "./SimilarOffers";
const meta: Meta<typeof SimilarOffers> = {
	title: "Blocks/SimilarOffers",
	component: SimilarOffers,
	parameters: {
		layout: "padded",
		nextjs: { appDirectory: true, image: { unoptimized: true } },
	},
};
export default meta;

const rentCards = [
	{
		idOfCard: "rent1",
		mainImage: "/backgroundImage.png",
		cardDescription: "Уютная квартира в центре города.",
		phoneHref: "tel:+79999999999",
		whatsAppHref: "https://wa.me/79999999999",
		cardsBasePath: "/rent/",
		details: "2-комн. 45 м², 5/9 эт.",
		breadcrumbs: [
			{ label: "Москва", href: "/moscow" },
			{ label: "ЦАО", href: "/moscow/tsao" },
		],
		mode: "Rent" as const,
		stats: { amountOfBeds: 2, amountOfBaths: 1, area: 45 },
		price: "60 000 ₽/мес",
	},
	{
		idOfCard: "rent2",
		mainImage: "/backgroundImage.png",
		cardDescription: "Светлая студия с новым ремонтом.",
		phoneHref: "tel:+79998887766",
		whatsAppHref: "https://wa.me/79998887766",
		cardsBasePath: "/rent/",
		details: "Студия 28 м², 7/12 эт.",
		breadcrumbs: [
			{ label: "Санкт-Петербург", href: "/spb" },
			{ label: "Петроградский", href: "/spb/petrogradsky" },
		],
		mode: "Rent" as const,
		stats: { amountOfBeds: 1, amountOfBaths: 1, area: 28 },
		price: "45 000 ₽/мес",
	},
];

const sellCards = [
	{
		idOfCard: "sell1",
		mainImage: "/backgroundImage.png",
		apartmentImages: { images: ["/backgroundImage.png"] },
		cardDescription: "Просторная квартира с видом на парк.",
		price: "12 500 000 ₽",
		pricePerMeter: "250 000 ₽/м²",
		stats: { amountOfBeds: 3, amountOfBaths: 2, area: 50 },
		details: "3-комн. 50 м², 10/16 эт.",
		agentLogo: "/agent-logo.svg",
		tags: [],
		contactWhatsApp: { path: "https://wa.me/79997776655" },
		contactWithSalesman: { path: "tel:+79997776655" },
		whenPosted: "2 дня назад",
		breadcrumbs: [
			{ label: "Казань", href: "/kazan" },
			{ label: "Вахитовский", href: "/kazan/vahitovsky" },
		],
		isRentCard: false,
	},
	{
		idOfCard: "sell2",
		mainImage: "/backgroundImage.png",
		apartmentImages: { images: ["/backgroundImage.png"] },
		cardDescription: "Квартира в новом ЖК, развитая инфраструктура.",
		price: "9 800 000 ₽",
		pricePerMeter: "196 000 ₽/м²",
		stats: { amountOfBeds: 2, amountOfBaths: 1, area: 40 },
		details: "2-комн. 40 м², 3/12 эт.",
		agentLogo: "/agent-logo.svg",
		tags: [],
		contactWhatsApp: { path: "https://wa.me/79995554433" },
		contactWithSalesman: { path: "tel:+79995554433" },
		whenPosted: "5 дней назад",
		breadcrumbs: [
			{ label: "Екатеринбург", href: "/ekb" },
			{ label: "Центральный", href: "/ekb/central" },
		],
		isRentCard: false,
	},
];

const complexCards = [
	{
		idOfCard: "complex1",
		mainImage: "/backgroundImage.png",
		cardDescription:
			"Комплекс апартаментов Blue Canyon Golf And Country Club Home",
		phoneHref: "tel:+79991112233",
		whatsAppHref: "https://wa.me/79991112233",
		cardsBasePath: "/complex/",
		details: "ЖК, 12 домов, 2020 г.",
		breadcrumbs: [
			{ label: "Новосибирск", href: "/nsk" },
			{ label: "Ленинский", href: "/nsk/leninsky" },
		],
		mode: "Complex" as const,
		complexMinPrices: {
			sell: { amountOfApartments: 5, minPrice: "8000$" },
			rent: { amountOfApartments: 2, minPrice: "3000$" },
		},
	},
];

type Story = StoryObj<typeof SimilarOffers>;

export const Rent: Story = {
	args: {
		tags: ["С мебелью", "Рядом метро", "Можно с животными"],
		mode: "Rent",
		cards: rentCards,
		cardsBasePath: "/rent/",
	},
};

export const Sell: Story = {
	args: {
		tags: ["Вид на парк", "Свежий ремонт", "Рядом школа"],
		mode: "Sell",
		cards: sellCards,
		cardsBasePath: "/sell/",
	},
};

export const Complex: Story = {
	args: {
		tags: ["Современный ЖК", "Парк во дворе", "Детская площадка"],
		mode: "Complex",
		cards: complexCards,
		cardsBasePath: "/complex/",
	},
};
