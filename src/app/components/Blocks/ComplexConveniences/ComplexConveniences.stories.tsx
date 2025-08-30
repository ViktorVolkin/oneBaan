import type { Meta } from "@storybook/nextjs";
import { ComplexConveniences } from "./ComplexConveniences";
import type { CardTagProps } from "../../../types/CardTags.types";
import { TAG_CODES_CONSTANT } from "../../../constants/common";
const meta: Meta<typeof ComplexConveniences> = {
	title: "Blocks/ComplexConveniences",
	component: ComplexConveniences,
};
export default meta;
export const Default = {
	args: {
		complexName: "ЖК Солнечный",
		complexImage:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
		yearOfBuilding: 2020,
		amountOfApartments: 120,
		builder: "ООО СтройИнвест",
		tags: [
			TAG_CODES_CONSTANT["with_furniture"],
			TAG_CODES_CONSTANT["only_on_oneBaan"],
			TAG_CODES_CONSTANT["beneficial_price"],
			TAG_CODES_CONSTANT["object_verified"],
		] as CardTagProps[],
		isRent: false,
	},
};
