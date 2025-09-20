"use client";
import styles from "./RentCardDetailed.module.css";
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
import { useEffect, useMemo, useState } from "react";
import { fetchSellCardDetailedPage } from "@/app/api/fetchSellCardDetailed";
import { useQueryParams } from "@/app/customHooks/useQueryParams";
import { Link } from "@/i18n/navigation";

export function RentCardDetailed({ id }: { id: string }) {
	type DataType = Awaited<ReturnType<typeof fetchSellCardDetailedPage>>;
	const [data, setData] = useState<DataType | null>(null);
	const [hasMore, setHasMore] = useState(false);

	const { get, set } = useQueryParams();
	const t = useTranslations();

	const pageSize = 4;

	useEffect(() => {
		if (!get("moreOffersPage")) set("moreOffersPage", "1");
	}, []);

	const qLocale = useLocale();
	const qBeds = get("beds");
	const qCurr = get("currency");
	const qSortBy = get("sortBy");
	const moreOffersPageRaw = get("moreOffersPage");
	const moreOffersPage = Math.max(1, Number(moreOffersPageRaw || 1));

	const baseQuery = useMemo(
		() => ({
			locale: qLocale,
			currency: qCurr ?? "USD",
			sortBy: qSortBy ?? "recommended",
			beds: qBeds ?? "",
			moreOffersPage,
			limit: pageSize,
		}),
		[qLocale, qCurr, qSortBy, qBeds, moreOffersPage]
	);

	useEffect(() => {
		const ac = new AbortController();
		(async () => {
			try {
				const result = await fetchSellCardDetailedPage(
					id,
					baseQuery,
					ac.signal,
					"/rent-card-detailed/"
				);
				setData(result);

				const serverHasMore = Boolean(result.moreFromComplex?.hasMore);

				setHasMore(serverHasMore);
			} catch (e) {
				console.error(e);
			}
		})();
		return () => ac.abort();
	}, [id, baseQuery, moreOffersPage]);

	return data ? (
		<div className={styles.rentCardContainer}>
			<CardDetailedPreviewBlock
				images={data.images}
				offerId={id}
				mode="Rent"
			/>

			<div className={styles.rentCardContent}>
				<div className={styles.DetailsOfOffer}>
					<DetailsOfOffer
						mode="Rent"
						offerDetail={data.offerDetail}
						price={data.price}
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
						subText={data.subText}
						breadcrumbs={data.breadcrumbs}
						stats={data.stats}
						offerFeatureText={data.offerFeatureText}
						tagsDetailed={data.tagsDetailed || { tags: [] }}
						detailsOnOneBaan={{
							daysOnOneBaan: data.detailsOnOneBaan.daysOnOneBaan,
							amountOfViews: data.detailsOnOneBaan.amountOfViews,
						}}
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
						nameOfComplex={data.moreFromComplex.nameOfComplex}
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
						cardsBasePath="/catalog/rent/CardDetails"
						mode="Rent"
						hasMore={hasMore}
						shouldUsePaging={true}
						enableScroll={false}
					/>
				</div>

				<div className={styles.subscribeForNotifications}>
					<SubscribeForNotifications isRent={true} />
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
					/>
				</div>

				<div className={styles.similarOffers}>
					<SimilarOffers
						tags={data.similar.tags}
						mode="Rent"
						cards={data.similar.cards}
						cardsBasePath="/catalog/rent/CardDetails"
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
	) : (
		<></>
	);
}
