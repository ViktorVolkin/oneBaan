import styles from "./MainPage.skeleton.module.css";
import { MainPageFilterOffersSkeleton } from "../../UI/MainPageFilterOffers";
import { GuideBlockSkeleton } from "../../Blocks/GuideBlock";
import { NewObjectsSaleBlockSkeleton } from "../../Blocks/NewObjectsSaleBlock";
import { RealEstateSpecialistBlockSkeleton } from "../../Blocks/RealEstateSpecialistBlock";
export function MainPageSkeleton() {
	return (
		<div className={styles.page__container}>
			<div className={styles.intro__block}>
				<div className={styles.image__description}>
					<div className={styles.image__title}></div>
					<div className={styles.image__text}></div>
				</div>
				<MainPageFilterOffersSkeleton />
			</div>
			<div className={styles.guideBlock}>
				<GuideBlockSkeleton />
			</div>
			<div className={styles.NewObjectsSaleBlock}>
				<NewObjectsSaleBlockSkeleton />
			</div>
			<div className={styles.RealEstateSpecialistBlock}>
				<RealEstateSpecialistBlockSkeleton />
			</div>
		</div>
	);
}
