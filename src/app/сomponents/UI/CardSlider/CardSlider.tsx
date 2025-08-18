"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./CardSlider.module.css";
import Card from "../Card";
import { useMediaQuery } from "@/app/сustomHooks/MediaQuery";
import { CardSliderProps } from "@/app/types/CardSlider.types";

const CardSlider: FC<CardSliderProps> = ({ data, prevEl, nextEl }) => {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<div className={styles.sliderSection}>
			<Swiper
				modules={[Navigation]}
				navigation={
					isDesktop && prevEl && nextEl ? { nextEl, prevEl } : false
				}
				loop={true}
				slidesPerView="auto"
				breakpoints={{
					0: { spaceBetween: 8 },
					768: { spaceBetween: 20 },
					1440: { spaceBetween: 20 },
				}}
			>
				{data.map((item, index) => (
					<SwiperSlide key={index} className={styles.swiperSlide}>
						<Card {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CardSlider;
