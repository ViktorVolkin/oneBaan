"use client";
import { useTranslations } from "next-intl";
import styles from "./SimilarOffersRentCard.module.css";
import type { SimilarCard } from "@/app/types/similarOffers.types";
import { Link, useRouter } from "@/i18n/navigation";
import IconRow from "@/app/components/UI/IconRow";
import CardButtons from "@/app/components/UI/CardButtons";
import ComplexCardsMinPrices from "../ComplexCardsMinPrices";

export function SimilarOffersRentCard(props: SimilarCard) {
	const router = useRouter();
	const t = useTranslations();
	const isComplex = props.mode === "Complex";

	const handleCardClick = () => {
		router.push(`${props.cardsBasePath}/${props.idOfCard}`);
	};

	const statsIcons =
		props.mode === "Rent"
			? [
					{
						iconPath: "/BiBed.svg",
						value: props.stats.amountOfBeds ?? "-",
					},
					{
						iconPath: "/BiBath.svg",
						value: props.stats.amountOfBaths ?? "-",
					},
					{
						iconPath: "/BiBorderOuter.svg",
						value: props.stats.area ?? "-",
					},
			  ]
			: [
					{ iconPath: "/BiBed.svg", value: "-" },
					{ iconPath: "/BiBath.svg", value: "-" },
					{ iconPath: "/BiBorderOuter.svg", value: "-" },
			  ];

	return (
		<div
			className={
				isComplex
					? styles.similarOffersComplexCard__container
					: styles.similarOffersRentCard__container
			}
		>
			<img
				src={props.mainImage}
				alt=""
				className={isComplex ? styles.imageComplex : styles.image}
			/>

			<div
				className={
					isComplex
						? styles.cardComplex__content
						: styles.card__content
				}
				onClick={handleCardClick}
			>
				<div
					className={
						isComplex
							? styles.info__containerComplex
							: styles.info__container
					}
				>
					<h4
						className={
							isComplex
								? styles.card__titleComplex
								: styles.card__title
						}
					>
						{props.cardDescription}
					</h4>

					{!isComplex && (
						<p className={styles.card__price}>
							{props.price}
							{t("cards.perMonth")}
						</p>
					)}

					<p
						className={
							isComplex
								? styles.card__detailComplex
								: styles.card__detail
						}
					>
						{props.details}
					</p>

					{props.breadcrumbs?.length > 0 && (
						<nav
							className={styles.card__breadcrumbs}
							onClick={(e) => e.stopPropagation()}
						>
							{props.breadcrumbs.map((crumb, index) => (
								<span key={index}>
									<Link href={crumb.href}>{crumb.label}</Link>
									{index < props.breadcrumbs.length - 1 && (
										<span
											className={styles.card__separator}
										>
											-
										</span>
									)}
								</span>
							))}
						</nav>
					)}

					{!isComplex && (
						<>
							<div className={styles.iconRowPhone}>
								<IconRow
									icons={statsIcons}
									sizeForIconsinRow="sm"
								/>
							</div>
							<div className={styles.iconRowTablet}>
								<IconRow
									icons={statsIcons}
									sizeForIconsinRow="md"
								/>
							</div>
						</>
					)}
				</div>
				{isComplex && (
					<div className={styles.cards__container}>
						<ComplexCardsMinPrices
							cards={[
								{
									type: t("complex.forSale"),
									priceStartsFrom: `${t(
										"complex.fromPrice"
									)}${props.complexMinPrices.sell.minPrice}`,
									amountOfApartments: t(
										"complex.amountOfApartments",
										{
											count: props.complexMinPrices.sell
												.amountOfApartments,
										}
									),
								},
								{
									type: t("complex.forRent"),
									priceStartsFrom: `${t(
										"complex.fromPrice"
									)}${
										props.complexMinPrices.rent.minPrice
									}${t("cards.perMonth")}`,
									amountOfApartments: t(
										"complex.amountOfApartments",
										{
											count: props.complexMinPrices.rent
												.amountOfApartments,
										}
									),
								},
							]}
							size="sm"
						/>
					</div>
				)}
				<div
					className={
						isComplex
							? styles.button__containerComplex
							: styles.button__container
					}
					onClick={(e) => e.stopPropagation()}
				>
					<CardButtons
						displayWhatsAppIconWithText={false}
						rentDetailedPhoneIconMode={true}
						displayPhoneWithoutText={false}
						contactSalesmanHref={props.phoneHref}
						contactSalesmanWhatsAppHref={props.whatsAppHref}
					/>
				</div>
			</div>
		</div>
	);
}
