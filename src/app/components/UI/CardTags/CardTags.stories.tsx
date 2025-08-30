import type { Meta, StoryObj } from "@storybook/nextjs";
import { CardTags } from "./CardTags";
import { TAG_CODES_CONSTANT } from "../../../constants/common";
const meta: Meta<typeof CardTags> = {
	title: "Components/CardTags",
	component: CardTags,
	tags: ["autodocs"],
	argTypes: {
		tags: {
			description: `
Array of tag objects:
- label: text inside the tag
- color: applied to the icon only if svgIconComponent is used
- rasterImage: URL to PNG/JPG image (color is ignored)
- svgIconComponent: imported React component of an SVG icon
`,

			control: { type: "object" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof CardTags>;

export const Default: Story = {
	args: {
		tags: [
			TAG_CODES_CONSTANT["object_verified"],
			TAG_CODES_CONSTANT["with_furniture"],
			TAG_CODES_CONSTANT["beneficial_price"],
		],
	},
};
