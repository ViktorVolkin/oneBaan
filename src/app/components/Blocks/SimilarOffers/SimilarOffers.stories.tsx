import { SimilarOffers } from "./SimilarOffers";
import { sellCatalogListingCards as sellCatalogMock } from "../../../../../mockBackendExpress/MockData/sellCatalogMock";
import { TAG_CODES_CONSTANT } from "../../../constants/common";

const mock = sellCatalogMock[0];

export default {
	title: "Blocks/SimilarOffers",
	component: SimilarOffers,
};

export const Default = {
	args: {
		tags:
			mock.tags?.map(
				(tag) =>
					TAG_CODES_CONSTANT[tag.code] || {
						label: tag.code,
						icon: "",
					}
			) ?? [],
		isRent: false,
		cards: sellCatalogMock.map((card) => ({
			...card,
			tags:
				card.tags?.map(
					(tag) =>
						TAG_CODES_CONSTANT[tag.code] || {
							label: tag.code,
							icon: "",
						}
				) ?? [],
		})),
	},
};
