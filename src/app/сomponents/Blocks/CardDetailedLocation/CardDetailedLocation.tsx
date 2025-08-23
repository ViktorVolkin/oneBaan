import { useTranslations } from "next-intl";
import styles from "./CardDetailedLocation.module.css";
import { Link } from "@/i18n/navigation";
interface CardDetailedLocationProps {
	image: string;
	countryName: string;
	breadcrumbs: { label: string; href: string }[];
	toLocationHref: string;
}
export function CardDetailedLocation({
	image,
	countryName,
	breadcrumbs,
	toLocationHref,
}: CardDetailedLocationProps) {
	const t = useTranslations();
	return (
		<div className={styles.location__container}>
			<h4 className={styles.location__title}>
				{t("CardDetailed.location")}
			</h4>
			<div className={styles.location__details}>
				<img src={image} alt="" className={styles.bgImage} />
				<div className={styles.location__data_container}>
					<div className={styles.location__text_container}>
						<div className={styles.location__data__wrapper}>
							<img
								src="/adress.svg"
								alt=""
								className={styles.location__icon}
							/>
							<div className={styles.location__data}>
								<p className={styles.location__country}>
									{countryName}
								</p>
								{breadcrumbs && breadcrumbs.length > 0 && (
									<nav className={styles.card__breadcrumbs}>
										{breadcrumbs.map((crumb, index) => (
											<span key={index}>
												<Link href={crumb.href}>
													{crumb.label}
												</Link>
												{index <
													breadcrumbs.length - 1 && (
													<span
														className={
															styles.card__separator
														}
													>
														→
													</span>
												)}
											</span>
										))}
									</nav>
								)}
							</div>
						</div>
						<Link
							href={toLocationHref}
							className={styles.checkOnMap}
						>
							{t("CardDetailed.checkOnMap")}
							<span className={styles.checkOnMap__arrow}>→</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
