import { useTranslations } from "next-intl";
import styles from "./SimilarOffersRentCard.module.css";
import type { SimilarRentCard } from "@/app/types/similarOffers.types";
import { Link, useRouter } from "@/i18n/navigation";
import IconRow from "@/app/components/UI/IconRow";
import CardButtons from "@/app/components/UI/CardButtons";
export function SimilarOffersRentCard(props: SimilarRentCard) {
	const router = useRouter();

	const handleCardClick = () => {
		router.push(`/catalog/rent/CardDetails/${props.idOfCard}`);
	};
	const t = useTranslations();
	const statsIcons: { iconPath: string; value: string | number }[] = [
		...(props.stats?.amountOfBeds !== undefined
			? [{ iconPath: "/BiBed.svg", value: props.stats.amountOfBeds }]
			: []),
		...(props.stats?.amountOfBaths !== undefined
			? [{ iconPath: "/BiBath.svg", value: props.stats.amountOfBaths }]
			: []),
		...(props.stats?.area !== undefined
			? [{ iconPath: "/BiBorderOuter.svg", value: props.stats.area }]
			: []),
	];
	return (
		<div className={styles.similarOffersRentCard__container}>
			<img src={props.mainImage} alt="" className={styles.image} />
			<div className={styles.card__content}>
				<div
					className={styles.info__container}
					onClick={handleCardClick}
				>
					<h4 className={styles.card__title}>
						{props.cardDescription}
					</h4>
					<p className={styles.card__price}>
						{props.price}
						{t("cards.perMonth")}
					</p>
					<p className={styles.card__detail}>{props.details}</p>
					{props.breadcrumbs && props.breadcrumbs.length > 0 && (
						<nav
							className={styles.card__breadcrumbs}
							onClick={(e) => e.stopPropagation()}
						>
							{props.breadcrumbs.map((crumb, index) => (
								<span key={index}>
									<Link href={crumb.href}>{crumb.label}</Link>
									{index < props.breadcrumbs.length - 1 && (
										<span
											className={styles.card__separator}
										>
											-
										</span>
									)}
								</span>
							))}
						</nav>
					)}
					<div className={styles.iconRowPhone}>
						<IconRow icons={statsIcons} sizeForIconsinRow="sm" />
					</div>
					<div className={styles.iconRowTablet}>
						<IconRow icons={statsIcons} sizeForIconsinRow="md" />
					</div>
				</div>
				<div className={styles.button__container}>
					<CardButtons
						displayWhatsAppIconWithText={false}
						rentDetailedPhoneIconMode={true}
						displayPhoneWithoutText={false}
						contactSalesmanHref={props.phoneHref}
						contactSalesmanWhatsAppHref={props.whatsAppHref}
					></CardButtons>
				</div>
			</div>
		</div>
	);
}
