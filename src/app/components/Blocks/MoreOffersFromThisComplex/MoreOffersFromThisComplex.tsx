"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import styles from "./MoreOffersFromThisComplex.module.css";
import CustomSelect from "../../UI/CustomSelect/CustomSelect";
import { useQueryParams } from "@/app/customHooks/useQueryParams";
import {
	formatMillionsRange,
	makePhonePriceValue,
} from "@/app/utils/phonePrice.helpers";
import type { Option } from "@/app/types/CustomSelect.types";
import { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import MoreOffersFromThisComplexCard from "@/app/components/UI/MoreOffersFromThisComplexCard";
import { useEffect } from "react";

interface MoreOffersFromThisComplexProps {
	nameOfComplex: string;
	optionsBedrooms: Option[];
	optionsSortBy: Option[];
	optionsPriceForPhoneMode: Option[];
	cards: Omit<ListingCardBase, "isRentCard">[];
	mode: "Rent" | "Sell" | "Complex";
	hasMore: boolean;
	showFilters?: boolean;
	titleKey?: string;
	cardsBasePath: string;
	pageName?: string;
	shouldUsePaging: boolean;
	enableScroll: boolean;
}

export function MoreOffersFromThisComplex({
	nameOfComplex,
	optionsBedrooms,
	optionsPriceForPhoneMode,
	optionsSortBy,
	cards,
	mode,
	hasMore,
	showFilters = true,
	titleKey = "CardDetailed.moreOffers",
	cardsBasePath,
	pageName = "moreOffersPage",
	enableScroll,
	shouldUsePaging,
}: MoreOffersFromThisComplexProps) {
	const t = useTranslations();
	const { set, setMany, get } = useQueryParams();

	const isSell = mode === "Sell";

	const moreOffersPageFromUrl = shouldUsePaging ? get(pageName) ?? "1" : "1";

	useEffect(() => {
		if (!shouldUsePaging) set(pageName, null);
	}, [shouldUsePaging, pageName, set]);

	const phonePriceRaw = makePhonePriceValue(
		get("min-price"),
		get("max-price")
	);

	const onShowMore = () => {
		const next = String(
			Math.max(1, Number(moreOffersPageFromUrl || "1") + 1)
		);
		set(pageName, next);
	};

	return (
		<div className={styles.moreOffersBlock}>
			<h4 className={styles.moreOffers__title}>
				{t(titleKey)}
				{
					<span className={isSell ? styles.moreOffers__complex : ""}>
						{nameOfComplex}
					</span>
				}
			</h4>

			{showFilters && (
				<div
					className={`${styles.filters__container} ${
						!isSell ? styles.filters__container__rent : ""
					}`}
				>
					<div className={styles.filters}>
						<CustomSelect
							options={optionsBedrooms ?? []}
							placeholder={"catalog.selector.bedrooms"}
							value={get("beds")}
							className={styles.bedsSelect}
							onChange={(value) =>
								setMany({
									beds: value,
									[pageName]: shouldUsePaging ? "1" : null,
								})
							}
							prefixSrc="/BiBed.svg"
						/>

						{isSell && (
							<CustomSelect
								options={optionsPriceForPhoneMode ?? []}
								placeholder={"catalog.selector.price"}
								className={styles.priceSelect}
								value={phonePriceRaw}
								allowMissingValue={true}
								missingValueLabelFactory={(v) => {
									const [min = "", max = ""] = String(
										v ?? ""
									).split("-");
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
										[pageName]: shouldUsePaging
											? "1"
											: null,
									});
								}}
							/>
						)}
					</div>

					<CustomSelect
						options={optionsSortBy}
						placeholder={"sortBy.recommended"}
						onChange={(v) =>
							setMany({
								sortBy: v,
								[pageName]: shouldUsePaging ? "1" : null,
							})
						}
						value={get("sortBy")}
						className={styles.sortBy}
						caretSrc=""
						prefixSrc="/sortIcon.svg"
					/>
				</div>
			)}

			<div className={styles.moreOffers}>
				<div
					className={
						isSell
							? styles.cards__container__sell
							: styles.cards__container
					}
				>
					{cards.map((item) => (
						<div
							className={styles.card__container}
							key={item.idOfCard}
						>
							<MoreOffersFromThisComplexCard
								{...item}
								mode={mode}
								cardsBasePath={cardsBasePath}
							/>
						</div>
					))}
				</div>

				{shouldUsePaging && (
					<button
						className={
							isSell
								? styles.get__more_offers__sell
								: styles.get__more_offers
						}
						onClick={onShowMore}
						disabled={!hasMore}
					>
						{t("CardDetailed.showMore")}
						<img
							src="/MdArrowDownward.svg"
							alt=""
							className={styles.get__more_offers_image}
						/>
					</button>
				)}

				{isSell && (
					<div className={styles.cards__wrapper}>
						<Swiper
							modules={[Scrollbar, FreeMode, Mousewheel]}
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
									<MoreOffersFromThisComplexCard
										{...item}
										mode={"Sell"}
										cardsBasePath={cardsBasePath}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				)}
			</div>
		</div>
	);
}
