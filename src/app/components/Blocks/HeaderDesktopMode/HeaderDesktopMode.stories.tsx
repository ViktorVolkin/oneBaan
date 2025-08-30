import type { Meta, StoryObj } from "@storybook/nextjs";
import HeaderDesktopMode from "./HeaderDesktopMode";
import type { HeaderModesProps, BurgerOption } from "@/app/types/Header.types";

const burgerOptions: BurgerOption[] = [
	{ leadsTo: "/", text: "header.home" },
	{ leadsTo: "/catalog", text: "header.catalog" },
	{ leadsTo: "/sell", text: "header.sell" },
	{ leadsTo: "/agents", text: "header.agents" },
];

const handleLanguageChange = (item: string) => {
	console.log("Language changed to:", item);
};

const defaultProps: HeaderModesProps = {
	burgerOptions,
	typesOfCurrency: ["THB", "RUB", "USD", "EUR"] as const,
	handleLanguageChange,
};

const meta: Meta<typeof HeaderDesktopMode> = {
	title: "Components/HeaderDesktopMode",
	component: HeaderDesktopMode,
	tags: ["autodocs"],
	parameters: {
		viewport: { defaultViewport: "desktop1440" },
		layout: "fullscreen",
	},
};

export default meta;
type Story = StoryObj<typeof HeaderDesktopMode>;

export const Default: Story = {
	args: defaultProps,
	parameters: {
		viewport: { defaultViewport: "desktop1440" },
		layout: "fullscreen",
		docs: {
			description: {
				story: "Default header desktop mode with burger menu and currency types.",
			},
		},
	},
};
