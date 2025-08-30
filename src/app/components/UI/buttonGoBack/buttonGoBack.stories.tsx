import type { Meta, StoryObj } from "@storybook/react";
import ButtonGoBack from "./buttonGoBack";

const meta: Meta<typeof ButtonGoBack> = {
	title: "UI/ButtonGoBack",
	component: ButtonGoBack,
};
export default meta;
type Story = StoryObj<typeof ButtonGoBack>;

export const Default: Story = {
	args: {},
};
