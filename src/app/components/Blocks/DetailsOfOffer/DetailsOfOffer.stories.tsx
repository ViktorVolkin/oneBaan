import type { Meta } from "@storybook/nextjs";
import { DetailsOfOffer } from "./DetailsOfOffer";
import { TAG_CODES_CONSTANT } from "../../../constants/common";

const meta: Meta<typeof DetailsOfOffer> = {
	title: "Blocks/DetailsOfOffer",
	component: DetailsOfOffer,
};
export default meta;
const baseArgs = {
	offerId: "123",
	offerDetail:
		"Апартаменты на продажу в Blue Canyon Golf And Country Club Home",
	price: "$1,200,000",
	subText: "$15,200 / м²",
	breadcrumbs: [
		{ href: "/thailand/phuket", label: "Пхукет" },
		{ href: "/thailand/phuket/bangtao", label: "Бангтао" },
		{
			href: "/thailand/phuket/bangtao/apartments",
			label: "Апартаменты",
		},
	],
	propDetailsCard: [
		{
			title: "Просто текст 1",
			text: "Описание 1",
			icon: "/yearOfBuilding.svg",
		},
		{
			title: "Просто текст 2",
			text: "Описание 2",
			icon: "/distanceToWater.svg",
		},
		{
			title: "Просто текст 3",
			text: "Описание 3",
			icon: "/levels.svg",
		},
		{
			title: "Просто текст 4",
			text: "Описание 4",
			icon: "/amountOfApartments.svg",
		},
	],
	stats: { amountOfBeds: 4, amountOfBaths: 2, area: 1204 },
	tagsSell: { tags: [TAG_CODES_CONSTANT["with_furniture"]] },
	tagsDetailed: {
		tags: [
			TAG_CODES_CONSTANT["with_pool"],
			TAG_CODES_CONSTANT["view_on_mountains"],
			TAG_CODES_CONSTANT["guards"],
			TAG_CODES_CONSTANT["with_gym"],
			TAG_CODES_CONSTANT["guards"],
			TAG_CODES_CONSTANT["with_child_club"],
			TAG_CODES_CONSTANT["with_coworking"],
			TAG_CODES_CONSTANT["with_restaurant"],
			TAG_CODES_CONSTANT["with_garden"],
		],
	},
	detailsOnOneBaan: { daysOnOneBaan: 12, amountOfViews: 14 },
	offerFeatureText:
		"Комплекс в шаговой доступности от моря; возможно полное обслуживание на ресепшене. Угловая квартира — больше света и меньше соседей.",
};

export const Rent = {
	args: {
		...baseArgs,
		mode: "Rent",
	},
};

export const Sell = {
	args: {
		...baseArgs,
		mode: "Sell",
	},
};
