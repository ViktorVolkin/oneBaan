"use client";
import styles from "./ComplexInfo.module.css";
import CardDetailedPreviewBlock from "../../Blocks/CardDetailedPreviewBlock/CardDetailedPreviewBlock";
import DetailsOfOffer from "../../Blocks/DetailsOfOffer";
import ComplexConveniences from "../../Blocks/ComplexConveniences";
import MoreOffersFromThisComplex from "../../Blocks/MoreOffersFromThisComplex";
import { CATALOG_FILTER_OPTIONS_DEFAULT } from "@/app/constants/common";
import SubscribeForNotifications from "../../Blocks/SubscribeForNotifications";
import CardDetailedLocation from "../../Blocks/CardDetailedLocation";
import ListingGranted from "../../Blocks/ListingGranted";
import SimilarOffers from "../../Blocks/SimilarOffers";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ComplexCardItem, fetchComplexInfo } from "@/app/api/fetchComplexInfo";
import { useQueryParams } from "@/app/customHooks/useQueryParams";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function ComplexInfoPage({ id }: { id: string }) {
	const { get, set } = useQueryParams();
	const [sellCards, setSellCards] = useState<ComplexCardItem[]>([]);
	const [rentCards, setRentCards] = useState<ComplexCardItem[]>([]);
	const [sellHasMore, setSellHasMore] = useState(false);
	const [rentHasMore, setRentHasMore] = useState(false);
	const [data, setData] = useState<any>(null);
	const t = useTranslations();
	const pageSize = 4;
	const qLocale = useLocale() as (typeof routing.locales)[number];
	const qCurr = get("currency") ?? "USD";

	const [sellPage, setSellPage] = useState(
		Number(get("moreOffersPageSell") || 1)
	);
	const [rentPage, setRentPage] = useState(
		Number(get("moreOffersPageRent") || 1)
	);
	useEffect(() => {
		if (!get("moreOffersPageSell")) set("moreOffersPageSell", "1");
		if (!get("moreOffersPageRent")) set("moreOffersPageRent", "1");
	}, []);

	useEffect(() => {
		const sell = Number(get("moreOffersPageSell") || 1);
		const rent = Number(get("moreOffersPageRent") || 1);
		setSellPage(sell);
		setRentPage(rent);
	}, [get("moreOffersPageSell"), get("moreOffersPageRent")]);

	useEffect(() => {
		setSellCards([]);
		setRentCards([]);
	}, [id, qLocale, qCurr]);

	useEffect(() => {
		const ac = new AbortController();
		(async () => {
			try {
				const result = await fetchComplexInfo({
					id,
					locale: qLocale ?? "en",
					currency: qCurr,
					moreOffersPageSell: sellPage,
					moreOffersPageRent: rentPage,
					limitSell: pageSize,
					limitRent: pageSize,
					signal: ac.signal,
				});
				setData(result);
				setSellHasMore(result.moreFromComplexSell?.hasMore ?? false);
				setRentHasMore(result.moreFromComplexRent?.hasMore ?? false);
				setSellCards((prev) =>
					sellPage > 1
						? [
								...prev,
								...(result.moreFromComplexSell?.cards ?? []),
						  ]
						: result.moreFromComplexSell?.cards ?? []
				);
				setRentCards((prev) =>
					rentPage > 1
						? [
								...prev,
								...(result.moreFromComplexRent?.cards ?? []),
						  ]
						: result.moreFromComplexRent?.cards ?? []
				);
			} catch (e) {
				console.error(e);
			}
		})();
		return () => ac.abort();
	}, [id, qLocale, qCurr, sellPage, rentPage]);

	if (!data) return <></>;

	return (
		<div className={styles.rentCardContainer}>
			<CardDetailedPreviewBlock
				images={data.images}
				offerId={id}
				mode="Rent"
			/>

			<div className={styles.rentCardContent}>
				<div className={styles.DetailsOfOffer}>
					<DetailsOfOffer
						mode="Complex"
						offerDetail={data.offerDetail}
						propDetailsCard={[]}
						breadcrumbs={data.breadcrumbs}
						cards={[
							{
								type: t("complex.forSale"),
								priceStartsFrom: t("complex.fromPrice", {
									minPrice: 12314,
								}),
								amountOfApartments: t(
									"complex.amountOfApartments",
									{ count: 23 }
								),
							},
							{
								type: t("complex.forRent"),
								priceStartsFrom: `${t("complex.fromPrice", {
									minPrice: 5424,
								})}${t("cards.perMonth")}`,
								amountOfApartments: t(
									"complex.amountOfApartments",
									{ count: 23 }
								),
							},
						]}
						offerId={id}
					/>
				</div>

				<div className={styles.complexBlock}>
					<ComplexConveniences
						complexName={data.complex.complexName}
						complexImage={data.complex.complexImage}
						details={[
							{
								label: t("CardDetailed.complex.year"),
								value: data.complex.yearOfBuilding,
							},
							{
								label: t(
									"CardDetailed.complex.amountOfApartments"
								),

								value: data.complex.amountOfApartments,
							},
							{
								label: t("CardDetailed.complex.builder"),
								value: data.complex.builder,
							},
						]}
						tags={data.complex.tags}
						mode="Rent"
					/>
				</div>

				<div className={styles.moreOffersFromComplex}>
					<MoreOffersFromThisComplex
						nameOfComplex={data.moreFromComplexSell.nameOfComplex}
						optionsBedrooms={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsBedrooms
						}
						optionsSortBy={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsSortBy
						}
						optionsPriceForPhoneMode={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsMinAndMaxPriceForPhoneMode
						}
						mode="Complex"
						hasMore={sellHasMore}
						showFilters={false}
						titleKey={"complex.moreOffersSell"}
						cardsBasePath={"/catalog/CardDetails"}
						shouldUsePaging={true}
						enableScroll={false}
						pageName="moreOffersPageSell"
						cards={sellCards.map((card) => {
							return {
								...card,
								pricePerMeter: `${card.pricePerMeter} ${t(
									"complex.sellPricePerMeter"
								)}`,
							};
						})}
					/>
				</div>
				<div className={styles.subscribeForNotifications}>
					<SubscribeForNotifications isRent={true} />
				</div>
				<div className={styles.moreOffersFromComplex}>
					<MoreOffersFromThisComplex
						nameOfComplex={data.moreFromComplexRent.nameOfComplex}
						optionsBedrooms={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsBedrooms
						}
						optionsSortBy={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsSortBy
						}
						optionsPriceForPhoneMode={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsMinAndMaxPriceForPhoneMode
						}
						cards={rentCards.map((card) => {
							return {
								...card,
								pricePerMeter: card.pricePerMeter
									? `${card.pricePerMeter} ${t(
											"cards.perMonth"
									  )}`
									: "",
							};
						})}
						mode="Complex"
						hasMore={rentHasMore}
						showFilters={false}
						titleKey={"complex.moreOffersRent"}
						cardsBasePath={"/catalog/rent/CardDetails"}
						shouldUsePaging={true}
						enableScroll={false}
						pageName="moreOffersPageRent"
					/>
				</div>

				<div className={styles.location}>
					<CardDetailedLocation
						image={data.location.image}
						breadcrumbs={data.location.breadcrumbs}
						toLocationHref={data.location.toLocationHref}
						countryName={data.location.countryName}
						mode="Rent"
					/>
				</div>

				<div className={styles.listingGranted}>
					<ListingGranted
						agentIcon={data.agent.agentIcon}
						agentName={data.agent.agentName}
						allOffers={data.agent.allOffers}
						agentStatus={data.agent.agentStatus}
						phoneHref={data.agent.phoneHref}
						whatsAppHref={data.agent.whatsAppHref}
						mode="Rent"
						agentDetails={[
							{
								label: t(
									"CardDetailed.listingGranted.experienceOnPhuket"
								),
								value: data.agent.agentExperienceOnPhuket,
							},
							{
								label: t(
									"CardDetailed.listingGranted.workingHoursOnPhuket"
								),
								value: data.agent.phuketWorkingHours,
							},
							{
								label: t(
									"CardDetailed.listingGranted.languages"
								),
								value: data.agent.languages,
							},
						]}
						additionalText="Группа компаний Country Group  — один из самых стабильных застройщиков на острове Пхукет, который работает в сфере недвижимости уже более 12 лет, а на Пхукете больше 6 лет."
					/>
				</div>

				<div className={styles.similarOffers}>
					<SimilarOffers
						tags={[]}
						isRent={true}
						cards={data.similar.cards}
					/>
				</div>
			</div>
			<div className={styles.agent__underBlock}>
				<div className={styles.agent__underBlock_content}>
					<img
						src={data.agent.agentIcon}
						alt=""
						className={styles.agentIcon}
					/>
					<div className={styles.agent__underBlock__state}>
						<p className={styles.agent__underBlock__title}>
							{data.agent.agentName}
						</p>
						<div className={styles.agent__underBlock__status}>
							<img
								src={data.agent.agentStatus.img}
								alt=""
								className={
									styles.agent__underBlock__status_icon
								}
							/>
							<p className={styles.agent__status_text}>
								{data.agent.agentStatus.text}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.agent__underBlock__buttons}>
					<Link
						href={data.agent.phoneHref}
						className={styles.agent__underBlock__buttonPhone}
					>
						<img
							src="/MdCall.svg"
							alt=""
							className={styles.underBlock_icon}
						/>
					</Link>
					<Link
						className={styles.agent__underBlock__buttonWhatsApp}
						href={data.agent.whatsAppHref}
					>
						WhatsApp
					</Link>
				</div>
			</div>
		</div>
	);
}
