import styles from "./CardTags.skeleton.module.css";
export function CardTagsSkeleton({ amountOfTags }: { amountOfTags?: number }) {
	return Array.from({ length: amountOfTags ?? 11 }).map((_, idx) => (
		<div className={styles.tag} data-id={idx} key={idx}></div>
	));
}
