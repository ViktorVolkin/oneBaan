import type { Meta, StoryObj } from "@storybook/react";
import { DetailsCard } from "./DetailsCard";
import type { DetailsCardProps } from "./DetailsCard";

const meta: Meta<typeof DetailsCard> = {
	title: "UI/DetailsCard",
	component: DetailsCard,
};
export default meta;
type Story = StoryObj<typeof DetailsCard>;

export const Default: Story = {
	args: {
		title: "Заголовок",
		text: "Описание карточки",
		icon: "/BiBed.svg",
		isRent: false,
	} as DetailsCardProps,
};
