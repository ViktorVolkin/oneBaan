import { routing } from "@/i18n/routing";
export type SupportedLngs = (typeof routing.locales)[number];

export type BurgerOption = {
	leadsTo: string;
	text: string;
};

export type HeaderProps = {
	burgerOptions?: BurgerOption[];
	typesOfCurrency?: readonly string[];
	handleLanguageChange?: (item: SupportedLngs) => void;
};

export type HeaderModesProps = {
	burgerOptions: BurgerOption[];
	typesOfCurrency: readonly string[];
	handleLanguageChange: (item: SupportedLngs) => void;
	locale?: string;
};
