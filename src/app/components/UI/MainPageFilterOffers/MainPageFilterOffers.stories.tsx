import type { Meta, StoryObj } from "@storybook/nextjs";
import { MainPageFilterOffers } from "./MainPageFilterOffers";

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

const meta: Meta<typeof MainPageFilterOffers> = {
	title: "Components/MainPageFilterOffers",
	component: MainPageFilterOffers,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainPageFilterOffers>;

export const Default: Story = {
	render: (args) => <MainPageFilterOffers {...args} />,
	args: {
		offers: fakeOffers,
	},
};

export const Empty: Story = {
	args: {
		offers: [],
	},
	parameters: {
		docs: {
			description: {
				story: "MainPageFilterOffers with no data to show empty state.",
			},
		},
	},
};
