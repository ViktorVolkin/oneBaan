"use client";
import styles from "./MoreOffersFromThisComplexCard.module.css";
import IconRow from "../IconRow";
import ApartmentImageSwiper from "../ApartmentImageSwiper";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { useOfferLike } from "@/app/сustomHooks/useOfferLike";
import { useTranslations } from "next-intl";
import CardSellCatalog from "../CardSellCatalog";

export const MoreOffersFromThisComplexCard = (props: ListingCardBase) => {
	const t = useTranslations();
	const { toggle, liked } = useOfferLike(props.idOfCard, false);
	const statsIcons = [
		{
			iconPath: "/BiBed.svg",
			value: props.stats?.amountOfBeds ?? "-",
		},
		{
			iconPath: "/BiBath.svg",
			value: props.stats?.amountOfBaths ?? "-",
		},
		{
			iconPath: "/BiBorderOuter.svg",
			value: props.stats?.area ?? "-",
		},
	];
	return (
		<>
			<div
				className={`${
					props.isRentCard
						? styles.card__container
						: styles.card__container__sell
				}`}
			>
				<div className={styles.card__image}>
					<ApartmentImageSwiper
						images={props.apartmentImages.images}
						className={styles.card__image}
					/>
				</div>

				<div className={styles.data__container}>
					<div className={styles.card__info}>
						<div>
							<h4 className={styles.card__price}>
								{props.price}
								{props.isRentCard
									? ` ${t("cards.perMonth")}`
									: ""}
							</h4>

							{props.pricePerMeter && !props.isRentCard && (
								<p className={styles.card__price_per_meter}>
									{props.pricePerMeter}
								</p>
							)}
						</div>

						<div className={styles.offer__conditions}>
							<>
								<IconRow
									icons={statsIcons}
									sizeForIconsinRow="sm"
									className={styles.IconRowPhone}
								/>
								<IconRow
									icons={statsIcons}
									sizeForIconsinRow="md"
									className={styles.IconRow}
								/>
							</>
							<span className={styles.card__details}>
								{props.details}
							</span>
						</div>
					</div>

					<div className={styles.icons__container}>
						<button
							onClick={toggle}
							className={styles.icon__container}
						>
							<img
								src={liked ? "/liked.svg" : "/like.svg"}
								alt="like"
								className={styles.icon}
							/>
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
										.catch(() => void 0);
								} else {
									console.warn(
										"Sharing not supported by this browser."
									);
								}
							}}
							className={styles.icon__container}
						>
							<img
								src="/BiShareAlt.svg"
								alt="share"
								className={styles.icon}
							/>
						</button>

						<button className={styles.icon__container}>
							<img
								src={props.agentLogo}
								alt="agent"
								className={styles.icon}
							/>
						</button>
					</div>
				</div>
			</div>
			{!props.isRentCard && (
				<div className={styles.SellCardWrapper}>
					<CardSellCatalog {...props} displayPhoneIcon={true} />
				</div>
			)}
		</>
	);
};
