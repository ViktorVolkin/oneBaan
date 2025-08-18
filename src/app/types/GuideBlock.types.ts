export interface IGuideIntroBlock {
	title: string;
	text: string;
}

export interface IGuideCard {
	number: string;
	text: string;
	icon: string;
}

export interface IGuideBlockProps {
	introBlock: IGuideIntroBlock;
	guideCards: IGuideCard[];
	linkToTelegram: string;
	linkToWhatsApp: string;
	importantDetail: string;
}
