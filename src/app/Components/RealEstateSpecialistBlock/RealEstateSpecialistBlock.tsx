import styles from "./RealEstateSpecialistBlock.module.css";
import Image from "next/image";
import defaultImage from "../../../../public/realEstateSpecialistBlock_image.jpg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import logo from "../../../../public/RealEstateLogoMark.svg";
import dollar from "../../../../public/RealEstateSpeialist__icon_dollar.svg";
import key from "../../../../public/RealEstateSpeialist__icon_key.svg";
import { IRealEstateSpecialistBlock } from "@/app/types/RealEstateSpecialistBlock.types";

export const RealEstateSpecialistBlock = ({
	image = defaultImage,
	title = "RealEstateSpecialist.title",
	button = {
		linkHref: "https://www.google.com",
		linkText: "RealEstateSpecialist.button.text",
	},
	Card1 = { icon: dollar, text: "RealEstateSpecialist.text" },
	Card2 = { icon: key, text: "RealEstateSpecialist.text" },
}: IRealEstateSpecialistBlock) => {
	const t = useTranslations();
	return (
		<div className={styles.SpecialistBlock__container}>
			<div className={styles.SpecialistBlock__infoContainer}>
				<h4 className={styles.SpecialistBlock__title}>{t(title)}</h4>

				<div className={styles.cards__container}>
					<div className={styles.card}>
						<Image
							src={logo}
							alt="buy"
							className={styles.card__logo_image}
						></Image>
						<div className={styles.card__textContainer}>
							<div className={styles.card__textPS}>
								{t("RealEstateSpecialist.ps")}
								<Image
									src={Card1.icon}
									alt="sell"
									className={styles.card__icon}
								></Image>
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
						<Image
							src={logo}
							alt="buy"
							className={styles.card__logo_image}
						></Image>
						<div className={styles.card__textContainer}>
							<div className={styles.card__textPS}>
								{t("RealEstateSpecialist.ps")}
								<Image
									src={Card2.icon}
									alt="sell"
									className={styles.card__icon}
								></Image>
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
			></Image>
		</div>
	);
};
