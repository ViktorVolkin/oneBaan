import { StaticImageData } from "next/image";

export interface IRealEstateSpecialistBlock {
	image?: StaticImageData;
	title?: string;
	button?: {
		linkText: string;
		linkHref: string;
	};
	Card1?: {
		icon: StaticImageData;
		text: string;
	};
	Card2?: {
		icon: StaticImageData;
		text: string;
	};
}
