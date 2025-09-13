import CardDetailedPreviewBlock from "./CardDetailedPreviewBlock";

export default {
	title: "Blocks/CardDetailedPreviewBlock",
	component: CardDetailedPreviewBlock,
};

export const Rent = {
	args: {
		images: ["/backgroundImage.png", "/backgroundImage.png"],
		amountOfLikes: 12,
		offerId: "ph-001",
		className: "",
		mode: "Rent",
	},
};

export const Sell = {
	args: {
		images: ["/backgroundImage.png", "/backgroundImage.png"],
		amountOfLikes: 12,
		offerId: "ph-001",
		className: "",
		mode: "Sell",
	},
};
