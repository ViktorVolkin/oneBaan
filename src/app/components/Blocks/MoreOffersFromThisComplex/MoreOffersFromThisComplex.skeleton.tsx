import { MoreOffersFromThisComplexCardSkeleton } from "../../UI/MoreOffersFromThisComplexCard";
import styles from "./MoreOffersFromThisComplex.skeleton.module.css";
export function MoreOffersFromThisComplexSkeleton({
	mode,
}: {
	mode: "Rent" | "Sell" | "Complex";
}) {
	const isSell = mode === "Sell";
	return (
		<div className={styles.moreOffersBlock}>
			<div className={styles.moreOffers__title} />

			{(isSell || mode === "Rent") && (
				<div
					className={`${styles.filters__container} ${
						!isSell ? styles.filters__container__rent : ""
					}`}
				>
					<div className={styles.filters}>
						<div className={styles.bedsSelect} />

						{isSell && <div className={styles.priceSelect} />}
					</div>

					<div className={styles.sortBy} />
				</div>
			)}

			<div className={styles.moreOffers}>
				<div
					className={
						isSell
							? styles.cards__container__sell
							: styles.cards__container
					}
				>
					{Array.from({ length: 4 }).map((item, idx: number) => (
						<div className={styles.card__container} key={idx}>
							<MoreOffersFromThisComplexCardSkeleton
								mode={mode}
							/>
						</div>
					))}
				</div>

				{!isSell && (
					<button
						className={
							isSell
								? styles.get__more_offers__sell
								: styles.get__more_offers
						}
					></button>
				)}
			</div>
		</div>
	);
}
