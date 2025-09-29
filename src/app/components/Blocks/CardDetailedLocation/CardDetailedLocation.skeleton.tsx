import styles from "./CardDetailedLocation.skeleton.module.css";
export function CardDetailedLocationSkeleton() {
	return (
		<div className={styles.CardDetailedLocationSkeleton__container}>
			<div className={styles.title}></div>
			<div className={styles.image__container}>
				<div className={styles.image}>
					<div className={styles.data__container}>
						<div className={styles.button}></div>
						<div className={styles.adress}></div>
					</div>
					<div className={styles.buttonCheckOnMap}></div>
				</div>
			</div>
		</div>
	);
}
