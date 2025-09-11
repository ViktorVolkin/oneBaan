"use client";
import { classModeHelper } from "@/app/utils/classModeHelper";
import styles from "./CardDetailedLocation.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
interface CardDetailedLocationProps {
	image: string;
	countryName: string;
	breadcrumbs: { label: string; href: string }[];
	toLocationHref: string;
	mode: "Rent" | "Sell";
}

export function CardDetailedLocation({
	image,
	countryName,
	breadcrumbs,
	toLocationHref,
	mode,
}: CardDetailedLocationProps) {
	const t = useTranslations();
	const cx = classModeHelper(styles);
	return (
		<div className={cx("location__container", mode)}>
			<h4 className={cx("location__title", mode)}>
				{t("CardDetailed.location")}
			</h4>
			<div className={cx("location__details", mode)}>
				<img src={image} alt="" className={cx("bgImage", mode)} />
				<div className={cx("location__data_container", mode)}>
					<div className={cx("location__text_container", mode)}>
						<div className={cx("location__data__wrapper", mode)}>
							<img
								src="/adress.svg"
								alt=""
								className={cx("location__icon", mode)}
							/>
							{mode === "Rent" && (
								<button className={styles.mapIconButton}>
									<img
										src="/footer__adress.svg"
										alt=""
										className={styles.mapIconForTablet}
									/>
								</button>
							)}
							<div className={cx("location__data", mode)}>
								<p className={cx("location__country", mode)}>
									{countryName}
								</p>
								{breadcrumbs && breadcrumbs.length > 0 && (
									<nav
										className={cx(
											"card__breadcrumbs",
											mode
										)}
									>
										{breadcrumbs.map((crumb, index) => (
											<span key={index}>
												<Link href={crumb.href}>
													{crumb.label}
												</Link>
												{index <
													breadcrumbs.length - 1 && (
													<span
														className={cx(
															"card__separator",
															mode
														)}
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
							className={cx("checkOnMap", mode)}
						>
							{t("CardDetailed.checkOnMap")}
							<span className={cx("checkOnMap__arrow", mode)}>
								→
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
