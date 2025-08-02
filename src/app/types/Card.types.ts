import { StaticImageData } from "next/image";

export type ICard = {
	image: StaticImageData;
	price: string;
	whatsAppLink: string;
	details: string;
};
