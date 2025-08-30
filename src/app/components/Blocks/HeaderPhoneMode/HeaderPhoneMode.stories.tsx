import type { Meta, StoryObj } from "@storybook/nextjs";
import HeaderPhoneMode from "./HeaderPhoneMode";
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

const meta: Meta<typeof HeaderPhoneMode> = {
	title: "Components/HeaderPhoneMode",
	component: HeaderPhoneMode,
	tags: ["autodocs"],
	parameters: {
		viewport: { defaultViewport: "mobile360" },
	},
};

export default meta;
type Story = StoryObj<typeof HeaderPhoneMode>;

export const Default: Story = {
	args: defaultProps,
	parameters: {
		viewport: { defaultViewport: "mobile360" },
		docs: {
			description: {
				story: "Default header phone mode with burger menu and currency types.",
			},
		},
	},
};
