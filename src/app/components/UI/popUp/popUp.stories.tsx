import type { Meta, StoryObj } from "@storybook/react";
import { PopUp } from "./popUp";

const meta: Meta<typeof PopUp> = {
	title: "UI/PopUp",
	component: PopUp,
	tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PopUp>;

export const Default: Story = {
	args: {
		isOpen: true,
		onClose: () => alert("Closed"),
		children: "Это содержимое PopUp!",
		placement: "top-right",
		maxWidth: 400,
		maxHeight: 300,
		offset: 24,
		showBackdrop: true,
		closeOnBackdrop: true,
		closeOnEsc: true,
		lockScroll: true,
		contentClassName: "",
	},
};

export const Centered: Story = {
	args: {
		...Default.args,
		placement: "center",
		children: "Центрированный PopUp!",
	},
};

export const NoBackdrop: Story = {
	args: {
		...Default.args,
		showBackdrop: false,
		children: "PopUp без backdrop!",
	},
};
