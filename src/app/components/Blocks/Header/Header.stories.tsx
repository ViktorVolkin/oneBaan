import type { Meta, StoryObj } from "@storybook/nextjs";
import Header from "../HeaderDesktopMode";
import React from "react";
import HeaderTabletMode from "../HeaderTabletMode";
import HeaderPhoneMode from "../HeaderPhoneMode";

const meta: Meta<typeof Header> = {
	title: "Components/Header",
	component: Header,
	tags: ["autodocs"],
	decorators: [
		(Story, context) => {
			const [width, setWidth] = React.useState<number | null>(null);

			React.useEffect(() => {
				const updateWidth = () => setWidth(window.innerWidth);
				updateWidth();
				window.addEventListener("resize", updateWidth);
				return () => window.removeEventListener("resize", updateWidth);
			}, []);

			if (width === null) return <div />;

			let Comp;
			if (width < 768) {
				Comp = HeaderPhoneMode;
			} else if (width < 1440) {
				Comp = HeaderTabletMode;
			} else {
				Comp = Header;
			}

			return (
				<Comp
					{...context.args}
					handleLanguageChange={(lng) =>
						context.updateGlobals({ locale: lng })
					}
				/>
			);
		},
	],
};

export default meta;
type Story = StoryObj<typeof Header>;

const burgerOptions = [
	{ leadsTo: "/", text: "header.home" },
	{ leadsTo: "/catalog", text: "header.catalog" },
	{ leadsTo: "/sell", text: "header.sell" },
	{ leadsTo: "/agents", text: "header.agents" },
];

export const Default: Story = {
	args: {
		burgerOptions,
		typesOfCurrency: ["THB", "RUB", "USD", "EUR"],
	},
	parameters: {
		docs: {
			description: {
				story: "Header адаптивно переключается между тремя режимами: Mobile, Tablet и Desktop.",
			},
		},
	},
};
