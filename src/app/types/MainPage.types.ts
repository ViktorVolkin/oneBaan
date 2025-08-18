import { StaticImageData } from "next/image";
import { ICard } from "./Card.types";
import { IGuideBlockProps } from "./GuideBlock.types";
import type { Props as FilterProps } from "@/app/types/MainPageFilterOffers.types";

export interface IMainPage {
	mainImageBgPath?: StaticImageData;
	titleOnMainImage?: string;
	textOnMainImage?: string;
	offers?: FilterProps["offers"];
	recentlyAddedForSale?: ICard[];
	guideBlock?: IGuideBlockProps;
	searchParams?: Promise<Record<string, string | string[]>>;
}
