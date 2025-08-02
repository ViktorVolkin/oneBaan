"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./MainPageFilterOffers.module.css";
import searchIcon from "../../../../public/searchIcon.svg";
import { defaultTags, Props } from "../../types/MainPageFilterOffers.types";

export const MainPageFilterOffers = <
	T extends readonly string[] = typeof defaultTags
>({
	tags = defaultTags as unknown as T,
	location = "Phuket",
	offers,
}: Props<T>) => {
	type Tag = T[number];
	const [filterFlag, setFilterFlag] = useState<Tag | undefined>();
	const [currentValueOfFilter, setCurrentValueOfFilter] =
		useState<string>("");
	const [filteredOffers, setFilteredOffers] = useState(offers);
	const [isFocused, setIsFocused] = useState(false);

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setCurrentValueOfFilter(value);
	};

	useEffect(() => {
		const filtered = offers.filter((offer) => {
			const matchesTag = filterFlag ? offer.type === filterFlag : true;
			const matchesSearch = offer.title
				?.toLowerCase()
				.includes(currentValueOfFilter.toLowerCase());

			return matchesTag && matchesSearch;
		});

		setFilteredOffers(filtered);
	}, [filterFlag, currentValueOfFilter, offers]);

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
						{tag}
					</button>
				))}
			</div>
			<div className={styles.filter__input_container}>
				<input
					value={currentValueOfFilter}
					onChange={handleValueChange}
					type="text"
					name="searchApartments"
					id="searchApartmentsId"
					placeholder={`Search in ${location}...`}
					className={styles.filter__input}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
				<div className={styles.filter__icon_wrapper}>
					<Image
						src={searchIcon}
						alt="Search"
						width={12}
						height={12}
						className={styles.filter__input_icon}
					/>
				</div>
				{isFocused && currentValueOfFilter.length > 0 && (
					<div className={styles.results__container}>
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
											Type: <span>{offer.type}</span>
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
				)}
			</div>
		</div>
	);
};

export default MainPageFilterOffers;
