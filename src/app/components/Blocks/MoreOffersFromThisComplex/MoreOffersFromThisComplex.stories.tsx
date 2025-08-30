import type { Meta, StoryObj } from "@storybook/nextjs";
import { MoreOffersFromThisComplex } from "./MoreOffersFromThisComplex";

import {
	SELL_CARD_DETAILED_MOCKS,
	type ListingCardBaseDTO,
	type TagDTO,
} from "../../../../../mockBackendExpress/MockData/sellCardDetailedMock";
import { TAG_CODES_CONSTANT } from "../../../constants/common";
import type { CardTagProps } from "@/app/types/CardTags.types";

const FallbackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
		<circle cx="12" cy="12" r="10" />
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
		};
	});

const adaptCard = (card: ListingCardBaseDTO) => ({
	idOfCard: card.idOfCard,
	apartmentImages: {
		images:
			card.apartmentImages?.images ??
			(card.mainImage ? [card.mainImage] : []),
	},
	price: card.price ?? "",
	pricePerMeter: card.pricePerMeter ?? "",
	stats: card.stats ?? { amountOfBeds: 0, amountOfBaths: 0, area: 0 },
	details: card.details ?? "",
	cardDescription: card.cardDescription ?? "",
	agentLogo: card.agentLogo ?? "/agent-logo.svg",
	tags: mapDtoTags(card.tags),
	contactWhatsApp: card.contactWhatsApp ?? { path: "" },
	contactWithSalesman: card.contactWithSalesman ?? { path: "" },
	whenPosted: card.whenPosted ?? "",
	breadcrumbs: Array.isArray(card.breadcrumbs) ? card.breadcrumbs : [],
	isRentCard: card.isRentCard ?? false,
	mainImage:
		card.mainImage ??
		card.apartmentImages?.images?.[0] ??
		"/backgroundImage.png",
});

const data = SELL_CARD_DETAILED_MOCKS["123"].moreFromComplex;

const meta: Meta<typeof MoreOffersFromThisComplex> = {
	title: "Blocks/MoreOffersFromThisComplex",
	component: MoreOffersFromThisComplex,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
		nextjs: {
			appDirectory: true,
			image: { unoptimized: true },
		},
	},
};
export default meta;

type Story = StoryObj<typeof MoreOffersFromThisComplex>;

export const Default: Story = {
	args: {
		nameOfComplex: data.nameOfComplex,
		optionsBedrooms: [
			{ label: "1", value: "1" },
			{ label: "2", value: "2" },
		],
		optionsSortBy: [
			{ label: "Цена", value: "price" },
			{ label: "Площадь", value: "area" },
		],
		optionsPriceForPhoneMode: [
			{ label: "до 5 млн", value: "5000000" },
			{ label: "до 10 млн", value: "10000000" },
		],
		cards: data.cards.map(adaptCard),
		isRent: false,
		hasMore: true,
	},
};

export const FewCards: Story = {
	args: {
		nameOfComplex: data.nameOfComplex,
		optionsBedrooms: [],
		optionsSortBy: [],
		optionsPriceForPhoneMode: [],
		cards: data.cards.slice(0, 3).map(adaptCard),
		isRent: false,
		hasMore: false,
	},
};

export const EmptyState: Story = {
	args: {
		nameOfComplex: data.nameOfComplex,
		optionsBedrooms: [],
		optionsSortBy: [],
		optionsPriceForPhoneMode: [],
		cards: [],
		isRent: false,
		hasMore: false,
	},
};
