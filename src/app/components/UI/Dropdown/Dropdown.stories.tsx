import type { Meta, StoryObj } from "@storybook/nextjs";
import { Dropdown } from "./Dropdown";
const russianFlag = "/russianFlag.png";

const meta: Meta<typeof Dropdown> = {
	title: "Components/Dropdown",
	component: Dropdown,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div
		style={{
			width: "max-content",
			margin: "0 auto",
			position: "relative",
		}}
	>
		{children}
	</div>
);

export const Default: Story = {
	args: {
		buttonText: "Open menu",
		sideToPopUp: "left",
		children: [
			<span key="1">First option</span>,
			<span key="2">Second option</span>,
			<span key="3">Third option</span>,
		],
	},
	decorators: [
		(Story) => (
			<Container>
				<Story />
			</Container>
		),
	],
};

export const WithIcon: Story = {
	args: {
		buttonText: "Profile",
		iconBeforeText: russianFlag,
		sideToPopUp: "right",
		children: [<span key="1">Settings</span>, <span key="2">Logout</span>],
	},
	decorators: [
		(Story) => (
			<Container>
				<Story />
			</Container>
		),
	],
};

export const EmptyDropdown: Story = {
	args: {
		buttonText: "Empty menu",
		sideToPopUp: "left",
		children: [],
	},
	parameters: {
		docs: {
			description: {
				story: "Dropdown with no options to show how it behaves when empty.",
			},
		},
	},
	decorators: [
		(Story) => (
			<Container>
				<Story />
			</Container>
		),
	],
};
