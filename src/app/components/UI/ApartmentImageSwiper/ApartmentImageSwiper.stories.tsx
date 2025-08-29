import type { Meta, StoryObj } from "@storybook/react";
import { ApartmentImageSwiper } from "./ApartmentImageSwiper";

const meta: Meta<typeof ApartmentImageSwiper> = {
	title: "Components/ApartmentImageSwiper",
	component: ApartmentImageSwiper,
	tags: ["autodocs"],
	argTypes: {
		images: {
			description: `
Array of images for the swiper.

- \`string[]\`: each item is a direct image URL.
- \`{ src: string }[]\`: each item is an object containing the image URL.

Both formats are accepted.

This dual type approach makes it easier to integrate the component in Next.js or other environments.
`,
			control: { type: "object" },
		},
	},
};
export default meta;

type Story = StoryObj<typeof ApartmentImageSwiper>;

export const Default: Story = {
	args: {
		images: [
			"https://picsum.photos/800/400?random=1",
			"https://picsum.photos/800/400?random=2",
			"https://picsum.photos/800/400?random=3",
		],
	},
};

export const WithStaticImageData: Story = {
	args: {
		images: [
			{ src: "https://picsum.photos/seed/abc/800/400" },
			{ src: "https://picsum.photos/seed/def/800/400" },
			{ src: "https://picsum.photos/seed/ghi/800/400" },
		],
	},
};
