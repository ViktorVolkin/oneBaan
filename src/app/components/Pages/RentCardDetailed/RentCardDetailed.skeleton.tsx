import { CardDetailedPreviewBlockSkeleton } from "../../Blocks/CardDetailedPreviewBlock";
import { ComplexConveniencesSkeleton } from "../../Blocks/ComplexConveniences";
import { DetailsOfOfferSkeleton } from "../../Blocks/DetailsOfOffer";
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
			</div>
		</div>
	);
}
