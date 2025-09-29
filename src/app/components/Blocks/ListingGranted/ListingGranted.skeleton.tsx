import styles from "./ListingGranted.skeleton.module.css";

export function ListingGrantedSkeleton({
	mode,
}: {
	mode: "Rent" | "Sell" | "Complex";
}) {
	const isRentOrComplex = mode === "Rent";

	return (
		<div className={styles.container}>
			<div className={styles.title}></div>
			<div className={styles.card__container}>
				<div className={styles.card__data}>
					<div className={styles.avatar}></div>
					<div className={styles.card__title}></div>
				</div>
				<div className={styles.list}>
					{Array.from({ length: 3 }).map((_, idx) => (
						<div className={styles.list__item} key={idx}></div>
					))}
				</div>
			</div>
			{mode === "Complex" && (
				<div className={styles.additionalText}></div>
			)}
			<div className={styles.button}></div>
		</div>
	);
}
