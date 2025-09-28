import styles from "./MainPageFilterOffers.skeleton.module.css";
export function MainPageFilterOffersSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.buttons__container}>
				<div className={styles.button}></div>
				<div className={styles.button}></div>
			</div>
			<div className={styles.button}></div>
		</div>
	);
}
