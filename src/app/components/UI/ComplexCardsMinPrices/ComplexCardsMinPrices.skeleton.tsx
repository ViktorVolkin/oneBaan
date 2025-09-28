import styles from "./ComplexCardsMinPrices.skeleton.module.css";
import { classModeHelper } from "@/app/utils/classModeHelper";

export default function ComplexCardsMinPricesSkeleton({
	size,
	cardColor,
}: {
	size: "sm" | "md";
	cardColor: string;
}) {
	const cx = classModeHelper(styles, size);
	return (
		<div className={cx("cards__container")}>
			<div
				className={cx("card")}
				style={{ backgroundColor: cardColor }}
			/>
			<div
				className={cx("card")}
				style={{ backgroundColor: cardColor }}
			/>
		</div>
	);
}
