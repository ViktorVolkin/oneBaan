"use client";
import styles from "./SellCardDetailed.module.css";

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
import { Link } from "@/i18n/navigation";
import { useQueryParams } from "@/app/customHooks/useQueryParams";
import { useMediaQuery } from "@/app/customHooks/MediaQuery";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import Footer from "../../Blocks/Footer";

type CardItem = Omit<ListingCardBase, "isRentCard">;

export function SellCardDetailedPage(props: { id: string }) {
	type DataType = Awaited<ReturnType<typeof fetchSellCardDetailedPage>>;
	const [data, setData] = useState<DataType | null>(null);

	const isPhone = useMediaQuery("(max-width: 768px)");

	const [accMoreCards, setAccMoreCards] = useState<CardItem[]>([]);
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

	const qPageRaw = isPhone ? get("page") : null;
	const effectivePage = isPhone ? Number(qPageRaw || 1) : null;

	const id = props.id;

	const baseQuery = useMemo(
		() => ({
			locale: qLocale,
			currency: qCurr ?? "USD",
			minPrice: qMinPrice ?? "",
			maxPrice: qMaxPrice ?? "",
			sortBy: qSortBy ?? "recommended",
			beds: qBeds ?? "",
			...(effectivePage ? { page: effectivePage, limit: pageSize } : {}),
		}),
		[
			qLocale,
			qCurr,
			qMinPrice,
			qMaxPrice,
			qSortBy,
			qBeds,
			effectivePage,
			pageSize,
		]
	);

	useEffect(() => {
		setAccMoreCards([]);
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

				const incoming: CardItem[] =
					result.moreFromComplex?.cards ?? [];
				const serverHasMore = Boolean(
					(result as any)?.moreFromComplex?.hasMore
				);

				if ((effectivePage ?? 1) > 1) {
					setAccMoreCards((prev) => [...prev, ...incoming]);
				} else {
					setAccMoreCards(incoming);
				}
				setHasMore(serverHasMore);
			} catch (error: any) {
				if (error?.name !== "AbortError") console.error(error);
			}
		})();
		return () => ac.abort();
	}, [id, baseQuery, effectivePage]);

	return data ? (
		<div className={styles.sellCardContainer}>
			<CardDetailedPreviewBlock
				images={data.images}
				amountOfLikes={data.amountOfLikes}
				offerId={id}
				isRent={false}
			/>

			<div className={styles.sellCardContent}>
				<DetailsOfOffer
					isRent={false}
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
						yearOfBuilding={data.complex.yearOfBuilding}
						amountOfApartments={data.complex.amountOfApartments}
						builder={data.complex.builder}
						tags={data.complex.tags}
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
						cards={accMoreCards}
						isRent={false}
						hasMore={hasMore}
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
						isRent={false}
						cards={data.similar.cards}
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
