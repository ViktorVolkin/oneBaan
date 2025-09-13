"use client";
import styles from "./SellCardDetailed.module.css";
import CardDetailedPreviewBlock from "../../Blocks/CardDetailedPreviewBlock/CardDetailedPreviewBlock";
import DetailsOfOffer from "../../Blocks/DetailsOfOffer";
import MoreOffersFromThisComplex from "../../Blocks/MoreOffersFromThisComplex";
import { CATALOG_FILTER_OPTIONS_DEFAULT } from "@/app/constants/common";
import SubscribeForNotifications from "../../Blocks/SubscribeForNotifications";
import ListingGranted from "../../Blocks/ListingGranted";
import SimilarOffers from "../../Blocks/SimilarOffers";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { fetchSellCardDetailedPage } from "@/app/api/fetchSellCardDetailed";
import { Link } from "@/i18n/navigation";
import { useQueryParams } from "@/app/customHooks/useQueryParams";
import { useMediaQuery } from "@/app/customHooks/MediaQuery";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import Footer from "../../Blocks/Footer";
import ComplexConveniences from "../../Blocks/ComplexConveniences";
import CardDetailedLocation from "../../Blocks/CardDetailedLocation";

type CardItem = Omit<ListingCardBase, "isRentCard">;

export function SellCardDetailedPage(props: { id: string }) {
	type DataType = Awaited<ReturnType<typeof fetchSellCardDetailedPage>>;
	const [data, setData] = useState<DataType | null>(null);

	const isPhone = useMediaQuery("(max-width: 768px)");

	const [hasMore, setHasMore] = useState(false);

	const { get } = useQueryParams();
	const t = useTranslations();
	const pageSize = 4;
	const qLocale = useLocale();
	const qBeds = get("beds");
	const qCurr = get("currency");
	const qMinPrice = get("min-price");
	const qMaxPrice = get("max-price");
	const qSortBy = get("sortBy");
	const qMoreOffersPageRaw = isPhone ? get("moreOffersPage") : null;
	const effectiveMoreOffersPage = isPhone
		? Number(qMoreOffersPageRaw || 1)
		: undefined;

	const id = props.id;

	const baseQuery = useMemo(
		() => ({
			locale: qLocale,
			currency: qCurr ?? "USD",
			minPrice: qMinPrice ?? "",
			maxPrice: qMaxPrice ?? "",
			sortBy: qSortBy ?? "recommended",
			moreOffersPage: effectiveMoreOffersPage,
			limit: pageSize,
			beds: qBeds ?? "",
		}),
		[
			qLocale,
			qCurr,
			qMinPrice,
			qMaxPrice,
			qSortBy,
			effectiveMoreOffersPage,
			qBeds,
			pageSize,
		]
	);

	useEffect(() => {
		setHasMore(false);
	}, [id, qLocale, qCurr, qMinPrice, qMaxPrice, qSortBy, qBeds]);

	useEffect(() => {
		const ac = new AbortController();
		(async () => {
			try {
				const result = await fetchSellCardDetailedPage(
					id,
					baseQuery,
					ac.signal
				);
				setData(result);
				const serverHasMore = Boolean(
					(result as any)?.moreFromComplex?.hasMore
				);
				setHasMore(serverHasMore);
			} catch (error: any) {
				if (error?.name !== "AbortError") console.error(error);
			}
		})();
		return () => ac.abort();
	}, [id, baseQuery, effectiveMoreOffersPage]);

	return data ? (
		<div className={styles.sellCardContainer}>
			<CardDetailedPreviewBlock
				images={data.images}
				amountOfLikes={data.amountOfLikes}
				offerId={id}
				mode="Sell"
			/>

			<div className={styles.sellCardContent}>
				<DetailsOfOffer
					mode="Sell"
					offerDetail={data.offerDetail}
					price={data.price}
					propDetailsCard={[
						{
							title: t("CardDetailed.yearOfBuilding"),
							text: data.detailValues.yearOfBuilding ?? "",
							icon: "/yearOfBuilding.svg",
						},
						{
							title: t("CardDetailed.distanceToSea"),
							text: data.detailValues.distanceToSea ?? "",
							icon: "/distanceToWater.svg",
						},
						{
							title: t("CardDetailed.level"),
							text: data.detailValues.level ?? "",
							icon: "/levels.svg",
						},
						{
							title: t("CardDetailed.check"),
							text: t("CardDetailed.onMap"),
							icon: "/BiMap.svg",
							leadsTo: data.detailValues.checkOnMapHref,
						},
					]}
					subText={data.subText}
					breadcrumbs={data.breadcrumbs}
					stats={data.stats}
					tagsSell={data.tagsSell || { tags: [] }}
					offerFeatureText={data.offerFeatureText}
					tagsDetailed={data.tagsDetailed || { tags: [] }}
					detailsOnOneBaan={{
						daysOnOneBaan: data.detailsOnOneBaan.daysOnOneBaan,
						amountOfViews: data.detailsOnOneBaan.amountOfViews,
					}}
					offerId={id}
				/>

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
						mode="Sell"
					/>
				</div>

				<div className={styles.moreOffersFromComplex}>
					<MoreOffersFromThisComplex
						nameOfComplex={data.moreFromComplex.nameOfComplex}
						cardsBasePath="/catalog/CardDetails"
						optionsBedrooms={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsBedrooms
						}
						optionsSortBy={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsSortBy
						}
						optionsPriceForPhoneMode={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsMinAndMaxPriceForPhoneMode
						}
						cards={data.moreFromComplex.cards}
						mode="Sell"
						hasMore={hasMore}
						shouldUsePaging={isPhone}
						enableScroll={!isPhone}
					/>
				</div>

				<div className={styles.subscribeForNotifications}>
					<SubscribeForNotifications />
				</div>

				<div className={styles.location}>
					<CardDetailedLocation
						image={data.location.image}
						breadcrumbs={data.location.breadcrumbs}
						toLocationHref={data.location.toLocationHref}
						countryName={data.location.countryName}
						mode="Sell"
					/>
				</div>

				<div className={styles.listingGranted}>
					<ListingGranted
						mode="Sell"
						agentIcon={data.agent.agentIcon}
						agentName={data.agent.agentName}
						allOffers={data.agent.allOffers}
						agentStatus={data.agent.agentStatus}
						phoneHref={data.agent.phoneHref}
						whatsAppHref={data.agent.whatsAppHref}
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
					/>
				</div>

				<div className={styles.similarOffers}>
					<SimilarOffers
						tags={data.similar.tags}
						mode="Sell"
						cards={data.similar.cards}
						cardsBasePath="/catalog/CardDetails"
					/>
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
								src="/footer__phone.svg"
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
			<Footer />
		</div>
	) : (
		<></>
	);
}
