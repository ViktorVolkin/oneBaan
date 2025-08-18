import { StaticImageData } from "next/image";

export interface IRealEstateSpecialistBlock {
	image?: StaticImageData;
	title?: string;
	button?: {
		linkText: string;
		linkHref: string;
	};
	Card1?: {
		icon: string;
		text: string;
	};
	Card2?: {
		icon: string;
		text: string;
	};
}
