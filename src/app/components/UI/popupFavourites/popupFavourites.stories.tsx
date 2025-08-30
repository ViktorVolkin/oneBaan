import type { Meta, StoryObj } from "@storybook/nextjs";
import { PopupFavourites } from "./popupFavourites";

const meta: Meta<typeof PopupFavourites> = {
	title: "UI/PopupFavourites",
	component: PopupFavourites,
	tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PopupFavourites>;

export const Default: Story = {
	args: {
		open: true,
		onClose: () => alert("Закрыто"),
		children: "Ваши избранные объекты!",
		contentClassName: "",
		blockScroll: true,
	},
};

export const CustomContent: Story = {
	args: {
		...Default.args,
		children: (
			<div>
				<h3>Избранное</h3>
				<ul>
					<li>Квартира на Пхукете</li>
					<li>Вилла у моря</li>
				</ul>
			</div>
		),
	},
};

export const NoScrollLock: Story = {
	args: {
		...Default.args,
		blockScroll: false,
		children: "Без блокировки скролла!",
	},
};
