"use client";

import { useTranslations } from "next-intl";
import styles from "./DetailsOfOffer.module.css";
import { Link } from "@/i18n/navigation";
import DetailsCard from "../../UI/detailsCard";
import { DetailsCardProps } from "../../UI/detailsCard/DetailsCard";
import CardTags from "../../UI/CardTags";
import { CardTagsProps } from "@/app/types/CardTags.types";
type Breadcrumb = { href: string; label: string };

type DetailsOfOfferProps = {
	isRent: boolean;
	offerDetail: string;
	price: string;
	subText?: string;
	breadcrumbs?: Breadcrumb[];
	propDetailsCard: Array<Omit<DetailsCardProps, "isRent">>;

	icons: {
		iconPath: string;
		value: string;
	}[];
	tagsSell: CardTagsProps;
	offerFeatureText: string;
	tagsDetailed: CardTagsProps;
	detailsOnOneBaan: {
		daysOnOneBaan: number;
		amountOfViews: number;
	};
};

export function DetailsOfOffer({
	offerDetail,
	isRent,
	price,
	subText,
	breadcrumbs = [],
	propDetailsCard,
	icons,
	tagsSell,
	tagsDetailed,
	offerFeatureText,
	detailsOnOneBaan,
}: DetailsOfOfferProps) {
	const t = useTranslations();

	return (
		<div
			className={
				isRent ? styles.detailsOfOfferRent : styles.detailsOfOfferSell
			}
		>
			<p className={isRent ? styles.blueprintRent : styles.blueprintSell}>
				<img
					src="/photoChip.svg"
					alt="img"
					className={styles.blueprintImg}
				/>
				{t("CardDetailed.blueprint")}
			</p>
			<p className={styles.offerDetail}>{offerDetail}</p>

			<div className={styles.priceBlock}>
				<h4 className={styles.card__price}>
					{price}
					{isRent ? ` ${t("cards.perMonth")}` : ""}
				</h4>

				{subText && (
					<span className={styles.card__price_per_meter}>
						{subText}
					</span>
				)}
			</div>

			<ul className={styles.icons__list}>
				{icons?.map((icon, index) => (
					<li key={index} className={styles.icon__item}>
						<img
							src={icon.iconPath}
							alt="icon"
							className={styles.icon}
						/>
						<span className={styles.icon__value}>{icon.value}</span>
					</li>
				))}
			</ul>
			{breadcrumbs.length > 0 && (
				<nav className={styles.breadcrumbs}>
					{breadcrumbs.map((crumb, index) => (
						<span
							key={`${crumb.href}-${index}`}
							className={styles.breadcrumb}
						>
							<Link href={crumb.href}>{crumb.label}</Link>
							{index < breadcrumbs.length - 1 && (
								<span className={styles.card__separator}>
									→
								</span>
							)}
						</span>
					))}
				</nav>
			)}
			<div className={styles.cardDetails__container}>
				{propDetailsCard.map((item) => (
					<DetailsCard key={item.title} {...item} isRent={isRent} />
				))}
			</div>
			<div className={styles.offerFeatureBlock}>
				<h4 className={styles.offerFeature__title}>
					{t("CardDetailed.offerFeature")}
				</h4>
				{tagsSell && <CardTags {...tagsSell} />}
				<p className={styles.offerFeature__text}>{offerFeatureText}</p>
				<CardTags
					{...tagsDetailed}
					sizeOfTheIcons="16px"
					fillTagColor="#FAF5FF"
				/>
				<p className={styles.detailsOnOneBaan}>
					{t("CardDetailed.amountOfDays", {
						days: detailsOnOneBaan.daysOnOneBaan,
						views: detailsOnOneBaan.amountOfViews,
					})}
				</p>
			</div>
		</div>
	);
}
