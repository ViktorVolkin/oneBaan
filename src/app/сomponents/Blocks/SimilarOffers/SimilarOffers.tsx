import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { Scrollbar, FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SimilarOffers.module.css";
import CardSellCatalog from "../../UI/CardSellCatalog";
import SimilarOffersRentCard from "../../UI/SimilarOffersRentCard";
interface SimilarOffersProps {
	tags: string[];
	cards: ListingCardBase[];
	isRent: boolean;
}
export function SimilarOffers({ tags, isRent, cards }: SimilarOffersProps) {
	const t = useTranslations();
	return (
		<div className={styles.similarOffers__container}>
			<h4 className={styles.similarOffers__title}>
				{t("CardDetailed.similarOffers")}
			</h4>
			<div className={styles.tags__container}>
				{tags.map((tag) => (
					<p className={styles.tag}>{tag}</p>
				))}
			</div>
			<Swiper
				modules={[Scrollbar, FreeMode, Mousewheel]}
				slidesPerView={"auto"}
				spaceBetween={12}
				freeMode={{
					enabled: true,
					momentum: true,
					sticky: false,
				}}
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
						className={styles.swiperSlide}
					>
						{isRent ? (
							<SimilarOffersRentCard
								{...item}
							></SimilarOffersRentCard>
						) : (
							<CardSellCatalog {...item}></CardSellCatalog>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
