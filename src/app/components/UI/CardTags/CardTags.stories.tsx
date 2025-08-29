import type { Meta, StoryObj } from "@storybook/react";
import { CardTags } from "./CardTags";
import Check from "../../assets/BiCheckCircle.svg?react";
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
			{
				label: "New",
				color: "#4CAF50",
				rasterImage:
					"https://cdn-icons-png.flaticon.com/512/888/888879.png",
			},
			{
				label: "Featured",
				color: "red",
				svgIconComponent: Check,
			},
		],
	},
};
