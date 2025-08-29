"use client";
import styles from "./CardSellCatalog.module.css";
import ApartmentImageSwiper from "../ApartmentImageSwiper";
import IconRow from "../IconRow";
import CardTags from "../CardTags";
import Like from "@/../public/like.svg?component";
import Liked from "@/../public/liked.svg?component";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { useTranslations } from "next-intl";
import { useOfferLike } from "@/app/customHooks/useOfferLike";
import { Link } from "@/i18n/navigation";
import CardButtons from "../CardButtons";
interface additionalProps {
	mainImage?: string;
	displayPhoneWithoutText?: boolean;
	displayWhatsAppIconWithText?: boolean;
	classNameButtonContainer: string;
	whatsAppBgColor?: string;
	whatsAppTextColor?: string;
	contactsBgColor?: string;
	contactsTextColor?: string;
	rentDetailedPhoneIconMode?: boolean;
	reserveHeightForSecondLine?: boolean;
}
export const CardSellCatalog = (props: ListingCardBase & additionalProps) => {
	let displayPhoneWithoutText = props.displayPhoneWithoutText ?? false;
	let displayWhatsAppIconWithText =
		props.displayWhatsAppIconWithText ?? false;
	let reserveHeightForSecondLine = props.reserveHeightForSecondLine ?? true;
	const t = useTranslations();
	const { liked, toggle } = useOfferLike(props.idOfCard, false);
	const WhichHeartToDisplay = liked ? Liked : Like;
	const breadcrumbs = props.breadcrumbs;

	return (
		<div
			className={`${styles.card__wrapper} ${
				props.isRentCard ? styles.rent__card__wrapper : ""
			}`}
		>
			<div
				className={`${styles.card__images} ${
					props.isRentCard ? styles.rent__card__images : ""
				}`}
			>
				{!props.mainImage ? (
					<ApartmentImageSwiper
						images={props.apartmentImages.images}
					/>
				) : (
					<img
						src={props.mainImage}
						alt=""
						className={styles.mainImage}
					/>
				)}

				<button
					className={styles.card__like_icon}
					onClick={toggle}
					aria-pressed={liked}
					aria-label={
						liked ? t("cards.removeFromFav") : t("cards.addToFav")
					}
				>
					<WhichHeartToDisplay
						className={styles.card__interaction_icon}
					/>
				</button>

				<button className={styles.card__agent_icon}>
					<img
						src={props.agentLogo}
						alt="agent-logo"
						className={styles.card__interaction_icon}
					/>
				</button>
			</div>

			<div
				className={
					props.isRentCard
						? styles.card__content__rent
						: styles.card__content
				}
			>
				<div
					className={`${styles.card__info} ${
						props.isRentCard ? styles.rent__card__info : ""
					}`}
				>
					<div className={styles.card__main_info}>
						<div
							className={`${styles.card__header} ${
								props.isRentCard
									? styles.card__rent__header
									: ""
							}`}
							style={{
								height: !props.reserveHeightForSecondLine
									? "min-content"
									: "",
							}}
						>
							<h3 className={styles.card__description}>
								{props.cardDescription}
							</h3>

							{props.whenPosted && (
								<span className={styles.card__date}>
									{props.whenPosted}
								</span>
							)}
						</div>

						<div>
							<h4
								className={`${styles.card__price} ${
									props.isRentCard
										? styles.rent__card__price
										: ""
								}`}
							>
								{props.price}
								{props.isRentCard ? t("cards.perMonth") : ""}
							</h4>

							{!props.isRentCard && (
								<span className={styles.card__price_per_meter}>
									{props.pricePerMeter}
								</span>
							)}
						</div>

						<p
							className={`${styles.card__details} ${
								props.isRentCard
									? styles.rent__card__details
									: ""
							}`}
						>
							{props.details}
						</p>

						{breadcrumbs && breadcrumbs.length > 0 && (
							<nav
								className={`${styles.card__breadcrumbs} ${
									props.isRentCard
										? styles.rent__card__breadcrumbs
										: ""
								}`}
							>
								<img
									src="/adress.svg"
									alt="path"
									className={styles.breadcrumbs__icon}
								/>
								{breadcrumbs.map((crumb, index) => (
									<span key={index}>
										<Link href={crumb.href}>
											{crumb.label}
										</Link>
										{index < breadcrumbs.length - 1 && (
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

					{(() => {
						const statsIcons: {
							iconPath: string;
							value: string | number;
						}[] = [
							...(props.stats?.amountOfBeds !== undefined
								? [
										{
											iconPath: "/BiBed.svg",
											value: props.stats.amountOfBeds,
										},
								  ]
								: []),
							...(props.stats?.amountOfBaths !== undefined
								? [
										{
											iconPath: "/BiBath.svg",
											value: props.stats.amountOfBaths,
										},
								  ]
								: []),
							...(props.stats?.area !== undefined
								? [
										{
											iconPath: "/BiBorderOuter.svg",
											value: props.stats.area,
										},
								  ]
								: []),
						];
						return (
							<IconRow
								icons={statsIcons}
								sizeForIconsinRow="md"
							/>
						);
					})()}
					{!props.isRentCard && (
						<CardTags tags={props.tags} gapBetweenTags="2px" />
					)}
				</div>
				<div className={props.classNameButtonContainer}>
					<CardButtons
						contactSalesmanHref={
							props.contactWithSalesman.path ?? ""
						}
						contactSalesmanWhatsAppHref={
							props.contactWhatsApp.path ?? ""
						}
						displayWhatsAppIconWithText={
							displayWhatsAppIconWithText || props.isRentCard
						}
						displayPhoneWithoutText={displayPhoneWithoutText}
						whatsAppBgColor={props.whatsAppBgColor}
						whatsAppTextColor={props.whatsAppTextColor}
						contactsBgColor={props.contactsBgColor}
						contactsTextColor={props.contactsTextColor}
					/>
				</div>
			</div>
		</div>
	);
};
