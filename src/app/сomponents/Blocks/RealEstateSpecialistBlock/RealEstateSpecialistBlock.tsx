import styles from "./RealEstateSpecialistBlock.module.css";
import defaultImage from "@/../public/realEstateSpecialistBlock_image.jpg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IRealEstateSpecialistBlock } from "@/app/types/RealEstateSpecialistBlock.types";
import Image from "next/image";
export const RealEstateSpecialistBlock = ({
	image = defaultImage,
	title = "RealEstateSpecialist.title",
	button = {
		linkHref: "https://www.google.com",
		linkText: "RealEstateSpecialist.button.text",
	},
	Card1 = {
		icon: "/RealEstateSpecialist__icon_dollar.svg",
		text: "RealEstateSpecialist.text",
	},
	Card2 = {
		icon: "/RealEstateSpecialist__icon_key.svg",
		text: "RealEstateSpecialist.text",
	},
}: IRealEstateSpecialistBlock) => {
	const t = useTranslations();
	return (
		<div className={styles.SpecialistBlock__container}>
			<div className={styles.SpecialistBlock__infoContainer}>
				<h4 className={styles.SpecialistBlock__title}>{t(title)}</h4>

				<div className={styles.cards__container}>
					<div className={styles.card}>
						<img
							src="/RealEstateLogoMark.svg"
							alt="buy"
							className={styles.card__logo_image}
						></img>
						<div className={styles.card__textContainer}>
							<div className={styles.card__textPS}>
								{t("RealEstateSpecialist.ps")}
								<img
									src={Card1.icon}
									alt="sell"
									className={styles.card__icon}
								></img>
							</div>
							<p className={styles.card__text}>
								<span className={styles.keyWord}>
									{t("sell")}
								</span>{" "}
								{t(Card1.text)}
							</p>
						</div>
					</div>
					<div className={styles.card}>
						<img
							src="/RealEstateLogoMark.svg"
							alt="buy"
							className={styles.card__logo_image}
						></img>
						<div className={styles.card__textContainer}>
							<div className={styles.card__textPS}>
								{t("RealEstateSpecialist.ps")}
								<img
									src={Card2.icon}
									alt="sell"
									className={styles.card__icon}
								></img>
							</div>
							<p className={styles.card__text}>
								<span className={styles.keyWord}>
									{t("buy")}
								</span>{" "}
								{t(Card2.text)}
							</p>
						</div>
					</div>
				</div>
				<Link
					href={button.linkHref}
					className={styles.SpecialistBlock__button}
				>
					{t(button.linkText)}
				</Link>
			</div>
			<Image
				src={image}
				alt=""
				className={styles.RealEstateSpecialistBlock__image}
				width={500}
				height={500}
			/>
		</div>
	);
};
