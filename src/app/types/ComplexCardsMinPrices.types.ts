export interface ComplexCardsMinPricesProps {
	size: "sm" | "md";
	cards: Array<{
		type: string;
		priceStartsFrom: string;
		amountOfApartments: string;
	}>;
}
