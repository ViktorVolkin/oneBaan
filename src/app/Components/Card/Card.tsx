import styles from "./Card.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Link from "next/link";
import WhatsApp from "../../../../public/whatsapp.svg";
import { ICard } from "@/app/types/Card.types";
import { useTranslations } from "next-intl";
export const Card = ({ image, price, whatsAppLink, details }: ICard) => {
	const t = useTranslations();
	return (
		<div className={styles.card}>
			<Image
				src={image}
				alt=""
				className={styles.card__image}
				fill={true}
			></Image>
			<div className={styles.card__logo_container}>
				<Image
					alt="oneBaan"
					src={logo}
					className={styles.card__logo}
				></Image>
			</div>
			<Link href={whatsAppLink} className={styles.card__WhatsAppLink}>
				<Image
					src={WhatsApp}
					alt="whatsAppLink"
					className={styles.card__WhatsAppIcon}
				></Image>
			</Link>
			<div className={styles.card__details_container}>
				<h5 className={styles.card__price}>{price}</h5>
				<p className={styles.card__details}>{t(details)}</p>
				<Link
					href={whatsAppLink}
					className={styles.card__WhatsAppLinkPhone}
				>
					<Image
						src={WhatsApp}
						alt="whatsAppLink"
						className={styles.card__WhatsAppIconPhone}
					></Image>
					WhatsApp
				</Link>
			</div>
		</div>
	);
};
