import styles from "./NewObjectsSaleBlock.module.css";
import CardSlider from "@/app/components/UI/CardSlider";
import arrowRight from "@/../public/footer__arrow_right.svg";
import { CardSliderProps } from "@/app/types/CardSlider.types";
import { useTranslations } from "next-intl";
export const NewObjectsSaleBlock = ({ data }: CardSliderProps) => {
	const t = useTranslations();
	return (
		<div className={styles.SaleBlock__wrapper}>
			<div className={styles.SaleBlock__container}>
				<div className={styles.SaleBlock__info}>
					<h2 className={styles.title}>
						{t("NewObjectsSaleBlock.title")}
					</h2>
					<div className={styles.customNav}>
						<div className={`${styles.swiperButton} my-prev`}>
							<img
								src={arrowRight}
								alt="go to previous slide"
								className={styles.swiperArrowLeft}
							/>
						</div>
						<div className={`${styles.swiperButton} my-next`}>
							<img
								src={arrowRight}
								alt="go to next slide"
								className={styles.swiperArrowRight}
							/>
						</div>
					</div>
				</div>
				<div className={styles.sliderContainer}>
					<CardSlider
						prevEl=".my-prev"
						nextEl=".my-next"
						data={data}
					/>
				</div>
			</div>
		</div>
	);
};
