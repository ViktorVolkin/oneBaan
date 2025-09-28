import styles from "./ApartmentImageSwiper.skeleton.module.css";
export function ApartmentImageSwiperSkeleton({
	className,
	withArrows,
}: {
	className: string;
	withArrows: boolean;
}) {
	return (
		<div className={className}>
			<div className={styles.image}></div>

			{withArrows && (
				<>
					<button
						className={styles.prevSlide}
						aria-label="go to prev slide"
					></button>

					<button
						className={styles.nextSlide}
						aria-label="go to next slide"
					></button>
				</>
			)}
		</div>
	);
}
