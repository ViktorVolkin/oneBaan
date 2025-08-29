"use client";
import styles from "./LargeCardHorizontalSellCatalog.module.css";
import ApartmentImageSwiper from "../ApartmentImageSwiper";
import IconRow from "../IconRow";
import CardTags from "../CardTags";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { useTranslations } from "next-intl";
import Like from "@/../public/like.svg?component";
import Liked from "@/../public/liked.svg?component";
import { readIds, useOfferLike } from "@/app/customHooks/useOfferLike";
import { useMemo } from "react";
export const LargeCardHorizontalSellCatalog = (props: ListingCardBase) => {
	const t = useTranslations();

	const { liked, toggle } = useOfferLike(props.idOfCard, false);
	const WhichIconToDisplay = liked ? Liked : Like;
	const icons = [
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
		<div className={styles.card__container}>
			<div className={styles.card__image}>
				<ApartmentImageSwiper {...props.apartmentImages} />
			</div>

			<div className={styles.card__content_container}>
				<div className={styles.content__without_contacts}>
					<div className={styles.card__content}>
						<h3 className={styles.card__description}>
							{props.cardDescription}
						</h3>
						<div className={styles.col}>
							<div>
								<h4 className={styles.card__price}>
									{props.price}
									{props.isRentCard
										? t("cards.perMonth")
										: ""}
								</h4>
								<span className={styles.card__price_per_meter}>
									{props.pricePerMeter}
								</span>
							</div>
							<p className={styles.card__details}>
								{props.details}
							</p>
						</div>

						<IconRow icons={icons} sizeForIconsinRow="lg" />
						<CardTags tags={props.tags} />
					</div>

					<div className={styles.card__interaction}>
						<button
							onClick={toggle}
							className={`${styles.icon__container} ${
								liked ? styles.isLiked : ""
							}`}
							aria-pressed={liked}
							aria-label={
								liked
									? t("cards.removeFromFav")
									: t("cards.addToFav")
							}
						>
							<WhichIconToDisplay className={styles.icon} />
						</button>

						<button
							onClick={() => {
								if (navigator.share) {
									navigator
										.share({
											title: "Property Listing",
											text: "Check out this property",
											url: window.location.href,
										})
										.catch(console.error);
								}
							}}
							className={styles.icon__container}
						>
							<img
								src="/share.svg"
								alt="share"
								className={styles.icon}
							/>
						</button>

						<button className={styles.icon__container}>
							<img
								src={props.agentLogo}
								alt="author"
								className={styles.icon}
							/>
						</button>
					</div>
				</div>

				<div className={styles.card__contacts}>
					<button className={styles.contact__with_salesman}>
						<a href={props.contactWithSalesman.path}>
							{t("cards.talkToSalesman")}
						</a>
					</button>
					<button className={styles.contact__whatsapp}>
						<a href={props.contactWhatsApp.path}>WhatsApp</a>
					</button>
				</div>
			</div>
		</div>
	);
};
