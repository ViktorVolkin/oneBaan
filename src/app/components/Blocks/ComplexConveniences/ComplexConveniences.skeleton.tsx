import { CardTagsSkeleton } from "../../UI/CardTags";
import styles from "./ComplexConveniences.skeleton.module.css";
import { classModeHelper } from "@/app/utils/classModeHelper";
export function ComplexConveniencesSkeleton({
	mode,
}: {
	mode: "Rent" | "Sell" | "Complex";
}) {
	const cx = classModeHelper(styles, mode);

	return (
		<div className={styles.complexConveniences__container}>
			<div className={styles.complexConveniences__title}></div>

			<div className={styles.complexCard}>
				<div className={cx("complexImage")} />

				<div className={styles.complexDetails}>
					{Array.from({ length: 3 }).map((_, index) => (
						<div className={styles.complexDetail} key={index}></div>
					))}
				</div>
			</div>
			<div className={styles.cardTags}>
				<CardTagsSkeleton />
			</div>
		</div>
	);
}
