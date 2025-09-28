import styles from "./RealEstateSpecialistBlock.skeleton.module.css";
export function RealEstateSpecialistBlockSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.data__container}>
				<div className={styles.title}></div>
				<div className={styles.cards__container}>
					<div className={styles.card}>
						<div className={styles.card__title}></div>
						<div className={styles.card__text}></div>
					</div>
					<div className={styles.card}>
						<div className={styles.card__title}></div>
						<div className={styles.card__text}></div>
					</div>
				</div>
				<div className={styles.button}></div>
			</div>
			<div className={styles.image}></div>
		</div>
	);
}
