import Image from "next/image";
import styles from "./MainPage.module.css";
import mainDefaultImage from "@/../public/backgroundImage.png";
import MainPageFilterOffers from "../../UI/MainPageFilterOffers";
import overImage from "@/../public/overImage.png";
import NewObjectsSaleBlock from "@/app/сomponents/Blocks/NewObjectsSaleBlock";
import GuideBlock from "@/app/сomponents/Blocks/GuideBlock";
import RealEstateSpecialistBlock from "@/app/сomponents/Blocks/RealEstateSpecialistBlock";
import image1 from "@/../public/GuideBlock__paperclip.svg";
import image2 from "@/../public/GuideBlock__phone.svg";
import image3 from "@/../public/GuideBlock__house.svg";
import type { Props as FilterProps } from "@/app/types/MainPageFilterOffers.types";
import type { IGuideBlockProps } from "@/app/types/GuideBlock.types";
import type { ICard } from "@/app/types/Card.types";
import { getTranslations, getLocale } from "next-intl/server";
import type { IMainPage } from "@/app/types/MainPage.types";
import Footer from "../../Blocks/Footer";
export type ApiOffer = {
	id: string;
	type: "rent" | "buy";
	title: string;
	description?: string;
};

export type ApiRecentlyAddedForSale = {
	id: string;
	image: string;
	price: string;
	whatsAppLink: string;
	details: string;
};

const defaultGuideBlock: IGuideBlockProps = {
	introBlock: { title: "guideBlock.title", text: "guideBlock.text" },
	guideCards: [
		{ number: "01", text: "guideBlock.cards.form", icon: image1 },
		{ number: "02", text: "guideBlock.cards.managerDetails", icon: image2 },
		{ number: "03", text: "guideBlock.cards.finalStep", icon: image3 },
	],
	linkToTelegram: "https://t.me/fakeAgent",
	linkToWhatsApp: "https://wa.me/1234567890",
	importantDetail: "guideBlock.importantDetail",
};

function pickQuery(v?: string | string[], fallback = "USD") {
	return Array.isArray(v) ? v[0] ?? fallback : v ?? fallback;
}

export async function MainPage({
	searchParams,
	mainImageBgPath = mainDefaultImage,
	titleOnMainImage = "MainPage.image.title",
	textOnMainImage = "MainPage.image.text",
	offers,
	recentlyAddedForSale,
	guideBlock = defaultGuideBlock,
}: IMainPage) {
	const [t, locale, resolvedSearchParams] = await Promise.all([
		getTranslations(),
		getLocale(),
		searchParams,
	]);

	let offersForComponent: NonNullable<FilterProps["offers"]> = offers ?? [];
	if (!offers || offers.length === 0) {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_HOST}/offers-preview?locale=${locale}`,
			{
				cache: "no-store",
			}
		);
		if (!res.ok) throw new Error("Failed to load offers");

		const api: ApiOffer[] = await res.json();
		offersForComponent = api;
	}

	let recently: ICard[] = recentlyAddedForSale ?? [];
	if (recently.length === 0) {
		const currency = pickQuery(resolvedSearchParams?.currency, "USD");
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_HOST}/recentlyAddedForSale?locale=${locale}&currency=${currency}`,
			{ cache: "no-store" }
		);
		if (!res.ok) throw new Error("Failed to load recently added");

		const api: ApiRecentlyAddedForSale[] = await res.json();

		recently = api;
	}

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
						fill={true}
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
						fill={true}
					/>
					<div className={styles.offers__panel}>
						<MainPageFilterOffers
							offers={offersForComponent}
							tags={["rent", "buy"] as const}
							location="Phuket"
						/>
					</div>
				</div>
				<GuideBlock {...guideBlock} />
				<NewObjectsSaleBlock data={recently} />{" "}
				<RealEstateSpecialistBlock />
			</main>
		</>
	);
}
