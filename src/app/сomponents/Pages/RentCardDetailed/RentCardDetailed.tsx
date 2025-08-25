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
import { useQueryParams } from "@/app/сustomHooks/useQueryParams";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";

type CardItem = Omit<ListingCardBase, "isRentCard">;

export function RentCardDetailed(props: { id: string }) {
	const id = props.id;
	type DataType = Awaited<ReturnType<typeof fetchSellCardDetailedPage>>;
	const [data, setData] = useState<DataType | null>(null);

	const { get } = useQueryParams();
	const t = useTranslations();
	const pageSize = 4;

	const qLocale = useLocale();
	const qBeds = get("beds");
	const qCurr = get("currency");
	const qSortBy = get("sortBy");
	useEffect(() => {
		(async () => {
			try {
				const result = await fetchSellCardDetailedPage(
					id,
					undefined,
					undefined,
					"/rent-card-detailed/"
				);
				setData(result);
			} catch (error: any) {}
		})();
	}, [id]);

	return data ? (
		<div className={styles.rentCardContainer}>
			<CardDetailedPreviewBlock
				images={data.images}
				offerId={id}
				isRent={true}
			/>

			<div className={styles.rentCardContent}>
				<div className={styles.DetailsOfOffer}>
					<DetailsOfOffer
						isRent={true}
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
						tagsSell={data.tagsSell || { tags: [] }}
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
						yearOfBuilding={data.complex.yearOfBuilding}
						amountOfApartments={data.complex.amountOfApartments}
						builder={data.complex.builder}
						tags={data.complex.tags}
						isRent={true}
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
						cards={data.moreFromComplex.cards || []}
						isRent={true}
						hasMore={data.moreFromComplex.hasMore || false}
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
					/>
				</div>

				<div className={styles.listingGranted}>
					<ListingGranted
						agentIcon={data.agent.agentIcon}
						agentName={data.agent.agentName}
						agentExperienceOnPhuket={
							data.agent.agentExperienceOnPhuket
						}
						phuketWorkingHours={data.agent.phuketWorkingHours}
						languages={data.agent.languages}
						allOffers={data.agent.allOffers}
						agentStatus={data.agent.agentStatus}
						phoneHref={data.agent.phoneHref}
						whatsAppHref={data.agent.whatsAppHref}
					/>
				</div>

				<div className={styles.similarOffers}>
					<SimilarOffers
						tags={data.similar.tags}
						isRent={true}
						cards={data.similar.cards}
					/>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}
