import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
	title: "Components/SidebarMenu",
	component: SidebarMenu,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {
	args: {
		isOpen: true,
		onClose: () => alert("Sidebar closed!"),
		children: [
			<a href="#" key="1">
				Главная
			</a>,
			<a href="#" key="2">
				Каталог
			</a>,
			<a href="#" key="3">
				Контакты
			</a>,
		],
	},
};
