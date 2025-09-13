import { ListingGranted } from "./ListingGranted";

export default {
	title: "blocks/ListingGranted",

	component: ListingGranted,
};

export const Rent = {
	args: {
		agentIcon: "/agent-logo.svg",
		agentName: "Иван Иванов",
		agentStatus: { text: "Проверенный агент", img: "/BiCheckCircle.svg" },
		agentExperienceOnPhuket: "5 лет",
		phuketWorkingHours: "09:00-18:00",
		languages: "RU, EN",
		allOffers: { href: "/offers", amountOfOffers: "12" },
		phoneHref: "tel:+79999999999",
		whatsAppHref: "https://wa.me/79999999999",
		mode: "Rent",
		agentDetails: [
			{ label: "Опыт: ", value: "5 лет" },
			{ label: "Языки: ", value: "RU, EN" },
			{ label: "График: ", value: "09:00-18:00" },
		],
		isRent: true,
	},
};

export const Sell = {
	args: {
		agentIcon: "/agent-logo.svg",
		agentName: "Иван Иванов",
		agentStatus: { text: "Проверенный агент", img: "/BiCheckCircle.svg" },
		agentExperienceOnPhuket: "5 лет",
		phuketWorkingHours: "09:00-18:00",
		languages: "RU, EN",
		allOffers: { href: "/offers", amountOfOffers: "12" },
		phoneHref: "tel:+79999999999",
		whatsAppHref: "https://wa.me/79999999999",
		mode: "Sell",
		agentDetails: [
			{ label: "Опыт: ", value: "5 лет" },
			{ label: "Языки: ", value: "RU, EN" },
			{ label: "График: ", value: "09:00-18:00" },
		],
		isRent: false,
	},
};
