"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import styles from "./MoreOffersFromThisComplex.module.css";
import CustomSelect from "../../UI/CustomSelect/CustomSelect";
import { useQueryParams } from "@/app/сustomHooks/useQueryParams";
import {
	formatMillionsRange,
	makePhonePriceValue,
} from "@/app/utils/phonePrice.helpers";
import type { Option } from "@/app/types/CustomSelect.types";
import { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import MoreOffersFromThisComplexCard from "@/app/сomponents/UI/MoreOffersFromThisComplexCard";
import { useMediaQuery } from "@/app/сustomHooks/MediaQuery";

interface MoreOffersFromThisComplexProps {
	nameOfComplex: string;
	optionsBedrooms: Option[];
	optionsSortBy: Option[];
	optionsPriceForPhoneMode: Option[];
	cards: Omit<ListingCardBase, "isRentCard">[];
	isRent?: boolean;
}

export function MoreOffersFromThisComplex({
	nameOfComplex,
	optionsBedrooms,
	optionsPriceForPhoneMode,
	optionsSortBy,
	cards,
	isRent = false,
}: MoreOffersFromThisComplexProps) {
	const t = useTranslations();
	const { set, setMany, get } = useQueryParams();

	const isDesktop = useMediaQuery("(min-width:1440px)");
	const enableScroll = !isRent && isDesktop;

	const phonePriceRaw = makePhonePriceValue(
		get("min-price"),
		get("max-price")
	);

	return (
		<div className={styles.moreOffersBlock}>
			<h4 className={styles.moreOffers__title}>
				{t("CardDetailed.moreOffers")}
				<span className={styles.moreOffers__complex}>
					{nameOfComplex}
				</span>
			</h4>

			<div
				className={`${styles.filters__container} ${
					isRent ? styles.filters__container__rent : ""
				}`}
			>
				<div className={styles.filters}>
					<CustomSelect
						options={optionsBedrooms ?? []}
						placeholder={"catalog.selector.bedrooms"}
						value={get("beds")}
						className={styles.bedsSelect}
						onChange={(value) => set("beds", value)}
						prefixSrc="/BiBed.svg"
					/>
					<CustomSelect
						options={optionsPriceForPhoneMode ?? []}
						placeholder={"catalog.selector.price"}
						className={styles.priceSelect}
						value={phonePriceRaw}
						allowMissingValue={true}
						missingValueLabelFactory={(v) => {
							const [min = "", max = ""] = String(v ?? "").split(
								"-"
							);
							return (
								formatMillionsRange(min, max) ||
								t("catalog.selector.price")
							);
						}}
						onChange={(value) => {
							const [min = "", max = ""] = String(
								value ?? ""
							).split("-");
							const both = min.trim() && max.trim();
							setMany({
								"min-price": both ? min : null,
								"max-price": both ? max : null,
								page: "1",
							});
						}}
					/>
				</div>

				<CustomSelect
					options={optionsSortBy}
					placeholder={"sortBy.recommended"}
					onChange={(v) => set("sortBy", v)}
					value={get("sortBy")}
					className={styles.sortBy}
					caretSrc=""
					prefixSrc="/sortIcon.svg"
				></CustomSelect>
			</div>

			<div className={styles.moreOffers}>
				<div
					className={
						isRent
							? styles.cards__container
							: styles.cards__container__sell
					}
				>
					{cards.map((item) => (
						<div
							className={styles.card__container}
							key={item.idOfCard}
						>
							<MoreOffersFromThisComplexCard
								{...item}
								isRentCard={isRent}
							/>
						</div>
					))}
				</div>

				<button
					className={
						isRent
							? styles.get__more_offers
							: styles.get__more_offers__sell
					}
				>
					{t("CardDetailed.showMore")}
					<img
						src="/MdArrowDownward.svg"
						alt=""
						className={styles.get__more_offers_image}
					/>
				</button>

				{!isRent && (
					<div className={styles.cards__wrapper}>
						<Swiper
							modules={[
								Pagination,
								Scrollbar,
								FreeMode,
								Mousewheel,
							]}
							slidesPerView={"auto"}
							spaceBetween={12}
							freeMode={
								enableScroll
									? {
											enabled: true,
											momentum: true,
											sticky: false,
									  }
									: false
							}
							scrollbar={
								enableScroll
									? { draggable: true, hide: false }
									: false
							}
							mousewheel={
								enableScroll ? { forceToAxis: true } : false
							}
							loop={!enableScroll}
							pagination={
								enableScroll ? false : { clickable: true }
							}
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
									<div>
										<MoreOffersFromThisComplexCard
											{...item}
											isRentCard={isRent}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				)}
			</div>
		</div>
	);
}
