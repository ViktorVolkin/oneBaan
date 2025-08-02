import Image, { StaticImageData } from "next/image";
import styles from "./MainPage.module.css";
import mainDefaultImage from "@/../public/backgroundImage.png";
import MainPageFilterOffers from "../MainPageFilterOffers";
import overImage from "@/../public/overImage.png";
import React from "react";
import NewObjectsSaleBlock from "../NewObjectsSaleBlock";
import { Props } from "@/app/types/MainPageFilterOffers.types";
import { ICard } from "@/app/types/Card.types";
import GuideBlock from "../GuideBlock";
import { IGuideBlockProps } from "@/app/types/GuideBlock.types";
import image1 from "../../../../public/GuideBlock__paperclip.svg";
import image2 from "../../../../public/GuideBlock__phone.svg";
import image3 from "../../../../public/GuideBlock__house.svg";
import RealEstateSpecialistBlock from "../RealEstateSpecialistBlock";
import { useTranslations } from "next-intl";
const defaultGuideBlock = {
	introBlock: {
		title: "guideBlock.title",
		text: "guideBlock.text",
	},
	guideCards: [
		{
			number: "01",
			text: "guideBlock.cards.form",
			icon: image1,
		},
		{
			number: "02",
			text: "guideBlock.cards.managerDetails",
			icon: image2,
		},
		{
			number: "03",
			text: "guideBlock.cards.finalStep",
			icon: image3,
		},
	],
	linkToTelegram: "https://t.me/fakeAgent",
	linkToWhatsApp: "https://wa.me/1234567890",
	importantDetail: "guideBlock.importantDetail",
};

interface IMainPage {
	mainImageBgPath?: StaticImageData;
	titleOnMainImage?: string;
	textOnMainImage?: string;
	offers: Props["offers"];
	recentlyAddedForSale: ICard[];
	guideBlock?: IGuideBlockProps;
}

export const MainPage = ({
	mainImageBgPath = mainDefaultImage,
	titleOnMainImage = "MainPage.image.title",
	textOnMainImage = "MainPage.image.text",
	offers,
	recentlyAddedForSale,
	guideBlock = defaultGuideBlock,
}: IMainPage) => {
	const t = useTranslations();
	return (
		<>
			<svg width="0" height="0" aria-hidden="true" focusable="false">
				<defs>
					<mask
						id="mainWindowMask"
						maskUnits="objectBoundingBox"
						maskContentUnits="objectBoundingBox"
					>
						<rect x="0" y="0" width="1" height="1" fill="white" />
						<rect
							x="0.08"
							y="0.5"
							width="0.84"
							height="0.43"
							fill="black"
							rx="0.02"
						/>
					</mask>
				</defs>
			</svg>

			<main className={styles.mainPage}>
				<div className={styles.mainPage__imageContainer}>
					<Image
						src={mainImageBgPath}
						className={styles.mainPage__backgroundImage}
						alt="mainBackground"
					/>

					<div
						className={styles.mainPage__image_description}
						style={{
							mask: "url(#mainWindowMask)",
							WebkitMask: "url(#mainWindowMask)",
						}}
					>
						<h4 className={styles.mainPage__image_title}>
							{t(titleOnMainImage)}
						</h4>
						<p className={styles.mainPage__image_text}>
							{t(textOnMainImage)}
						</p>
					</div>

					<Image
						src={overImage}
						alt=""
						className={styles.mainPage__cutoutImage}
					/>
					<div className={styles.offers__panel}>
						<MainPageFilterOffers offers={offers} />
					</div>
				</div>
				<GuideBlock {...guideBlock}></GuideBlock>
				<NewObjectsSaleBlock data={recentlyAddedForSale} />
				<RealEstateSpecialistBlock />
			</main>
		</>
	);
};
