import styles from "./NewObjectsSaleBlock.module.css";
import CardSlider from "../CardSlider";
import arrowRight from "@/../public/footer__arrow_right.svg";
import Image from "next/image";
import { CardSliderProps } from "../CardSlider/CardSlider";
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
							<Image
								src={arrowRight}
								alt="go to previous slide"
								className={styles.swiperArrowLeft}
							/>
						</div>
						<div className={`${styles.swiperButton} my-next`}>
							<Image
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
