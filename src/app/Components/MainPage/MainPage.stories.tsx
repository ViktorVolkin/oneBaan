import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MainPage } from "./MainPage";
import MockImage from "@/../public/backgroundImage.png";
import HeaderDesktopMode from "../HeaderDesktopMode";
import HeaderTabletMode from "../HeaderTabletMode";
import HeaderPhoneMode from "../HeaderPhoneMode";
import Footer from "../Footer";

const fakeOffers = [
	{
		id: "1",
		title: "Cozy apartment in city center",
		description: "A beautiful 2-bedroom apartment close to all amenities.",
		type: "rent" as const,
	},
	{
		id: "2",
		title: "Spacious villa with pool",
		description: "Luxury villa available for buy with private pool.",
		type: "buy" as const,
	},
	{
		id: "3",
		title: "Modern condo near the beach",
		description: "Perfect vacation home with sea view.",
		type: "buy" as const,
	},
	{
		id: "4",
		title: "Family house with garden",
		description: "Spacious house ideal for families.",
		type: "buy" as const,
	},
	{
		id: "5",
		title: "Studio apartment for rent",
		description: "Affordable and cozy studio for young professionals.",
		type: "rent" as const,
	},
];

const fakeRecentlyAddedForSale = [
	{
		image: MockImage,
		price: "$124,200",
		details: "properties.bangtaoApartment2br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$149,000",
		details: "properties.lagunaVilla3br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$99,500",
		details: "properties.patongStudio",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$185,300",
		details: "properties.rawaiTownhouse",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$210,000",
		details: "properties.karonPenthouse",
		whatsAppLink: "https://whatsapp",
	},
];

const meta: Meta<typeof MainPage> = {
	title: "Pages/MainPage",
	component: MainPage,
	parameters: {
		viewport: { defaultViewport: "desktop1440" },
	},
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

			let HeaderComp;
			if (width < 768) {
				HeaderComp = HeaderPhoneMode;
			} else if (width < 1440) {
				HeaderComp = HeaderTabletMode;
			} else {
				HeaderComp = HeaderDesktopMode;
			}

			return (
				<>
					<HeaderComp
						burgerOptions={[
							{ leadsTo: "/", text: "header.home" },
							{ leadsTo: "/catalog", text: "header.catalog" },
							{ leadsTo: "/sell", text: "header.sell" },
							{ leadsTo: "/agents", text: "header.agents" },
						]}
						typesOfCurrency={["THB", "RUB", "USD", "EUR"]}
						handleLanguageChange={(lng) =>
							context.updateGlobals({ locale: lng })
						}
					/>
					<Story />
					<Footer />
				</>
			);
		},
	],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Default: Story = {
	render: () => (
		<MainPage
			offers={fakeOffers}
			recentlyAddedForSale={fakeRecentlyAddedForSale}
		/>
	),
};
