import styles from "./NewObjectsSaleBlock.skeleton.module.css";
export function NewObjectsSaleBlockSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.content__container}>
				<div className={styles.title__container}>
					<div className={styles.title}></div>
					<div className={styles.buttons__container}>
						<div className={styles.button}></div>
						<div className={styles.button}></div>
					</div>
				</div>
				<div className={styles.cards__container}>
					<div className={styles.card}></div>
					<div className={styles.card}></div>
					<div className={styles.card}></div>
					<div className={styles.card}></div>
				</div>
			</div>
		</div>
	);
}
