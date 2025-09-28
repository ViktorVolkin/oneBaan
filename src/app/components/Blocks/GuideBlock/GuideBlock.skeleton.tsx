import styles from "./GuideBlock.skeleton.module.css";
export function GuideBlockSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.title} />
			<div className={styles.text} />
			<div className={styles.main_container}>
				<div className={styles.cards_container}>
					<div className={styles.card}></div>
					<div className={styles.card}></div>
					<div className={styles.card}></div>
				</div>
				<div className={styles.buttons__container}>
					<div className={styles.button}></div>
					<div className={styles.button}></div>
				</div>
				<div className={styles.primary_button}></div>
			</div>
		</div>
	);
}
