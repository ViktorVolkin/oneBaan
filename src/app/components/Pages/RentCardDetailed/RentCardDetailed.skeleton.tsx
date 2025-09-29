import { CardDetailedLocationSkeleton } from "../../Blocks/CardDetailedLocation";
import { CardDetailedPreviewBlockSkeleton } from "../../Blocks/CardDetailedPreviewBlock";
import { ComplexConveniencesSkeleton } from "../../Blocks/ComplexConveniences";
import { DetailsOfOfferSkeleton } from "../../Blocks/DetailsOfOffer";
import { ListingGrantedSkeleton } from "../../Blocks/ListingGranted";
import { MoreOffersFromThisComplexSkeleton } from "../../Blocks/MoreOffersFromThisComplex";
import { SimilarOffersSkeleton } from "../../Blocks/SimilarOffers/SimilarOffers.skeleton";
import { SubscribeForNotificationsSkeleton } from "../../Blocks/SubscribeForNotifications";
import styles from "./RentCardDetailed.skeleton.module.css";
export function RentCardDetailedSkeleton() {
	return (
		<div className={styles.container}>
			<div className={styles.previewBlock}>
				<CardDetailedPreviewBlockSkeleton mode={"Rent"} />
			</div>
			<div className={styles.content__container}>
				<div className={styles.detailsOfOffer}>
					<DetailsOfOfferSkeleton mode={"Rent"} />
				</div>
				<div className={styles.complexConveniences}>
					<ComplexConveniencesSkeleton mode={"Rent"} />
				</div>
				<div className={styles.moreOffersFromThisComplex}>
					<MoreOffersFromThisComplexSkeleton mode={"Rent"} />
				</div>
				<div className={styles.subscribeForNotifications}>
					<SubscribeForNotificationsSkeleton />
				</div>
				<div className={styles.CardDetailedLocation}>
					<CardDetailedLocationSkeleton />
				</div>
				<div className={styles.listingGranted}>
					<ListingGrantedSkeleton mode={"Rent"} />
				</div>
				<div className={styles.similarOffers}>
					<SimilarOffersSkeleton mode={"Rent"} />
				</div>
			</div>
		</div>
	);
}
