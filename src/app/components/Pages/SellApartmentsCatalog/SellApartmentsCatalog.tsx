"use client";
import { Link } from "@/i18n/navigation";
import Header from "../../Blocks/Header";
import styles from "./SellApartmentsCatalog.module.css";
import { useQueryParams } from "@/app/customHooks/useQueryParams";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { useTranslations, useLocale } from "next-intl";
import CustomSelect from "../../UI/CustomSelect/CustomSelect";
import DisplayDouble from "@/../public/displayDouble.svg?component";
import BulletedList from "@/../public/bulletedList.svg?component";
import LargeCardHorizontalSellCatalog from "../../UI/LargeCardHorizontalSellCatalog";
import CardSellCatalog from "../../UI/CardSellCatalog";
import { useCatalogPagination } from "@/app/customHooks/useCatalogPagination";
import type { CatalogQuery } from "@/app/api/fetchListingsCatalog";
import { useCallback, useEffect, useMemo, useState } from "react";
import PopUp from "../../UI/popUp";
import { useMediaQuery } from "@/app/customHooks/MediaQuery";
import SearchBox from "../../UI/searchBox";
import { buildPagination } from "@/app/utils/pagination";
import {
	formatMillionsRange,
	makePhonePriceValue,
} from "@/app/utils/phonePrice.helpers";
import { fetchListingsPreview } from "@/app/api/fetchPreviewListings";
import {
	FiltersState,
	SellApartmentsCatalogProps,
} from "@/app/types/SellApartmentsCatalog.types";

export function SellApartmentsCatalog({
	breadcrumbs,
	title,
	mainSortsIcons,
	isRentPage = false,
	optionsLocation,
	optionsTypesOfProperty,
	optionsBaths,
	optionsBedrooms,
	optionsMinPrice,
	optionsMaxPrice,
	optionsSortBy,
	optionsPriceForPhoneMode,
}: SellApartmentsCatalogProps) {
	const isPhoneMode = useMediaQuery("(max-width:767.9px)");
	const { set, get, clear, setMany } = useQueryParams();
	const t = useTranslations();
	const locale = useLocale();
	const readFromUrl = (): FiltersState => ({
		location: get("location") ?? "",
		typeOfProperty: get("type") ?? "",
		amountOfBaths: get("baths") ?? "",
		amountOfBedrooms: get("beds") ?? "",
		price: {
			minPrice: get("min-price") ?? "",
			maxPrice: get("max-price") ?? "",
		},
		sortBy: get("sortBy") ?? "recommended",
	});
	const EMPTY_FILTERS: FiltersState = useMemo(
		() => ({
			location: "",
			typeOfProperty: "",
			amountOfBaths: "",
			amountOfBedrooms: "",
			price: { minPrice: "", maxPrice: "" },
			sortBy: "recommended",
		}),
		[]
	);
	const handleReset = () => {
		clear(queriesToClear);
		setFiltersDraft(EMPTY_FILTERS);
		setSearchDraft("");
	};
	const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
	const [areLargeCardsEnabled, setLargeCardsEnabled] = useState(false);
	const CardToRender = areLargeCardsEnabled
		? LargeCardHorizontalSellCatalog
		: CardSellCatalog;

	const commitSearch = useCallback(
		(v: string) => {
			set("search", v === "" ? null : v, {
				reset: ["page"],
				method: "replace",
				scroll: false,
			});
		},
		[set]
	);
	const qSearch = get("search");
	const qLocation = get("location");
	const qType = get("type");
	const qBeds = get("beds");
	const qBaths = get("baths");
	const qMin = get("min-price");
	const qMax = get("max-price");
	const qSort = get("sortBy") ?? "recommended";
	const qCurr = get("currency") ?? "USD";
	const qState = get("state") ?? "";
	const baseQuery = useMemo<Omit<CatalogQuery, "page" | "limit">>(
		() => ({
			search: qSearch,
			location: qLocation,
			type: qType,
			beds: qBeds,
			baths: qBaths,
			minPrice: qMin,
			maxPrice: qMax,
			sortBy: qSort,
			locale: (locale as CatalogQuery["locale"]) ?? "en",
			currency: (qCurr as CatalogQuery["currency"]) ?? "USD",
			state: qState ?? "",
		}),
		[
			qSearch,
			qLocation,
			qType,
			qBeds,
			qBaths,
			qMin,
			qMax,
			qSort,
			locale,
			qCurr,
			qState,
		]
	);
	const [filtersDraft, setFiltersDraft] = useState<FiltersState>(
		readFromUrl()
	);
	const [searchDraft, setSearchDraft] = useState(get("search") ?? "");

	const phonePriceRaw = useMemo(
		() => makePhonePriceValue(qMin, qMax),
		[qMin, qMax]
	);

	const openPopup = () => {
		setFiltersDraft(readFromUrl());
		setSearchDraft(get("search") ?? "");
		setPopupOpen(true);
	};
	const onClosePopup = () => {
		setFiltersDraft(readFromUrl());
		setSearchDraft(get("search") ?? "");
		setPopupOpen(false);
	};
	const applyFilters = () => {
		setMany({
			location: filtersDraft.location || null,
			type: filtersDraft.typeOfProperty || null,
			baths: filtersDraft.amountOfBaths || null,
			beds: filtersDraft.amountOfBedrooms || null,
			"min-price": filtersDraft.price.minPrice || null,
			"max-price": filtersDraft.price.maxPrice || null,
			search: searchDraft.trim() || null,
			sortBy: filtersDraft.sortBy || null,
			page: "1",
		});
		setPopupOpen(false);
	};
	const askingPath = isRentPage
		? "rent-catalog-offers"
		: "sell-catalog-offers";
	const { items, page, setPage, next, prev, total, totalPages } =
		useCatalogPagination(baseQuery, { pageSize: 12 }, askingPath);

	const paginationTokens = useMemo(
		() => buildPagination(totalPages, page),
		[totalPages, page]
	);
	const [preview, setPreview] = useState<number>(0);
	useEffect(() => {
		const request = async () => {
			const previewPath = isRentPage
				? "/rent-catalog-offers/preview"
				: "/sell-catalog-offers/preview";
			const result = await fetchListingsPreview(
				baseQuery,
				undefined,
				previewPath
			);
			setPreview(result.total);
		};
		request();
	}, [baseQuery, isRentPage]);

	const listToRender: ListingCardBase[] = items;
	const headerMediaQueryPhone = isRentPage ? 768 : 1439.9;
	const headerMediaQueryTablet = isRentPage ? 1439.9 : 0;

	const queriesToClear = useMemo(
		() => [
			"location",
			"min-price",
			"max-price",
			"baths",
			"beds",
			"type",
			"search",
			"sortMode",
			"sortBy",
			"page",
		],
		[]
	);
	useEffect(() => {
		if (!get("sortBy")) {
			set("sortBy", "recommended");
		}
	}, [baseQuery]);
	return (
		<>
			<Header
				hasCatalog={true}
				maxPhoneWidth={headerMediaQueryPhone}
				maxTabletWidth={headerMediaQueryTablet}
				minDesktopWidth={1440}
			/>

			<div
				className={`${
					isRentPage
						? styles.rent__catalog__container
						: styles.catalog__container
				}`}
			>
				<div className={styles.mainRow__container}>
					{isRentPage && (
						<div className={styles.tabletSearchBoxContainer}>
							<SearchBox
								placeholder={t("catalog.searchPlaceholder")}
								onCommit={commitSearch}
								clearable={true}
								changeOnEnter={true}
								className={styles.tabletSearchBox}
								withIcon={true}
							/>
						</div>
					)}
					<div className={styles.title__container}>
						{breadcrumbs && breadcrumbs.length > 0 && (
							<nav className={styles.catalog__breadcrumbs}>
								{breadcrumbs.map((crumb, index) => (
									<span key={index}>
										<Link href={crumb.href}>
											{t(crumb.label)}
										</Link>
										{index < breadcrumbs.length - 1 && (
											<span
												className={
													styles.card__separator
												}
											>
												{"/"}
											</span>
										)}
									</span>
								))}
							</nav>
						)}
						<h4 className={styles.catalog__title}>{title}</h4>
						<button
							className={styles.open__advancedFilters}
							onClick={() => openPopup()}
						>
							<img
								src="/openFilters.svg"
								alt=""
								className={styles.openFilters__image}
							/>
							{t("catalog.filter")}
						</button>
					</div>
					<div
						className={`${styles.advancedFilters}  ${styles.rent__advancedFilters}`}
					>
						<SearchBox
							className={styles.filterSearch}
							placeholder={t("catalog.searchPlaceholder")}
							onCommit={commitSearch}
							clearable={false}
							changeOnEnter={false}
						/>

						<CustomSelect
							placeholder={"catalog.sort.location"}
							options={optionsLocation}
							value={filtersDraft.location}
							className={`${styles.catalog__selector} ${styles.catalog__selector_location}`}
							onChange={(value) =>
								setFiltersDraft((p) => ({
									...p,
									location: value ?? "",
								}))
							}
						/>

						<CustomSelect
							placeholder={"catalog.sort.typeOfProperty"}
							options={optionsTypesOfProperty}
							value={filtersDraft.typeOfProperty}
							className={styles.catalog__selector}
							onChange={(value) =>
								setFiltersDraft((p) => ({
									...p,
									typeOfProperty: value ?? "",
								}))
							}
						/>

						<div className={styles.optionsOfApartment}>
							<CustomSelect
								placeholder={"catalog.sort.baths"}
								options={optionsBaths}
								value={filtersDraft.amountOfBaths}
								className={styles.catalog__selector}
								onChange={(value) =>
									setFiltersDraft((p) => ({
										...p,
										amountOfBaths: value ?? "",
									}))
								}
							/>
							<CustomSelect
								placeholder={"catalog.sort.bedrooms"}
								options={optionsBedrooms}
								className={styles.catalog__selector}
								value={filtersDraft.amountOfBedrooms}
								onChange={(value) =>
									setFiltersDraft((p) => ({
										...p,
										amountOfBedrooms: value ?? "",
									}))
								}
							/>
						</div>

						<div className={styles.optionsPrices__container}>
							<h4 className={styles.optionsPrices__title}>
								{t("catalog.sort.priceTitle")}
							</h4>
							<div className={styles.customSelectorsContainer}>
								<CustomSelect
									placeholder={"catalog.sort.minPrice"}
									options={optionsMinPrice}
									className={styles.catalog__selector}
									value={filtersDraft.price.minPrice}
									onChange={(value) =>
										setFiltersDraft((prev) => ({
											...prev,
											price: {
												...prev.price,
												minPrice: value ?? "",
											},
										}))
									}
								/>
								<CustomSelect
									placeholder={"catalog.sort.maxPrice"}
									options={optionsMaxPrice}
									className={styles.catalog__selector}
									value={filtersDraft.price.maxPrice}
									onChange={(value) =>
										setFiltersDraft((prev) => ({
											...prev,
											price: {
												...prev.price,
												maxPrice: value ?? "",
											},
										}))
									}
								/>
							</div>
						</div>

						<div className={styles.buttonsContainer}>
							<button
								className={styles.resetQueryButton}
								onClick={handleReset}
							>
								{t("catalog.resetQuery")}
							</button>

							<button
								className={`${styles.findOffers} ${
									isRentPage ? styles.rentColor : ""
								}`}
								onClick={() =>
									setMany({
										location: filtersDraft.location || null,
										type:
											filtersDraft.typeOfProperty || null,
										baths:
											filtersDraft.amountOfBaths || null,
										beds:
											filtersDraft.amountOfBedrooms ||
											null,
										"min-price":
											filtersDraft.price.minPrice || null,
										"max-price":
											filtersDraft.price.maxPrice || null,
										page: "1",
									})
								}
							>
								{t("catalog.amountOfObjects", {
									count: preview,
								})}
							</button>
						</div>
					</div>
					<div className={styles.desktopIconsSort__buttonContainer}>
						{mainSortsIcons &&
							mainSortsIcons.map((element) => (
								<button
									key={element.iconQueryValue}
									className={styles.desktopIconsSort__button}
									onClick={() =>
										set(
											element.iconQueryName,
											element.iconQueryValue
										)
									}
								>
									<img
										src={element.iconPath}
										alt={`set ${element.iconQueryName}`}
										className={styles.desktopSortIcon}
									/>
								</button>
							))}
						<button
							className={`${
								isRentPage
									? styles.desktopIconsDisplay__button_rent
									: styles.desktopIconsDisplay__button
							} ${
								isRentPage
									? areLargeCardsEnabled
										? ""
										: styles.displayIcon__active_rent
									: areLargeCardsEnabled
									? ""
									: styles.displayIcon__active
							}`}
							onClick={() => setLargeCardsEnabled(false)}
						>
							<DisplayDouble></DisplayDouble>
						</button>
						<button
							className={`${
								isRentPage
									? styles.desktopIconsDisplay__button_rent
									: styles.desktopIconsDisplay__button
							} 
							${
								isRentPage
									? areLargeCardsEnabled
										? styles.displayIcon__active_rent
										: ""
									: areLargeCardsEnabled
									? styles.displayIcon__active
									: ""
							} 
							`}
							onClick={() => setLargeCardsEnabled(true)}
						>
							<BulletedList></BulletedList>
						</button>
					</div>
					<div className={styles.phoneFilterOptions}>
						<div
							className={`${
								isRentPage
									? styles.tabletContainer__rent
									: styles.tabletContainer
							}`}
						>
							<div className={styles.filterContainer}>
								<CustomSelect
									options={optionsTypesOfProperty}
									placeholder={"catalog.selector.type"}
									onChange={function (
										value: string | null
									): void {
										set("type", value);
									}}
									value={get("type")}
									className={styles.phoneFilterOption}
									chipWhenSelected={true}
									clearable={true}
									lockWhenSelected={true}
								></CustomSelect>
								<CustomSelect
									options={optionsBedrooms}
									onChange={function (
										value: string | null
									): void {
										set("beds", value);
									}}
									value={get("beds")}
									chipWhenSelected={true}
									className={styles.phoneFilterOption}
									clearable={true}
									lockWhenSelected={true}
									placeholder={"catalog.selector.bedrooms"}
								></CustomSelect>
								<CustomSelect
									options={optionsPriceForPhoneMode}
									onChange={(value) => {
										const [min = "", max = ""] = (
											value ?? ""
										).split("-");
										const both = min.trim() && max.trim();
										setMany({
											"min-price": both ? min : null,
											"max-price": both ? max : null,
											page: "1",
										});
									}}
									value={phonePriceRaw}
									allowMissingValue={true}
									missingValueLabelFactory={(v) => {
										const [min = "", max = ""] = (
											v ?? ""
										).split("-");
										return (
											formatMillionsRange(min, max) ||
											t("catalog.selector.price")
										);
									}}
									className={styles.phoneFilterOption}
									chipWhenSelected={true}
									clearable={true}
									lockWhenSelected={true}
									placeholder={"catalog.selector.price"}
								/>
							</div>
							<div className={styles.card__sortBy}>
								<p className={styles.amountOfFoundOffers}>
									{t("catalog.amountOfObjects", {
										count: total,
									})}
								</p>
								<div className={styles.sortByContainer}>
									<p className={styles.sortText}>
										{t("cards.sort")}
									</p>
									<CustomSelect
										options={optionsSortBy}
										placeholder={"sortBy.recommended"}
										onChange={(v) => set("sortBy", v)}
										value={get("sortBy")}
										className={styles.select__phoneSortBy}
										caretSrc=""
										prefixSrc="/sortIcon.svg"
									></CustomSelect>
								</div>
							</div>
						</div>
						<div
							className={`${styles.mainIconsPhone__container} ${
								isRentPage ? styles.hidden : ""
							}`}
						>
							<button
								className={`${styles.mainIconsButton} ${
									mainSortsIcons?.filter((item) =>
										get(item.iconQueryName)
									).length === 0
										? styles.activeMainIconPhone
										: ""
								}`}
								onClick={() => {
									clear(
										mainSortsIcons?.map(
											(item) => item.iconQueryName
										)
									);
								}}
							>
								{t("catalog.all")}
							</button>
							{mainSortsIcons?.map((item) => (
								<button
									className={`${styles.mainIconsButton} ${
										get(item.iconQueryName) ===
										item.iconQueryValue
											? styles.activeMainIconPhone
											: ""
									}`}
									key={item.iconQueryValue}
									onClick={() => {
										set(
											item.iconQueryName,
											item.iconQueryValue
										);
									}}
								>
									{t(item.nameForIconsPhone)}
								</button>
							))}
						</div>
					</div>
				</div>

				<div className={styles.cards__container}>
					<div className={styles.desktop__sortBy}>
						<p className={styles.desktop__sortByText}>
							{t("catalog.foundOffers", { count: total })}
						</p>
						<div className={styles.desktop__sortByContainer}>
							<p className={styles.desktop__sortText}>
								{t("catalog.sortBy")}
							</p>
							<CustomSelect
								placeholder={"sortBy.recommended"}
								options={optionsSortBy}
								className={styles.desktop__sortBySelector}
								value={get("sortBy")}
								onChange={(value) => set("sortBy", value)}
							/>
						</div>
					</div>
					<div className={styles.cards__wrapper}>
						{listToRender.map((item) => (
							<CardToRender
								classNameButtonContainer={
									isRentPage
										? styles.cardButtonContainer__rent
										: styles.cardButtonContainer
								}
								key={item.idOfCard}
								{...item}
								isRentCard={isRentPage}
								reserveHeightForSecondLine={true}
							/>
						))}
					</div>
					<div className={styles.pagination}>
						{paginationTokens.map((item, idx) => (
							<button
								className={`${styles.pagination__button} ${
									item === page ? styles.activePage : ""
								}`}
								onClick={() => {
									if (item !== "…") {
										setPage(Number(item));
									}
								}}
								key={idx}
							>
								{item}
							</button>
						))}
					</div>
				</div>
			</div>
			<PopUp
				isOpen={isPopupOpen}
				onClose={onClosePopup}
				closeOnEsc={true}
				closeOnBackdrop={true}
				lockScroll={true}
				showBackdrop={true}
				placement="top-right"
				maxHeight={isPhoneMode ? 852 : 724}
				maxWidth={446}
				offset={0}
			>
				<div className={styles.Popup__content}>
					<h4 className={styles.popup__title}>
						{t("catalog.filter")}
					</h4>
					<SearchBox
						containerClassName={styles.filterSearchPopup}
						placeholder={t("catalog.searchPlaceholder")}
						onCommit={(v) => setSearchDraft(v)}
						clearable={false}
						changeOnEnter={false}
					/>

					<CustomSelect
						placeholder={"catalog.sort.location"}
						options={optionsLocation}
						value={filtersDraft.location}
						className={styles.catalog__selectorPopup}
						onChange={(value) =>
							setFiltersDraft((p) => ({
								...p,
								location: value ?? "",
							}))
						}
					/>

					<CustomSelect
						placeholder={"catalog.sort.typeOfProperty"}
						options={optionsTypesOfProperty}
						value={filtersDraft.typeOfProperty}
						className={styles.catalog__selectorPopup}
						onChange={(value) =>
							setFiltersDraft((p) => ({
								...p,
								typeOfProperty: value ?? "",
							}))
						}
					/>

					<div className={styles.optionsOfApartmentPopup}>
						<CustomSelect
							placeholder={"catalog.sort.baths"}
							options={optionsBaths}
							value={filtersDraft.amountOfBaths}
							className={styles.catalog__selectorPopup}
							onChange={(value) =>
								setFiltersDraft((p) => ({
									...p,
									amountOfBaths: value ?? "",
								}))
							}
						/>

						<CustomSelect
							placeholder={"catalog.sort.bedrooms"}
							options={optionsBedrooms}
							className={styles.catalog__selectorPopup}
							value={filtersDraft.amountOfBedrooms}
							onChange={(value) =>
								setFiltersDraft((p) => ({
									...p,
									amountOfBedrooms: value ?? "",
								}))
							}
						/>
					</div>

					<div className={styles.optionsPrices__containerPopup}>
						<h4 className={styles.optionsPrices__titlePopup}>
							{t("catalog.sort.priceTitle")}
						</h4>
						<div className={styles.customSelectorsContainerPopup}>
							<CustomSelect
								placeholder={"catalog.sort.minPrice"}
								options={optionsMinPrice}
								className={styles.catalog__selectorPopup}
								value={filtersDraft.price.minPrice}
								onChange={(value) =>
									setFiltersDraft((prev) => ({
										...prev,
										price: {
											...prev.price,
											minPrice: value ?? "",
										},
									}))
								}
							/>
							-
							<CustomSelect
								placeholder={"catalog.sort.maxPrice"}
								options={optionsMaxPrice}
								className={styles.catalog__selectorPopup}
								value={filtersDraft.price.maxPrice}
								onChange={(value) =>
									setFiltersDraft((prev) => ({
										...prev,
										price: {
											...prev.price,
											maxPrice: value ?? "",
										},
									}))
								}
							/>
						</div>
					</div>
					<div className={styles.sortContainerPopup}>
						<h5 className={styles.sortContainerPopup__title}>
							{t("cards.sort")}
						</h5>
						<CustomSelect
							placeholder={"catalog.sortBy.recommended"}
							options={optionsSortBy}
							className={styles.catalog__selectorPopup}
							value={filtersDraft.sortBy}
							onChange={(value) =>
								setFiltersDraft((prev) => ({
									...prev,
									sortBy: value ?? "",
								}))
							}
						/>
					</div>

					<div className={styles.buttonsContainerPopup}>
						<button
							className={styles.resetQueryButtonPopup}
							onClick={handleReset}
						>
							{t("catalog.resetQuery")}
						</button>

						<button
							className={`${styles.findOffersPopup} ${
								isRentPage ? styles.rentColor : ""
							}`}
							onClick={() => {
								applyFilters();
								setPopupOpen(false);
							}}
						>
							{t("catalog.amountOfObjects", { count: preview })}
						</button>
					</div>
				</div>
			</PopUp>
		</>
	);
}
