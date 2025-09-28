import styles from "./DetailsOfOffer.skeleton.module.css";
import { DetailsCardSkeleton } from "../../UI/DetailsCard";
import { CardTagsSkeleton } from "../../UI/CardTags";
import { classModeHelper } from "@/app/utils/classModeHelper";
import ComplexCardsMinPricesSkeleton from "../../UI/ComplexCardsMinPrices/ComplexCardsMinPrices.skeleton";

export function DetailsOfOfferSkeleton(props: {
	mode: "Rent" | "Complex" | "Sell";
}) {
	const isComplex = props.mode === "Complex";
	const cx = classModeHelper(styles, props.mode);
	return (
		<div className={cx("detailsOfOffer", props.mode)}>
			<div className={cx("blueprint", props.mode)}></div>
			<p
				className={`${styles.offerDetail} ${
					isComplex ? styles.offerDetail__with_complex : ""
				}`}
			></p>
			{!isComplex && (
				<>
					<div className={styles.priceBlock}>
						<div className={styles.price}></div>
						<div className={styles.perMonth}></div>
					</div>
					<div className={styles.icons__list}></div>
				</>
			)}
			{isComplex && (
				<div className={styles.complex__cards}>
					<ComplexCardsMinPricesSkeleton
						size="md"
						cardColor={"#EEEEEE"}
					/>
				</div>
			)}
			<nav
				className={`${styles.breadcrumbs} ${
					isComplex ? styles.breadcrumbs__with_complex : ""
				}`}
			></nav>

			<div
				className={
					isComplex
						? styles.cardDetails__containerComplex
						: styles.cardDetails__container
				}
			>
				{Array.from({ length: 4 }).map((_, i) => (
					<DetailsCardSkeleton key={i} />
				))}
			</div>

			{!isComplex && (
				<div className={styles.offerFeatureBlock}>
					<div className={styles.offerFeature__title}></div>
					<div className={styles.offerFeature__text}></div>
					<div className={styles.cardTags}>
						<CardTagsSkeleton />
					</div>
				</div>
			)}
		</div>
	);
}
