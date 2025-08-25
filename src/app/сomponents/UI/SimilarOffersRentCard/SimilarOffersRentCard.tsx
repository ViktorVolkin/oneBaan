import { useTranslations } from "next-intl";
import styles from "./SimilarOffersRentCard.module.css";
import type { SimilarRentCard } from "@/app/types/similarOffers.types";
import { Link } from "@/i18n/navigation";
import IconRow from "../IconRow";
export function SimilarOffersRentCard(props: SimilarRentCard) {
	const t = useTranslations();
	return (
		<div className={styles.similarOffersRentCard__container}>
			<img src={props.mainImage} alt="" className={styles.image} />
			<div className={styles.card__content}>
				<h4 className={styles.card__title}>{props.cardDescription}</h4>
				<p className={styles.card__price}>
					{props.price}
					{t("cards.perMonth")}
				</p>
				<p className={styles.card__detail}>{props.details}</p>
				{props.breadcrumbs && props.breadcrumbs.length > 0 && (
					<nav className={styles.card__breadcrumbs}>
						{props.breadcrumbs.map((crumb, index) => (
							<span key={index}>
								<Link href={crumb.href}>{crumb.label}</Link>
								{index < props.breadcrumbs.length - 1 && (
									<span className={styles.card__separator}>
										-
									</span>
								)}
							</span>
						))}
					</nav>
				)}
				<IconRow {...props.iconRow}></IconRow>
				<div className={styles.button__container}>
					<Link href={props.phoneHref} className={styles.phone}>
						<img
							src="/MdCall.svg"
							alt=""
							className={styles.phoneIcon}
						/>
					</Link>
					<Link href={props.whatsAppHref} className={styles.whatsApp}>
						WhatsApp
					</Link>
				</div>
			</div>
		</div>
	);
}
