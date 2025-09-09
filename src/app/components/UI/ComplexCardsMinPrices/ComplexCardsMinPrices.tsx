import { useTranslations } from "next-intl";
import styles from "./ComplexCardsMinPrices.module.css";

export interface ComplexCardsMinPricesProps {
	size: "sm" | "md";
	cards: Array<{
		type: string;
		priceStartsFrom: string;
		amountOfApartments: string;
	}>;
}

export function ComplexCardsMinPrices({
	size,
	cards,
}: ComplexCardsMinPricesProps) {
	return (
		<div
			className={`${styles.cards__container} ${
				styles[`cards__container__${size}`]
			}`}
		>
			{cards.map((card, index) => (
				<div
					className={`${styles.card} ${styles[`card__${size}`]}`}
					key={`${index}-${card.type}`}
				>
					<div
						className={`${styles.card__header} ${
							styles[`card__header__${size}`]
						}`}
					>
						<p
							className={`${styles.card__type} ${
								styles[`card__type__${size}`]
							}`}
						>
							{card.type}
						</p>
						<p
							className={`${styles.card__apartments} ${
								styles[`card__apartments__${size}`]
							}`}
						>
							{card.amountOfApartments}
						</p>
					</div>
					<p
						className={`${styles.card__price} ${
							styles[`card__price__${size}`]
						}`}
					>
						{card.priceStartsFrom}
					</p>
				</div>
			))}
		</div>
	);
}
