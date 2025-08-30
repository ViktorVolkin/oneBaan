import type { Meta, StoryObj } from "@storybook/nextjs";
import HeaderTabletMode from "./HeaderTabletMode";
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

const meta: Meta<typeof HeaderTabletMode> = {
	title: "Components/HeaderTabletMode",
	component: HeaderTabletMode,
	tags: ["autodocs"],
	parameters: {
		viewport: { defaultViewport: "tablet768" },
	},
};

export default meta;
type Story = StoryObj<typeof HeaderTabletMode>;

export const Default: Story = {
	args: defaultProps,
	parameters: {
		viewport: { defaultViewport: "tablet768" },
		docs: {
			description: {
				story: "Default header tablet mode with burger menu and currency types.",
			},
		},
	},
};
