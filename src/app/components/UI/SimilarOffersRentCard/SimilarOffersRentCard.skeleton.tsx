import { classModeHelper } from "@/app/utils/classModeHelper";
import styles from "./SimilarOffersRentCard.skeleton.module.css";
import ComplexCardsMinPricesSkeleton from "../ComplexCardsMinPrices/ComplexCardsMinPrices.skeleton";
export function SimilarOffersRentCardSkeleton({
	mode,
}: {
	mode: "Rent" | "Sell" | "Complex";
}) {
	const cx = classModeHelper(styles, mode);
	return (
		<div className={cx("container")}>
			<div className={cx("data__container")}>
				{mode === "Complex"
					? Array.from({ length: 3 }).map((_, idx) => (
							<div
								className={cx("data__item")}
								key={idx}
								data-id={idx}
							></div>
					  ))
					: Array.from({ length: 5 }).map((_, idx) => (
							<div
								className={cx("data__item")}
								key={idx}
								data-id={idx}
							></div>
					  ))}
			</div>
			{mode === "Complex" && (
				<div className={styles.minPrices}>
					<ComplexCardsMinPricesSkeleton
						size={"sm"}
						cardColor={"#FFFFFF"}
					/>
				</div>
			)}
			<div className={cx("contacts")}>
				<div className={styles.phone}></div>
				<div className={styles.whatsApp}></div>
			</div>
		</div>
	);
}
