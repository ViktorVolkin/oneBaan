import type { Meta } from "@storybook/nextjs";
import { DetailsOfOffer } from "./DetailsOfOffer";
import type { SellCardDetailedProps } from "../../../types/CardDetailed.types";
import { TAG_CODES_CONSTANT } from "../../../constants/common";

const meta: Meta<typeof DetailsOfOffer> = {
	title: "Blocks/DetailsOfOffer",
	component: DetailsOfOffer,
};
export default meta;

export const Default = {
	args: {
		offerId: "123",
		offerDetail:
			"Апартаменты на продажу в Blue Canyon Golf And Country Club Home",
		isRent: false,
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
				title: "Расстояние до моря",
				text: "500м",
				icon: "/distanceToWater.svg",
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
		offerFeatureText:
			"Комплекс в шаговой доступности от моря; возможно полное обслуживание на ресепшене. Угловая квартира — больше света и меньше соседей.",
		detailsOnOneBaan: { daysOnOneBaan: 12, amountOfViews: 14 },
	} as Omit<SellCardDetailedProps, "images">,
};
