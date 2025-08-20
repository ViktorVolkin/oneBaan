import { Option } from "./CustomSelect.types";
export interface SellApartmentsCatalogProps {
	breadcrumbs?: { label: string; href: string }[];
	title: string;
	mainSortsIcons?: {
		iconPath: string;
		iconQueryName: string;
		iconQueryValue: string;
		nameForIconsPhone: string;
	}[];
	isRentPage?: boolean;
	optionsLocation: Option[];
	optionsTypesOfProperty: Option[];
	optionsBaths: Option[];
	optionsBedrooms: Option[];
	optionsMinPrice: Option[];
	optionsMaxPrice: Option[];
	optionsSortBy: Option[];
	optionsPriceForPhoneMode: Option[];
}

export type FiltersState = {
	location: string;
	typeOfProperty: string;
	amountOfBaths: string;
	amountOfBedrooms: string;
	price: { minPrice: string; maxPrice: string };
	sortBy: string;
};
