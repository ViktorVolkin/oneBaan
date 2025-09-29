import styles from "./SimilarOffers.skeleton.module.css";
import SimilarOffersRentCard, {
	SimilarOffersRentCardSkeleton,
} from "../../UI/SimilarOffersRentCard";

export function SimilarOffersSkeleton({
	mode,
}: {
	mode: "Rent" | "Sell" | "Complex";
}) {
	const rentOrComplex = mode === "Rent" || mode === "Complex";
	return (
		<div className={styles.similarOffers__container}>
			<h4
				className={
					rentOrComplex
						? styles.similiraOffers__title__rent
						: styles.similarOffers__title
				}
			></h4>
			<div className={rentOrComplex ? styles.row__rent : styles.row}>
				<div className={styles.tags__container}>
					{Array.from({ length: 3 }).map((_, idx) => (
						<div
							key={idx}
							data-id={idx}
							className={styles.tag}
						></div>
					))}
				</div>

				{rentOrComplex && (
					<div className={styles.swiper__buttons}>
						<button
							className={styles.navBtn}
							type="button"
						></button>
						<button
							className={styles.navBtn}
							type="button"
						></button>
					</div>
				)}
			</div>

			<div className={styles.similarOffersCards}>
				{Array.from({ length: 4 }).map((_, idx) => (
					<SimilarOffersRentCardSkeleton mode={mode} key={idx} />
				))}
			</div>
		</div>
	);
}
