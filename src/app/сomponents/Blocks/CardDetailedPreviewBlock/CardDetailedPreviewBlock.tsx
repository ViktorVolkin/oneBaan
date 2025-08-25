"use client";
import styles from "./CardDetailedPreviewBlock.module.css";
import ApartmentImageSwiper from "../../UI/ApartmentImageSwiper";
import { useOfferLike } from "@/app/сustomHooks/useOfferLike";
import { readIds } from "@/app/сustomHooks/useOfferLike";
import GoBackButton from "../../UI/buttonGoBack/buttonGoBack";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

import type { CardDetailedProps } from "@/app/types/CardDetailed.types";
type CardDetailedPreviewBlockProps = Pick<
	CardDetailedProps,
	"images" | "offerId" | "isRent"
> & {
	amountOfLikes?: number;
	className?: string;
};

export default function CardDetailedPreviewBlock({
	images,
	amountOfLikes,
	offerId,
	className,
	isRent,
}: CardDetailedPreviewBlockProps) {
	const isLikedInit = useMemo(
		() => readIds("favourites:ids").includes(offerId.toString()),
		[offerId]
	);
	const { liked, toggle } = useOfferLike(offerId, isLikedInit);
	const t = useTranslations();

	return (
		<div
			className={`${
				isRent
					? styles.rent__previewBlock__container
					: styles.sell__previewBlock__container
			} ${className || ""}`}
		>
			<ApartmentImageSwiper
				images={images}
				className={`${styles.previewBlock__swiper} ${
					!isRent && images.length > 5
						? styles.sellSwiperDisplayed
						: ""
				}`}
				withArrows={isRent}
			/>

			{!isRent && images.length <= 5 && (
				<div
					className={styles.desktopImages}
					data-count={images.length}
				>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Apartment image ${index + 1}`}
							className={`${styles.desktopImage} ${
								index === 0 ? styles.heroImage : ""
							}`}
						/>
					))}
				</div>
			)}

			<div className={styles.previewBlock__interaction}>
				<div className={styles.goBackButtonContainer}>
					<GoBackButton
						className={styles.goBackButton}
						imgClassName={styles.goBackImage}
						text={!isRent ? t("textGoBack") : ""}
					/>
				</div>

				<img src="/logoForCards.svg" alt="" className={styles.logo} />

				<div className={styles.interactions}>
					{!isRent && (
						<div
							className={styles.likeButtonContainer}
							onClick={toggle}
						>
							<button className={styles.likeButton}>
								<img
									src={liked ? "/liked.svg" : "/BiHeart.svg"}
									alt={
										liked
											? "remove from favourites"
											: "add to favourites"
									}
									className={styles.likeIcon}
								/>
							</button>
							{amountOfLikes &&
								!isNaN(amountOfLikes) &&
								liked && (
									<span className={styles.amountOfLikes}>
										{amountOfLikes}
									</span>
								)}
						</div>
					)}

					<button
						className={styles.shareButton}
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
					>
						<img
							src="/BiShareAlt.svg"
							alt="share"
							className={
								!isRent
									? styles.shareIcon__sell
									: styles.shareIcon__rent
							}
						/>
					</button>
				</div>
			</div>
			<div
				className={
					isRent
						? styles.rentDesktopblockDescription
						: styles.sellDesktopblockDescription
				}
			>
				<p
					className={
						isRent
							? styles.rentDesktopblockDescriptionText
							: styles.sellBlockDescriptionText
					}
				>
					{isRent && <img src="/photoChip.svg" alt="" />}
					{t("CardDetailed.blueprint")}
				</p>
			</div>
		</div>
	);
}
