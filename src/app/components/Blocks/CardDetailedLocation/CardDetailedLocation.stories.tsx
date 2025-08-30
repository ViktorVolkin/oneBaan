import { CardDetailedLocation } from "./CardDetailedLocation";

export default {
	title: "Blocks/CardDetailedLocation",
	component: CardDetailedLocation,
};

export const Default = {
	args: {
		image: "/backgroundImage.png",
		countryName: "Таиланд",
		breadcrumbs: [
			{ label: "Главная", href: "/" },
			{ label: "Таиланд", href: "/thailand" },
			{ label: "Пхукет", href: "/thailand/phuket" },
		],
		toLocationHref: "/thailand/phuket",
		isRent: false,
	},
};
