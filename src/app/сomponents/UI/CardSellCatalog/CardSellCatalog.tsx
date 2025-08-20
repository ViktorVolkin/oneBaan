"use client";
import styles from "./CardSellCatalog.module.css";
import ApartmentImageSwiper from "../ApartmentImageSwiper";
import IconRow from "../IconRow";
import CardTags from "../CardTags";
import Like from "@/../public/like.svg?component";
import Liked from "@/../public/liked.svg?component";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { useTranslations } from "next-intl";
import { useOfferLike } from "@/app/сustomHooks/useOfferLike";
import { Link } from "@/i18n/navigation";

export const CardSellCatalog = (props: ListingCardBase) => {
	const t = useTranslations();
	const { liked, toggle } = useOfferLike(props.idOfCard, props.isLiked);
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
				<ApartmentImageSwiper images={props.apartmentImages.images} />

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
				className={`${styles.card__info} ${
					props.isRentCard ? styles.rent__card__info : ""
				}`}
			>
				<div className={styles.card__main_info}>
					<div
						className={`${styles.card__header} ${
							props.isRentCard ? styles.card__rent__header : ""
						}`}
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
								props.isRentCard ? styles.rent__card__price : ""
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
							props.isRentCard ? styles.rent__card__details : ""
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
									<Link href={crumb.href}>{crumb.label}</Link>
									{index < breadcrumbs.length - 1 && (
										<span
											className={styles.card__separator}
										>
											→
										</span>
									)}
								</span>
							))}
						</nav>
					)}
				</div>

				<IconRow {...props.iconRow} />
				{!props.isRentCard && <CardTags tags={props.tags} />}
			</div>

			<div
				className={`${
					props.isRentCard
						? styles.rent__contacts__buttons__container
						: styles.contacts__buttons_container
				}`}
			>
				<a
					className={`${styles.contacts__button} ${
						props.isRentCard ? styles.rent_contacts__button : ""
					}`}
					href={props.contactWithSalesman.path}
				>
					{t("cards.talkToSalesman")}
				</a>

				<a
					href={props.contactWhatsApp.path}
					className={`${styles.contacts__button_whatsapp} ${
						props.isRentCard
							? styles.rent_contacts__button_whatsapp
							: ""
					}`}
				>
					{props.isRentCard && (
						<img
							src="/whatsapp.svg"
							alt=""
							className={styles.desktop__contacts__icon}
						/>
					)}
					WhatsApp
				</a>

				{props.isRentCard && (
					<a
						href={props.contactWhatsApp.path}
						className={styles.rent__contacts__button_whatsappTablet}
					>
						<img
							src="/whatsapp.svg"
							alt=""
							className={styles.rent__contacts__icon}
						/>
					</a>
				)}
			</div>
		</div>
	);
};
