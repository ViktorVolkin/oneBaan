import type { Meta, StoryObj } from "@storybook/nextjs";
import { SimilarOffers } from "./SimilarOffers";
import {
	SELL_CARD_DETAILED_MOCKS,
	type ListingCardBaseDTO,
	type TagDTO,
} from "../../../../../mockBackendExpress/MockData/sellCardDetailedMock";
import { TAG_CODES_CONSTANT } from "../../../constants/common";

import type { CardTagProps } from "@/app/types/CardTags.types";
const FallbackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
		<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
	</svg>
);

const mapDtoTags = (tags?: TagDTO[]): CardTagProps[] =>
	(tags ?? []).map((t): CardTagProps => {
		const entry = (
			TAG_CODES_CONSTANT as Record<
				string,
				Partial<CardTagProps> | undefined
			>
		)[t.code];

		const icon =
			typeof entry?.icon === "function"
				? (entry!.icon as React.FC<React.SVGProps<SVGSVGElement>>)
				: FallbackIcon;

		return {
			icon,
			label: entry?.label ?? t.code,
			bgColor: entry?.bgColor,
			borderColor: entry?.borderColor,
			textColor: entry?.textColor,
		} satisfies CardTagProps;
	});

type SimilarProps = React.ComponentProps<typeof SimilarOffers>;
type SellCard = Extract<
	SimilarProps["cards"][number],
	{ apartmentImages: { images: string[] } }
>;

const adapt = (c: ListingCardBaseDTO): SellCard => {
	const images =
		c.apartmentImages?.images ?? (c.mainImage ? [c.mainImage] : []);
	return {
		idOfCard: c.idOfCard,
		apartmentImages: { images },
		price: c.price ?? "",
		pricePerMeter: c.pricePerMeter ?? "",
		stats: c.stats ?? { amountOfBeds: 0, amountOfBaths: 0, area: 0 },
		details: c.details ?? "",
		cardDescription: c.cardDescription ?? "",
		agentLogo: c.agentLogo ?? "/agent-logo.svg",
		tags: mapDtoTags(c.tags),
		contactWhatsApp: c.contactWhatsApp ?? { path: "" },
		contactWithSalesman: c.contactWithSalesman ?? { path: "" },
		whenPosted: c.whenPosted ?? "",
		breadcrumbs: Array.isArray(c.breadcrumbs) ? c.breadcrumbs : [],
		isRentCard: c.isRentCard ?? false,
		mainImage: c.mainImage ?? images[0] ?? "/backgroundImage.png",
	};
};

const data = SELL_CARD_DETAILED_MOCKS["123"];
const sellCards: SellCard[] = data.similar.cards.map(adapt);

const meta: Meta<typeof SimilarOffers> = {
	title: "Blocks/SimilarOffers",
	component: SimilarOffers,
	parameters: {
		layout: "padded",
		nextjs: { appDirectory: true, image: { unoptimized: true } },
	},
};
export default meta;

type Story = StoryObj<typeof SimilarOffers>;

export const Default: Story = {
	args: { tags: data.similar.tags, isRent: false, cards: sellCards },
};

export const FewCards: Story = {
	args: {
		tags: data.similar.tags.slice(0, 2),
		isRent: false,
		cards: sellCards.slice(0, 3),
	},
};

export const EmptyState: Story = {
	args: { tags: [], isRent: false, cards: [] },
};
