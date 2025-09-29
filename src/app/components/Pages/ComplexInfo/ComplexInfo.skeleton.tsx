import { CardDetailedLocationSkeleton } from "../../Blocks/CardDetailedLocation";
import { CardDetailedPreviewBlockSkeleton } from "../../Blocks/CardDetailedPreviewBlock";
import { ComplexConveniencesSkeleton } from "../../Blocks/ComplexConveniences";
import { DetailsOfOfferSkeleton } from "../../Blocks/DetailsOfOffer";
import { ListingGrantedSkeleton } from "../../Blocks/ListingGranted";
import { MoreOffersFromThisComplexSkeleton } from "../../Blocks/MoreOffersFromThisComplex";
import { SimilarOffersSkeleton } from "../../Blocks/SimilarOffers/SimilarOffers.skeleton";
import { SubscribeForNotificationsSkeleton } from "../../Blocks/SubscribeForNotifications";
import styles from "./ComplexInfo.skeleton.module.css";
export function ComplexInfoSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.previewBlock}>
				<CardDetailedPreviewBlockSkeleton mode={"Rent"} />
			</div>
			<div className={styles.content__container}>
				<div className={styles.detailsOfOffer}>
					<DetailsOfOfferSkeleton mode={"Complex"} />
				</div>
				<div className={styles.complexConveniences}>
					<ComplexConveniencesSkeleton mode={"Complex"} />
				</div>
				<div className={styles.moreOffersFromThisComplex}>
					<MoreOffersFromThisComplexSkeleton mode={"Complex"} />
				</div>
				<div className={styles.subscribeForNotifications}>
					<SubscribeForNotificationsSkeleton />
				</div>
				<div className={styles.moreOffersFromThisComplex}>
					<MoreOffersFromThisComplexSkeleton mode={"Complex"} />
				</div>
				<div className={styles.CardDetailedLocation}>
					<CardDetailedLocationSkeleton />
				</div>
				<div className={styles.listingGranted}>
					<ListingGrantedSkeleton mode={"Complex"} />
				</div>
				<div className={styles.similarOffers}>
					<SimilarOffersSkeleton mode={"Complex"} />
				</div>
			</div>
		</div>
	);
}
