const mockImage = "/backgroundImage.png";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card } from "./Card";
import { IntlProvider } from "next-intl";
import React from "react";

const messages = {
	en: {
		card: {
			details: "Beautiful villa near the beach",
		},
	},
};

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<IntlProvider locale="en" messages={messages.en}>
				<div
					style={{
						width: "300px",
						height: "400px",
						position: "relative",
					}}
				>
					<Story />
				</div>
			</IntlProvider>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		image: mockImage,
		price: "$500,000",
		whatsAppLink: "https://wa.me/123456789",
		details: "card.details",
	},
};
