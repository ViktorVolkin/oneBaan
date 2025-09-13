import type { Meta, StoryObj } from "@storybook/nextjs";
import { MoreOffersFromThisComplex } from "./MoreOffersFromThisComplex";

const meta: Meta<typeof MoreOffersFromThisComplex> = {
	title: "Blocks/MoreOffersFromThisComplex",
	component: MoreOffersFromThisComplex,
	parameters: {
		layout: "padded",
		nextjs: {
			appDirectory: true,
			image: { unoptimized: true },
		},
	},
};
export default meta;

type Story = StoryObj<typeof MoreOffersFromThisComplex>;

export const Sell: Story = {
	args: {
		nameOfComplex: "Blue Canyon Golf And Country Club Home",
		optionsBedrooms: [
			{ label: "1", value: "1" },
			{ label: "2", value: "2" },
			{ label: "3", value: "3" },
		],
		optionsSortBy: [
			{ label: "Цена", value: "price" },
			{ label: "Площадь", value: "area" },
		],
		optionsPriceForPhoneMode: [
			{ label: "до 5 млн", value: "5000000" },
			{ label: "до 10 млн", value: "10000000" },
		],
		cards: [
			{
				idOfCard: "1",
				apartmentImages: { images: ["/backgroundImage.png"] },
				price: "$1,200,000",
				pricePerMeter: "$15,200 за м² ",
				stats: { amountOfBeds: 2, amountOfBaths: 3, area: 2010 },
				details: "Квартира с видом",
				cardDescription: "Уютная квартира для семьи.",
				agentLogo: "/agent-logo.svg",
				tags: [],
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				whenPosted: "2 дня назад",
				breadcrumbs: [],
			},
			{
				idOfCard: "2",
				apartmentImages: { images: ["/backgroundImage.png"] },
				price: "$980,000",
				pricePerMeter: "$13,900 за м² ",
				stats: { amountOfBeds: 3, amountOfBaths: 2, area: 1750 },
				details: "Светлая квартира ",
				cardDescription: "Идеально для большой семьи.",
				agentLogo: "/agent-logo.svg",
				tags: [],
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				whenPosted: "21 день назад",
				breadcrumbs: [],
			},
		],
		mode: "Sell",
		hasMore: true,
	},
};

export const Rent: Story = {
	args: {
		nameOfComplex: "Blue Canyon Golf And Country Club Home",
		optionsBedrooms: [
			{ label: "1", value: "1" },
			{ label: "2", value: "2" },
		],
		optionsSortBy: [{ label: "Цена", value: "price" }],
		optionsPriceForPhoneMode: [{ label: "до 50 тыс", value: "50000" }],
		cards: [
			{
				idOfCard: "3",
				apartmentImages: { images: ["/backgroundImage.png"] },
				price: "฿45,000",
				pricePerMeter: "฿600 за м² ",
				stats: { amountOfBeds: 1, amountOfBaths: 1, area: 75 },
				details: "Апартаменты в аренду",
				cardDescription: "Для долгосрочной аренды.",
				agentLogo: "/agent-logo.svg",
				tags: [],
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				whenPosted: "5 дней назад",
				breadcrumbs: [],
			},
		],
		mode: "Rent",
		hasMore: false,
	},
};

export const Complex: Story = {
	args: {
		nameOfComplex: "Blue Canyon Golf And Country Club Home",
		optionsBedrooms: [
			{ label: "1", value: "1" },
			{ label: "2", value: "2" },
			{ label: "3", value: "3" },
		],
		optionsSortBy: [
			{ label: "Цена", value: "price" },
			{ label: "Площадь", value: "area" },
		],
		optionsPriceForPhoneMode: [
			{ label: "до 5 млн", value: "5000000" },
			{ label: "до 10 млн", value: "10000000" },
		],
		cards: [
			{
				idOfCard: "4",
				apartmentImages: { images: ["/backgroundImage.png"] },
				price: "$2,000,000",
				pricePerMeter: "$20,000 за м² ",
				stats: { amountOfBeds: 4, amountOfBaths: 3, area: 2500 },
				details: "Пентхаус в комплексе, панорамные окна.",
				cardDescription: "Лучшее предложение комплекса.",
				agentLogo: "/agent-logo.svg",
				tags: [],
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				whenPosted: "1 день назад",
				breadcrumbs: [],
			},
		],
		mode: "Complex",
		hasMore: false,
	},
};

export const FewCards: Story = {
	args: {
		nameOfComplex: "Blue Canyon Golf And Country Club Home",
		optionsBedrooms: [
			{ label: "1", value: "1" },
			{ label: "2", value: "2" },
		],
		optionsSortBy: [{ label: "Цена", value: "price" }],
		optionsPriceForPhoneMode: [{ label: "до 5 млн", value: "5000000" }],
		cards: [
			{
				idOfCard: "3",
				apartmentImages: { images: ["/backgroundImage.png"] },
				price: "$1,050,000",
				pricePerMeter: "$14,500 за м² ",
				stats: { amountOfBeds: 2, amountOfBaths: 2, area: 1800 },
				details: "Квартира с балконом.",
				cardDescription: "Для ценителей уединения.",
				agentLogo: "/agent-logo.svg",
				tags: [],
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				whenPosted: "10 дней назад",
				breadcrumbs: [],
			},
		],
		mode: "Sell",
		hasMore: false,
	},
};

export const EmptyState: Story = {
	args: {
		nameOfComplex: "Blue Canyon Golf And Country Club Home",
		optionsBedrooms: [],
		optionsSortBy: [],
		optionsPriceForPhoneMode: [],
		cards: [],
		mode: "Sell",
		hasMore: false,
	},
};
