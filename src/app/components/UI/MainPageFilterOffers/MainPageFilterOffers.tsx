"use client";
import { useState } from "react";
import styles from "./MainPageFilterOffers.module.css";
import SearchIcon from "@/../public/searchIcon.svg?component";
import { defaultTags, Props } from "@/app/types/MainPageFilterOffers.types";
import { useTranslations } from "next-intl";

export const MainPageFilterOffers = <
	T extends readonly string[] = typeof defaultTags
>({
	tags = defaultTags as unknown as T,
	location = "Phuket",
	offers,
}: Props<T>) => {
	const t = useTranslations();

	const translatedLocation = t(`search.locations.${location}`, {
		default: location,
	});

	type Tag = T[number];
	const [filterFlag, setFilterFlag] = useState<Tag | undefined>();
	const [currentValueOfFilter, setCurrentValueOfFilter] = useState("");
	const [isFocused, setIsFocused] = useState(false);

	const typeLabels: Record<"rent" | "buy", string> = {
		rent: t("offer.type.rent"),
		buy: t("offer.type.buy"),
	};

	const filteredOffers = offers.filter((offer) => {
		const matchesTag = filterFlag ? offer.type === filterFlag : true;
		const matchesSearch = offer.title
			?.toLowerCase()
			.includes(currentValueOfFilter.toLowerCase());
		return matchesTag && matchesSearch;
	});

	return (
		<div className={styles.filter__wrapper}>
			<div className={styles.filter__flags_container}>
				{tags.map((tag) => (
					<button
						key={tag}
						className={`${styles.filter__button} ${
							tag === filterFlag ? styles.active : ""
						}`}
						onClick={() => setFilterFlag(tag)}
					>
						{typeLabels[tag as "rent" | "buy"]}
					</button>
				))}
			</div>

			<div className={styles.filter__input_container}>
				<input
					value={currentValueOfFilter}
					onChange={(e) => setCurrentValueOfFilter(e.target.value)}
					type="text"
					name="searchApartments"
					id="searchApartmentsId"
					placeholder={t("search.placeholder", {
						location: translatedLocation,
					})}
					className={styles.filter__input}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
				<div className={styles.filter__icon_wrapper}>
					<SearchIcon
						className={styles.filter__input_icon}
						fill="white"
						width={12}
						height={12}
					/>
				</div>

				<div
					className={`${styles.results__container} ${
						isFocused && currentValueOfFilter.length > 0
							? ""
							: styles.hidden
					}`}
				>
					{filteredOffers.length > 0
						? filteredOffers.map((offer) => (
								<div
									key={offer.id}
									className={styles.result__card}
								>
									<p className={styles.result__title}>
										{offer.title || "No title"}
									</p>
									<p className={styles.result__type}>
										{t("offer.type.label")};
										<span>
											{
												typeLabels[
													offer.type as "rent" | "buy"
												]
											}
										</span>
									</p>
									{offer.description && (
										<p className={styles.result__desc}>
											{offer.description}
										</p>
									)}
								</div>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};

export default MainPageFilterOffers;
