import type { Meta, StoryObj } from "@storybook/react";
import { RealEstateSpecialistBlock } from "./RealEstateSpecialistBlock";

const meta: Meta<typeof RealEstateSpecialistBlock> = {
	title: "Components/RealEstateSpecialistBlock",
	component: RealEstateSpecialistBlock,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RealEstateSpecialistBlock>;

export const Default: Story = {
	args: {},
};
