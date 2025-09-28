import styles from "./SubscribeForNotifications.skeleton.module.css";
export function SubscribeForNotificationsSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.title__container}>
				<div className={styles.title}></div>
				<div className={styles.bg__image}></div>
			</div>
			<div className={styles.items__container}>
				{Array.from({ length: 2 }).map((_, idx) => (
					<div className={styles.item} key={idx} />
				))}
			</div>
			<div className={styles.button}></div>
		</div>
	);
}
