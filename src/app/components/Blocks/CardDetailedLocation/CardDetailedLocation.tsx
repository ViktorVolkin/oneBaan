import { useTranslations } from "next-intl";
import styles from "./CardDetailedLocation.module.css";
import { Link } from "@/i18n/navigation";

interface CardDetailedLocationProps {
	image: string;
	countryName: string;
	breadcrumbs: { label: string; href: string }[];
	toLocationHref: string;
	isRent?: boolean;
}

export function CardDetailedLocation({
	image,
	countryName,
	breadcrumbs,
	toLocationHref,
	isRent = false,
}: CardDetailedLocationProps) {
	const t = useTranslations();

	return (
		<div
			className={
				isRent
					? styles.location__containerRent
					: styles.location__container
			}
		>
			<h4
				className={
					isRent ? styles.location__titleRent : styles.location__title
				}
			>
				{t("CardDetailed.location")}
			</h4>

			<div
				className={
					isRent
						? styles.location__details_rent
						: styles.location__details
				}
			>
				<img
					src={image}
					alt=""
					className={isRent ? styles.bgImageRent : styles.bgImage}
				/>

				<div
					className={
						isRent
							? styles.location__data_containerRent
							: styles.location__data_container
					}
				>
					<div
						className={
							isRent
								? styles.location__text_containerRent
								: styles.location__text_container
						}
					>
						<div
							className={
								isRent
									? styles.location__data__wrapperRent
									: styles.location__data__wrapper
							}
						>
							<img
								src="/adress.svg"
								alt=""
								className={
									isRent
										? styles.location__iconRent
										: styles.location__icon
								}
							/>
							{isRent && (
								<button className={styles.mapIconButton}>
									<img
										src="/footer__adress.svg"
										alt=""
										className={styles.mapIconForTablet}
									/>
								</button>
							)}

							<div
								className={
									isRent
										? styles.location__dataRent
										: styles.location__data
								}
							>
								<p
									className={
										isRent
											? styles.location__countryRent
											: styles.location__country
									}
								>
									{countryName}
								</p>

								{breadcrumbs && breadcrumbs.length > 0 && (
									<nav
										className={
											isRent
												? styles.card__breadcrumbsRent
												: styles.card__breadcrumbs
										}
									>
										{breadcrumbs.map((crumb, index) => (
											<span key={index}>
												<Link href={crumb.href}>
													{crumb.label}
												</Link>
												{index <
													breadcrumbs.length - 1 && (
													<span
														className={
															isRent
																? styles.card__separatorRent
																: styles.card__separator
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
							className={
								isRent
									? styles.checkOnMapRent
									: styles.checkOnMap
							}
						>
							{t("CardDetailed.checkOnMap")}
							<span
								className={
									isRent
										? styles.checkOnMap__arrowRent
										: styles.checkOnMap__arrow
								}
							>
								→
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
