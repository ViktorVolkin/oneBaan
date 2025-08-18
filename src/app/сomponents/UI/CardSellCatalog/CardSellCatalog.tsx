"use client";
import { useState } from "react";
import styles from "./CardSellCatalog.module.css";
import ApartmentImageSwiper from "../ApartmentImageSwiper";
import IconRow from "../IconRow";
import CardTags from "../CardTags";
import Like from "@/../public/like.svg?component";
import Liked from "@/../public/liked.svg?component";

import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { useTranslations } from "next-intl";
import { useOfferLike } from "@/app/сustomHooks/useOfferLike";

export const CardSellCatalog = (props: ListingCardBase) => {
	const t = useTranslations();
	const { liked, toggle } = useOfferLike(props.idOfCard, props.isLiked);
	const WhichHeartToDisplay = liked ? Liked : Like;
	const breadcrumbs = props.breadcrumbs;

	return (
		<div className={styles.card__wrapper}>
			<div className={styles.card__images}>
				<ApartmentImageSwiper images={props.apartmentImages.images} />
				<button
					className={`${styles.card__like_icon} ${
						liked ? styles.liked : ""
					}`}
					onClick={toggle}
					aria-pressed={liked}
					aria-label={
						liked ? t("cards.removeFromFav") : t("cards.addToFav")
					}
				>
					<WhichHeartToDisplay
						className={`${styles.card__interaction_icon} ${
							liked ? styles.liked : ""
						}`}
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

			<div className={styles.card__info}>
				<div className={styles.card__main_info}>
					<div>
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
						<h4 className={styles.card__price}>{props.price}</h4>
						<span className={styles.card__price_per_meter}>
							{props.pricePerMeter}
						</span>
					</div>

					<p className={styles.card__details}>{props.details}</p>

					{breadcrumbs && breadcrumbs.length > 0 && (
						<nav className={styles.card__breadcrumbs}>
							<img
								src="/adress.svg"
								alt="path"
								className={styles.breadcrumbs__icon}
							/>
							{breadcrumbs.map((crumb, index) => (
								<span key={index}>
									<a href={crumb.href}>{crumb.label}</a>
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
				<CardTags tags={props.tags} />
			</div>

			<div className={styles.contacts__buttons_container}>
				<a
					className={styles.contacts__button}
					href={props.contactWithSalesman.path}
				>
					{t("сards.talkToSalesman")}
				</a>
				<a
					href={props.contactWhatsApp.path}
					className={styles.contacts__button_whatsapp}
				>
					WhatsApp
				</a>
			</div>
		</div>
	);
};
