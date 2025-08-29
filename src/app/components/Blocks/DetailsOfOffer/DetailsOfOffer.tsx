"use client";

import { useTranslations } from "next-intl";
import styles from "./DetailsOfOffer.module.css";
import { Link } from "@/i18n/navigation";
import DetailsCard from "../../UI/detailsCard";
import CardTags from "../../UI/CardTags";

import type { SellCardDetailedProps } from "@/app/types/CardDetailed.types";
type DetailsOfOfferProps = Omit<SellCardDetailedProps, "images">;

export function DetailsOfOffer({
	offerDetail,
	isRent,
	price,
	subText,
	breadcrumbs,
	propDetailsCard,
	stats,
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
				<li className={styles.icon__item}>
					<img
						src={"/BiBed.svg"}
						alt="icon"
						className={styles.icon}
					/>
					<span className={styles.icon__value}>
						{t("CardDetailed.beds", { count: stats.amountOfBeds })}
					</span>
				</li>
				<li className={styles.icon__item}>
					<img
						src={"/BiBed.svg"}
						alt="icon"
						className={styles.icon}
					/>
					<span className={styles.icon__value}>
						{t("CardDetailed.baths", {
							count: stats.amountOfBaths,
						})}
					</span>
				</li>
				<li className={styles.icon__item}>
					<img
						src={"/BiBorderOuter.svg"}
						alt="icon"
						className={styles.icon}
					/>
					<span className={styles.icon__value}>{stats.area}</span>
				</li>
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
				{propDetailsCard.map((item) =>
					item.leadsTo && !isRent ? (
						<Link
							href={item.leadsTo}
							key={item.title}
							className={styles.textDecoration__none}
						>
							<DetailsCard {...item} isRent={isRent} />
						</Link>
					) : (
						<DetailsCard
							key={item.title}
							{...item}
							isRent={isRent}
						/>
					)
				)}
			</div>
			<div className={styles.offerFeatureBlock}>
				<h4 className={styles.offerFeature__title}>
					{t("CardDetailed.offerFeature")}
				</h4>
				{tagsSell && <CardTags {...tagsSell} />}
				<p className={styles.offerFeature__text}>{offerFeatureText}</p>
				<CardTags {...tagsDetailed} sizeOfTheIcons="16px" />
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
