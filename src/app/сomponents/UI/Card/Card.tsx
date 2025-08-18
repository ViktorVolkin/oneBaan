import styles from "./Card.module.css";
import { Link } from "@/i18n/navigation";
import { ICard } from "@/app/types/Card.types";
import Image from "next/image";
export const Card = ({ image, price, whatsAppLink, details }: ICard) => {
	return (
		<div className={styles.card}>
			<Image
				src={image}
				alt="Property"
				className={styles.card__image}
				fill={true}
			/>
			<div className={styles.card__logo_container}>
				<img
					alt="oneBaan"
					src="/logo.svg"
					className={styles.card__logo}
				/>
			</div>
			<Link href={whatsAppLink} className={styles.card__WhatsAppLink}>
				<img
					src="/whatsapp.svg"
					alt="whatsAppLink"
					className={styles.card__WhatsAppIcon}
				/>
			</Link>
			<div className={styles.card__details_container}>
				<h5 className={styles.card__price}>{price}</h5>
				<p className={styles.card__details}>{details}</p>
				<Link
					href={whatsAppLink}
					className={styles.card__WhatsAppLinkPhone}
				>
					<img
						src="/whatsapp.svg"
						alt="whatsAppLink"
						className={styles.card__WhatsAppIconPhone}
					/>
					WhatsApp
				</Link>
			</div>
		</div>
	);
};
