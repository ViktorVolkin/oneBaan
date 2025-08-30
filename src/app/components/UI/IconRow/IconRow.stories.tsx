import type { Meta, StoryObj } from "@storybook/nextjs";
import { IconRow } from "./IconRow";

const meta: Meta<typeof IconRow> = {
	title: "Components/IconRow",
	component: IconRow,
	tags: ["autodocs"],
	argTypes: {
		icons: {
			description: "Array of icon objects with iconPath and value",
			control: { type: "object" },
		},
		sizeForIconsinRow: {
			description: "Size of icons in the row",
			control: { type: "text" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof IconRow>;

export const Default: Story = {
	args: {
		icons: [
			{ iconPath: "/BiBed.svg", value: 2 },
			{ iconPath: "/BiBath.svg", value: 1 },
			{ iconPath: "/BiBorderOuter.svg", value: "80 м²" },
		],
		sizeForIconsinRow: "md",
		showLines: true,
		className: "",
	},
};
