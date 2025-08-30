import CardDetailedPreviewBlock from "./CardDetailedPreviewBlock";

export default {
	title: "Blocks/CardDetailedPreviewBlock",
	component: CardDetailedPreviewBlock,
};

export const Default = {
	args: {
		images: ["/backgroundImage.png", "/backgroundImage.png"],
		amountOfLikes: 12,
		offerId: "ph-001",
		isRent: false,
		className: "",
	},
};
