"use client";
import styles from "./MoreOffersFromThisComplexCard.module.css";
import IconRow from "../IconRow";
import ApartmentImageSwiper from "../ApartmentImageSwiper";
import type { ListingCardBase } from "@/app/types/LargeCardHorizontalSellCatalog.types";
import { useOfferLike } from "@/app/customHooks/useOfferLike";
import { useTranslations } from "next-intl";
import CardSellCatalog from "../CardSellCatalog";
import { useRouter } from "@/i18n/navigation";
type MoreOffersFromThisComplexCardProps = Omit<
	ListingCardBase,
	"isRentCard"
> & {
	mode: "Rent" | "Sell" | "Complex";
	cardsBasePath: string;
};
export const MoreOffersFromThisComplexCard = (
	props: MoreOffersFromThisComplexCardProps
) => {
	const t = useTranslations();
	const { toggle, liked } = useOfferLike(props.idOfCard, false);
	const router = useRouter();
	const isRentCard = props.mode === "Rent" || props.mode === "Complex";
	const handleCardClick = () => {
		router.push(`${props.cardsBasePath}/${props.idOfCard}`);
	};
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
					isRentCard
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

				<div
					className={styles.data__container}
					onClick={handleCardClick}
				>
					<div className={styles.card__info}>
						<div>
							<div className={styles.card__price_container}>
								<h4 className={styles.card__price}>
									{props.price}
									{isRentCard
										? ` ${t("cards.perMonth")}`
										: ""}
								</h4>
								{props.pricePerMeter &&
									props.mode === "Complex" && (
										<p className={styles.subPrice}>
											{props.pricePerMeter}
										</p>
									)}
							</div>
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

					<div
						className={styles.icons__container}
						onClick={(e) => e.stopPropagation()}
					>
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
			{props.mode === "Sell" && (
				<div
					className={
						isRentCard ? styles.hidden : styles.SellCardWrapper
					}
				>
					<CardSellCatalog
						classNameButtonContainer={styles.buttonContainer}
						{...props}
						displayPhoneWithoutText={true}
						whatsAppBgColor="#C6F6D5"
						whatsAppTextColor="#25855A"
						reserveHeightForSecondLine={false}
						isRentCard={false}
					/>
				</div>
			)}
		</>
	);
};
