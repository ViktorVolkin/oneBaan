import SavedSearchCard from "./savedCardFavouriteSearch";

export default {
	title: "UI/SavedSearchCard",
	component: SavedSearchCard,
};

export const Default = {
	args: {
		title: "Поиск: Пхукет, до $200k",
		description: "2 спальни, кондо, море рядом",
		typeTag: "Квартира",
		onMore: () => alert("More clicked"),
	},
};
