"use client";
import styles from "./ApartmentImageSwiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Arrow from "@/../public/footer__arrow_right.svg?component";
export function ApartmentImageSwiper({
	images,
	withArrows,
	className,
}: {
	images: string[];
	withArrows?: boolean;
	className?: string;
}) {
	const swiperRef = useRef<SwiperType | null>(null);

	return (
		<div className={className}>
			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				slidesPerView={1}
				loop
				onSwiper={(instance) => (swiperRef.current = instance)}
				style={{ width: "100%", height: "100%", position: "relative" }}
			>
				{images.map((src, index) => (
					<SwiperSlide key={index}>
						<img
							loading="lazy"
							src={src}
							alt={`Apartment image ${index + 1}`}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			{withArrows && (
				<>
					<button
						className={styles.prevSlide}
						onClick={() => swiperRef.current?.slidePrev()}
						aria-label="go to prev slide"
					>
						<img
							src="/footer__arrow_right.svg"
							className={styles.arrowIcon}
						/>
					</button>

					<button
						className={styles.nextSlide}
						onClick={() => swiperRef.current?.slideNext()}
						aria-label="go to next slide"
					>
						<img
							src="/footer__arrow_right.svg"
							className={styles.arrowIcon}
						/>
					</button>
				</>
			)}
		</div>
	);
}
