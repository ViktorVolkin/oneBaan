import { CardDetailedPreviewBlockSkeleton } from "../../Blocks/CardDetailedPreviewBlock";
import { ComplexConveniencesSkeleton } from "../../Blocks/ComplexConveniences";
import { DetailsOfOfferSkeleton } from "../../Blocks/DetailsOfOffer";
import { MoreOffersFromThisComplexSkeleton } from "../../Blocks/MoreOffersFromThisComplex";
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
			</div>
		</div>
	);
}
