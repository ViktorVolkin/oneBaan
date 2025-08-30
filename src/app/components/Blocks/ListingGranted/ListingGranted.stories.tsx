import { ListingGranted } from "./ListingGranted";

export default {
	title: "Листинг предоставлен",
	component: ListingGranted,
};

export const Default = {
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
		isRent: false,
	},
};
