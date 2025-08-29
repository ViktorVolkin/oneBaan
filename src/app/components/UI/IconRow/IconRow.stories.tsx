import type { Meta, StoryObj } from "@storybook/react";
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
	argTypes: {
		icons: {
			description: `
Array of icon objects to display in the row.

Each icon object has:
- \`iconPath\`: either a string URL or an imported static image
- \`value\`: text or number displayed next to the icon.
`,
			control: { type: "object" },
		},
		sizeForIconsinRow: {
			description: `
Controls the size of icons and their labels.

Possible values:
- \`sm\` – small
- \`md\` – medium (default)
- \`lg\` – large
`,
			control: { type: "text" },
		},
	},
};
