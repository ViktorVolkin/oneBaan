import type { Meta, StoryObj } from "@storybook/nextjs";
import { AccordionMenuItem } from "./AccordionMenuItem";
import React from "react";

const meta: Meta<typeof AccordionMenuItem> = {
	title: "Components/AccordionMenuItem",
	component: AccordionMenuItem,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AccordionMenuItem>;

export const Default: Story = {
	args: {
		title: "Test Accordion",
		children: "Test content",
	},
};

export const withDifferentTag: Story = {
	args: {
		title: "with <p> tag",
		children: <p>some text in p</p>,
	},
};
