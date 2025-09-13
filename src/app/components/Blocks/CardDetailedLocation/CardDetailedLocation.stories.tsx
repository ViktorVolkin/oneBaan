import { CardDetailedLocation } from "./CardDetailedLocation";

export default {
	title: "Blocks/CardDetailedLocation",
	component: CardDetailedLocation,
};

const baseArgs = {
	image: "/backgroundImage.png",
	countryName: "Таиланд",
	breadcrumbs: [
		{ label: "Главная", href: "/" },
		{ label: "Таиланд", href: "/thailand" },
		{ label: "Пхукет", href: "/thailand/phuket" },
	],
	toLocationHref: "/thailand/phuket",
};

export const Default = {
	args: {
		...baseArgs,
		mode: "Rent",
	},
};
