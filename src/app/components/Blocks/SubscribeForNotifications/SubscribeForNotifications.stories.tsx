import { SubscribeForNotifications } from "./SubscribeForNotifications";

export default {
	title: "Blocks/SubscribeForNotifications",
	component: SubscribeForNotifications,
};

export const Default = {
	args: {
		title: "CardDetailed.subscribe.title",
		list: [
			"CardDetailed.subscribe.newOffers",
			"CardDetailed.subscribe.discounts",
		],
		image: "/bgImageLetter.png",
		isRent: false,
	},
};
