import MainPage from "../Components/MainPage";
import MockImage from "@/../public/backgroundImage.png";

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
		title: "Modern studio",
		description: "Perfect for singles or couples, fully furnished.",
		type: "rent" as const,
	},
	{
		id: "4",
		title: "Beachfront condo",
		description: "Enjoy stunning sea views from this condo.",
		type: "buy" as const,
	},
	{
		id: "5",
		title: "Suburban house",
		description: "Family home in quiet neighborhood.",
		type: "buy" as const,
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
		price: "$98,500",
		details: "properties.patongStudio1br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$210,000",
		details: "properties.kamalaVilla3br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$150,000",
		details: "properties.cherngtalayTownhouse2br",
		whatsAppLink: "https://whatsapp",
	},
	{
		image: MockImage,
		price: "$175,000",
		details: "properties.rawaiCondo2br",
		whatsAppLink: "https://whatsapp",
	},
];

export default function Home() {
	return (
		<MainPage
			offers={fakeOffers}
			recentlyAddedForSale={fakeRecentlyAddedForSale}
		/>
	);
}
