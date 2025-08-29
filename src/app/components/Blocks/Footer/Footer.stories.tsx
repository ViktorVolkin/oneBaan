import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import type { FooterProps } from "@/app/types/Footer.types";

const meta: Meta<typeof Footer> = {
	title: "Components/Footer",
	component: Footer,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

const defaultProps: FooterProps = {
	signForDistributionFn: async () => {
		alert("Subscribed!");
	},
	ourMission: { title: "footer.mission.title", text: "footer.mission.text" },
	contacts: {
		email: "footer.contacts.email",
		adress: "footer.contacts.adress",
		phoneNumber: "footer.contacts.phoneNumber",
	},
	links: [
		{ text: "nav.home", leadsTo: "/" },
		{ text: "nav.sell", leadsTo: "/sell" },
		{ text: "nav.rent", leadsTo: "/rent" },
		{ text: "nav.compare", leadsTo: "/compare" },
		{ text: "nav.favourites", leadsTo: "/favourites" },
	],
};

export const Default: Story = {
	args: defaultProps,
	parameters: {
		docs: {
			description: {
				story: "Default footer with mission statement, contacts, and navigation links.",
			},
		},
	},
};
