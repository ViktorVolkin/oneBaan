"use client";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode, Mousewheel, Navigation } from "swiper/modules";
import type { SimilarOffersProps } from "@/app/types/similarOffers.types";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import styles from "./SimilarOffers.module.css";
import CardSellCatalog from "../../UI/CardSellCatalog";
import SimilarOffersRentCard from "../../UI/SimilarOffersRentCard";
import { useMediaQuery } from "@/app/customHooks/MediaQuery";

export function SimilarOffers({ tags, isRent, cards }: SimilarOffersProps) {
	const t = useTranslations();
	const isDesktop = useMediaQuery("(min-width:1440px)");
	const isPhone = useMediaQuery("(max-width:768px)");

	const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
	const prevRef = useCallback((el: HTMLElement | null) => setPrevEl(el), []);
	const nextRef = useCallback((el: HTMLElement | null) => setNextEl(el), []);

	return (
		<div className={styles.similarOffers__container}>
			<h4
				className={
					isRent
						? styles.similiraOffers__title__rent
						: styles.similarOffers__title
				}
			>
				{t("CardDetailed.similarOffers")}
			</h4>

			<div className={isRent ? styles.row__rent : styles.row}>
				<div className={styles.tags__container}>
					{tags.map((tag, index) => (
						<p className={styles.tag} key={`${tag}-idx-${index}`}>
							{tag}
						</p>
					))}
				</div>

				{isRent && (
					<div className={styles.swiper__buttons}>
						<button
							ref={prevRef}
							className={`${styles.navBtn} ${styles.prevBtn}`}
							type="button"
							aria-label="Previous"
						>
							<img
								src="/footer__arrow_right.svg"
								alt=""
								className={styles.arrow}
								style={{ rotate: "180deg" }}
							/>
						</button>
						<button
							ref={nextRef}
							className={`${styles.navBtn} ${styles.nextBtn}`}
							type="button"
							aria-label="Next"
						>
							<img
								src="/footer__arrow_right.svg"
								alt=""
								className={styles.arrow}
							/>
						</button>
					</div>
				)}
			</div>

			{!isRent && cards && (
				<Swiper
					modules={[Scrollbar, FreeMode, Mousewheel]}
					slidesPerView="auto"
					spaceBetween={12}
					freeMode={{ enabled: true, momentum: true, sticky: false }}
					scrollbar={{ draggable: true, hide: false }}
					mousewheel={{ forceToAxis: true }}
					loop={false}
					style={{
						width: "100%",
						height: "100%",
						position: "relative",
					}}
				>
					{cards.map((item) => (
						<SwiperSlide
							key={item.idOfCard}
							className={styles.swiperSlideSell}
						>
							<CardSellCatalog
								classNameButtonContainer={
									isRent
										? styles.button__container__rent
										: styles.button__container
								}
								{...item}
								displayPhoneWithoutText={true}
								mainImage={item.mainImage}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}

			{isRent && prevEl && nextEl && (
				<Swiper
					modules={[Scrollbar, FreeMode, Mousewheel, Navigation]}
					slidesPerView="auto"
					spaceBetween={isDesktop ? 20 : isPhone ? 8 : 16}
					freeMode={{ enabled: true, momentum: true, sticky: false }}
					scrollbar={{ draggable: true, hide: false }}
					mousewheel={{ forceToAxis: true }}
					navigation={{ prevEl, nextEl }}
					loop={false}
					style={{
						width: "100%",
						height: "100%",
						position: "relative",
					}}
				>
					{cards.map((item) => (
						<SwiperSlide
							key={item.idOfCard}
							className={styles.swiperSlideRent}
						>
							<SimilarOffersRentCard {...item} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
}
