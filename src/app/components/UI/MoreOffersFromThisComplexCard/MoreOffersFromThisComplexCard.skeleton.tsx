import styles from "./MoreOffersFromThisComplexCard.skeleton.module.css";
export function MoreOffersFromThisComplexCardSkeleton({
	mode,
}: {
	mode: "Rent" | "Complex" | "Sell"; // на данный момент реализация только для complex и sell а они выглядят одинаково в этом блоке так что так и оставляю пока что .
}) {
	return (
		<div className={styles.card__container}>
			<div className={styles.data__container}>
				<div className={styles.title__container}>
					<div className={styles.title}></div>
					<div className={styles.subTitle}></div>
				</div>
				<div className={styles.text__container}>
					<div className={styles.text}></div>
					<div className={styles.subText}></div>
				</div>
			</div>
			<div className={styles.interactions}>
				<div className={styles.interaction__icon}></div>
				<div className={styles.interaction__icon}></div>
				<div className={styles.interaction__icon}></div>
			</div>
		</div>
	);
}
