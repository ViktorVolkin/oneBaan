import { ICard } from "./Card.types";

export interface CardSliderProps {
	data: ICard[];
	prevEl?: string;
	nextEl?: string;
}
