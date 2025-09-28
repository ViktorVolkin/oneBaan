import styles from "./CardDetailedPreviewBlock.skeleton.module.css";
import { ApartmentImageSwiperSkeleton } from "../../UI/ApartmentImageSwiper";
export function CardDetailedPreviewBlockSkeleton({
	mode,
}: {
	mode: "Rent" | "Sell";
}) {
	const isRent = mode === "Rent";
	return (
		<div
			className={`${
				isRent
					? styles.rent__previewBlock__container
					: styles.sell__previewBlock__container
			} `}
		>
			<ApartmentImageSwiperSkeleton
				className={styles.previewBlock__swiper}
				withArrows={isRent}
			/>

			<div className={styles.previewBlock__interaction}>
				<div className={styles.goBackButtonContainer}></div>

				<div className={styles.logo} />

				<div className={styles.interactions}>
					{!isRent && (
						<div className={styles.likeButtonContainer}></div>
					)}

					<button className={styles.shareButton}></button>
				</div>
			</div>
			<div
				className={
					isRent
						? styles.rentBlockDescription
						: styles.sellDesktopblockDescription
				}
			></div>
			<div
				className={`${styles.swiperDots} ${
					!isRent && styles.swiperDotsSell
				}`}
			></div>
		</div>
	);
}
