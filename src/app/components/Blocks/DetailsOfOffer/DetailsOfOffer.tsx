"use client";

import { useTranslations } from "next-intl";
import styles from "./DetailsOfOffer.module.css";
import { Link } from "@/i18n/navigation";
import DetailsCard from "../../UI/DetailsCard";
import CardTags from "../../UI/CardTags";
import ComplexCardsMinPrices from "../../UI/ComplexCardsMinPrices";

import type { SellCardDetailedProps } from "@/app/types/CardDetailed.types";
import type { ComplexCardsMinPricesProps } from "../../UI/ComplexCardsMinPrices/ComplexCardsMinPrices";
import { classModeHelper } from "@/app/utils/classModeHelper";

type Base = Omit<SellCardDetailedProps, "images">;

type NonComplexProps = Base & {
	mode: "Rent" | "Sell";
};

type ComplexProps = Omit<
	Base,
	| "tagsSell"
	| "tagsDetailed"
	| "price"
	| "offerFeatureText"
	| "detailsOnOneBaan"
	| "subText"
	| "stats"
> & {
	cards: ComplexCardsMinPricesProps["cards"];
	price?: never;
	subText?: never;
	stats?: never;
	tagsSell?: never;
	tagsDetailed?: never;
	offerFeatureText?: never;
	detailsOnOneBaan?: never;
	mode: "Complex";
};

type DetailsOfOfferProps = NonComplexProps | ComplexProps;

export function DetailsOfOffer(props: DetailsOfOfferProps) {
	const t = useTranslations();
	const { offerDetail, breadcrumbs, propDetailsCard } = props;
	const isComplex = props.mode === "Complex";
	const rentOrComplex = props.mode === "Rent" || props.mode === "Complex";
	const cx = classModeHelper(styles, props.mode);
	return (
		<div className={cx("detailsOfOffer", props.mode)}>
			<p className={cx("blueprint", props.mode)}>
				<img
					src="/photoChip.svg"
					alt="img"
					className={styles.blueprintImg}
				/>
				{t("CardDetailed.blueprint")}
			</p>
			<p
				className={`${styles.offerDetail} ${
					isComplex ? styles.offerDetail__with_complex : ""
				}`}
			>
				{offerDetail}
			</p>
			{!isComplex && (
				<>
					<div className={styles.priceBlock}>
						<h4 className={styles.card__price}>
							{props.price}
							{props.mode === "Rent"
								? ` ${t("cards.perMonth")}`
								: ""}
						</h4>

						{props.subText && (
							<span className={styles.card__price_per_meter}>
								{props.subText}
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
								{t("CardDetailed.beds", {
									count: props.stats.amountOfBeds,
								})}
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
									count: props.stats.amountOfBaths,
								})}
							</span>
						</li>
						<li className={styles.icon__item}>
							<img
								src={"/BiBorderOuter.svg"}
								alt="icon"
								className={styles.icon}
							/>
							<span className={styles.icon__value}>
								{props.stats.area}
							</span>
						</li>
					</ul>
				</>
			)}
			{isComplex && (
				<div className={styles.complex__cards}>
					<ComplexCardsMinPrices cards={props.cards} size="md" />
				</div>
			)}
			{breadcrumbs.length > 0 && (
				<nav
					className={`${styles.breadcrumbs} ${
						isComplex ? styles.breadcrumbs__with_complex : ""
					}`}
				>
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

			<div
				className={
					isComplex
						? styles.cardDetails__containerComplex
						: styles.cardDetails__container
				}
			>
				{propDetailsCard.map((item) =>
					item.leadsTo ? (
						<Link
							href={item.leadsTo}
							key={item.title}
							className={styles.textDecoration__none}
						>
							<DetailsCard {...item} isRent={rentOrComplex} />
						</Link>
					) : (
						<DetailsCard
							key={item.title}
							{...item}
							isRent={rentOrComplex}
						/>
					)
				)}
			</div>

			{!isComplex && (
				<div className={styles.offerFeatureBlock}>
					<h4 className={styles.offerFeature__title}>
						{t("CardDetailed.offerFeature")}
					</h4>
					{props.tagsSell && <CardTags {...props.tagsSell} />}
					<p className={styles.offerFeature__text}>
						{props.offerFeatureText}
					</p>
					<CardTags {...props.tagsDetailed} sizeOfTheIcons="16px" />
					<p className={styles.detailsOnOneBaan}>
						{t("CardDetailed.amountOfDays", {
							days: props.detailsOnOneBaan.daysOnOneBaan,
							views: props.detailsOnOneBaan.amountOfViews,
						})}
					</p>
				</div>
			)}
		</div>
	);
}
