import type { Meta, StoryObj } from "@storybook/nextjs";
import CardButtons from "./index";

const meta: Meta<typeof CardButtons> = {
	title: "UI/CardButtons",
	component: CardButtons,
};
export default meta;
type Story = StoryObj<typeof CardButtons>;

export const Default: Story = {
	args: {},
};
