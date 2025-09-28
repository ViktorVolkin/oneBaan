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
import { ComplexInfoSkeleton } from "./ComplexInfo.skeleton";

export function ComplexInfoPage({ id }: { id: string }) {
	const { get, set } = useQueryParams();
	const [data, setData] = useState<any>(null);
	const t = useTranslations();
	const pageSize = 4;
	const qLocale = useLocale() as (typeof routing.locales)[number];
	const qCurr = get("currency") ?? "USD";

	const sellPage = Number(get("moreOffersPageSell") || 1);
	const rentPage = Number(get("moreOffersPageRent") || 1);

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
			} catch (e) {
				console.error(e);
			}
		})();
		return () => ac.abort();
	}, [id, qLocale, qCurr, sellPage, rentPage]);

	if (!data) return <ComplexInfoSkeleton />;

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
						propDetailsCard={[
							{
								title: t("CardDetailed.yearOfBuilding"),
								text: data.detailValues.yearOfBuilding ?? "",
								icon: "/yearOfBuilding.svg",
							},
							{
								title: t("CardDetailed.distanceToSeaRent"),
								text: data.detailValues.distanceToSea ?? "",
								icon: "/distanceToWater.svg",
							},
							{
								title: t("CardDetailed.levels"),
								text: data.detailValues.level ?? "",
								icon: "/levels.svg",
							},
							{
								title: t("CardDetailed.apartments"),
								text:
									data.detailValues.amountOfApartments ?? "",
								icon: "/amountOfApartments.svg",
							},
						]}
						breadcrumbs={data.breadcrumbs}
						cards={[
							{
								type: t("complex.forSale"),
								priceStartsFrom: `${t("complex.fromPrice")}${
									data.complexMinPrices.sell.minPrice
								}`,
								amountOfApartments: t(
									"complex.amountOfApartments",
									{
										count: data.complexMinPrices.sell
											.amountOfApartments,
									}
								),
							},
							{
								type: t("complex.forRent"),
								priceStartsFrom: `${t("complex.fromPrice")}${
									data.complexMinPrices.rent.minPrice
								}${t("cards.perMonth")}`,
								amountOfApartments: t(
									"complex.amountOfApartments",
									{
										count: data.complexMinPrices.rent
											.amountOfApartments,
									}
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
						hasMore={data.moreFromComplexSell?.hasMore ?? false}
						showFilters={false}
						titleKey={"complex.moreOffersSell"}
						cardsBasePath={"/catalog/CardDetails"}
						shouldUsePaging={true}
						enableScroll={false}
						pageName="moreOffersPageSell"
						cards={
							data.moreFromComplexSell?.cards?.map(
								(card: ComplexCardItem) => ({
									...card,
									pricePerMeter: `${card.pricePerMeter} ${t(
										"complex.sellPricePerMeter"
									)}`,
								})
							) ?? []
						}
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
						cards={
							data.moreFromComplexRent?.cards?.map(
								(card: ComplexCardItem) => ({
									...card,
									pricePerMeter: card.pricePerMeter
										? `${card.pricePerMeter} ${t(
												"cards.perMonth"
										  )}`
										: "",
								})
							) ?? []
						}
						mode="Complex"
						hasMore={data.moreFromComplexRent?.hasMore ?? false}
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
						tags={data.similar.tags}
						cards={data.similar.cards}
						mode="Complex"
						cardsBasePath="/complexInfo"
						titleKey="complex.title"
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
