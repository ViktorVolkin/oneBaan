import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof MoreOffersFromThisComplex> = {
	title: "Blocks/MoreOffersFromThisComplex",
	component: MoreOffersFromThisComplex,
	tags: ["autodocs"],
};
export default meta;
import { MoreOffersFromThisComplex } from "./MoreOffersFromThisComplex";
import { rentCatalogMock } from "../../../../../mockBackendExpress/MockData/rentCatalogMock";
import { TAG_CODES_CONSTANT } from "../../../constants/common";
import type {
	CatalogItem,
	ApiTag,
	CatalogBreadcrumb,
} from "../../../../../mockBackendExpress/types/ApiListingCard";

function toListingCardBase(card: CatalogItem) {
	return {
		idOfCard: card.idOfCard,
		apartmentImages: card.apartmentImages,
		price: card.priceUsd ? `$${card.priceUsd}` : "",
		pricePerMeter: card.stats?.area
			? `$${Math.round(card.priceUsd / card.stats.area)}`
			: "",
		stats: card.stats || {},
		details: card.translations?.ru?.details || "",
		cardDescription: card.translations?.ru?.cardDescription || "",
		agentLogo: card.agentLogo,
		tags:
			card.tags?.map(
				(tag: ApiTag) =>
					TAG_CODES_CONSTANT[tag.code] || {
						label: tag.code,
						icon: "",
					}
			) ?? [],
		contactWhatsApp: card.contactWhatsApp,
		contactWithSalesman: card.contactWithSalesman,
		whenPosted: `${card.ageDays} дней назад`,
		breadcrumbs: card.breadcrumbs.map((b: CatalogBreadcrumb) => ({
			label: b.translations.ru,
			href: b.href,
		})),
		isRentCard: true,
		mainImage: card.apartmentImages.images[0],
	};
}

export const Default = {
	args: {
		nameOfComplex: "ЖК Солнечный",
		optionsBedrooms: [
			{ label: "1", value: "1" },
			{ label: "2", value: "2" },
		],
		optionsSortBy: [
			{ label: "Цена", value: "price" },
			{ label: "Площадь", value: "area" },
		],
		optionsPriceForPhoneMode: [
			{ label: "до 5 млн", value: "5000000" },
			{ label: "до 10 млн", value: "10000000" },
		],
		cards: rentCatalogMock.map(toListingCardBase),
		isRent: true,
		hasMore: true,
	},
};
