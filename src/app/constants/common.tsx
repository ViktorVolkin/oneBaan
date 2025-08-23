import { BurgerOption } from "../types/Header.types";
import Check from "@/../public/BiCheckCircle.svg?component";
import Logo from "@/../public/logoSmall.svg?component";
import BenificialPrice from "@/../public/BiDollar.svg?component";
import WithFurniture from "@/../public/MdOutlineChair.svg?component";

import BiCar from "@/../public/iconTags/BiCar.svg?component";
import BiCctv from "@/../public/iconTags/BiCctv.svg?component";
import BiCheckShield from "@/../public/iconTags/BiCheckShield.svg?component";
import BiKey from "@/../public/iconTags/BiKey.svg?component";
import BiLandscape from "@/../public/iconTags/BiLandscape.svg?component";
import BiLaptop from "@/../public/iconTags/BiLaptop.svg?component";
import BiLock from "@/../public/iconTags/BiLock.svg?component";
import BiRestaurant from "@/../public/iconTags/BiRestaurant.svg?component";
import BiShield from "@/../public/iconTags/BiShield.svg?component";
import BiSwim from "@/../public/iconTags/BiSwim.svg?component";
import MdChildCare from "@/../public/iconTags/MdChildCare.svg?component";
import MdFitnessCenter from "@/../public/iconTags/MdFitnessCenter.svg?component";
import MdHowToReg from "@/../public/iconTags/MdHowToReg.svg?component";
import MdOutlineBusiness from "@/../public/iconTags/MdOutlineBusiness.svg?component";
import MdOutlineGrass from "@/../public/iconTags/MdOutlineGrass.svg?component";

export const NAVIGATION_CONSTANTS = {
	BURGER_OPTIONS: [
		{ leadsTo: "/", text: "header.home" },
		{ leadsTo: "/catalog", text: "header.catalog" },
		{ leadsTo: "/sell", text: "header.sell" },
		{ leadsTo: "/agents", text: "header.agents" },
	] as BurgerOption[],

	FOOTER_LINKS: [
		{ text: "nav.home", leadsTo: "/" },
		{ text: "nav.sell", leadsTo: "/sell" },
		{ text: "nav.rent", leadsTo: "/catalog/rent" },
		{ text: "nav.compare", leadsTo: "/compare" },
		{ text: "nav.favourites", leadsTo: "/favourites" },
	],
};

export const CURRENCY_CONSTANTS = {
	TYPES: ["THB", "RUB", "USD", "EUR"] as const,
};

export const API_CONSTANTS = {
	EMAIL_REGEX:
		/^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
} as const;

export const CATALOG_FILTER_OPTIONS_DEFAULT = {
	optionsLocation: [
		{ label: "locations.phuket", value: "phuket" },
		{ label: "locations.bangkok", value: "bangkok" },
		{ label: "locations.pattaya", value: "pattaya" },
		{ label: "locations.samui", value: "samui" },
		{ label: "locations.Phang_Nga", value: "phang-nga" },
	],

	optionsTypesOfProperty: [
		{ label: "typesofProperty.apartments", value: "apartment" },
		{ label: "typesofProperty.villa", value: "villa" },
		{ label: "typesofProperty.house", value: "house" },
		{ label: "typesofProperty.townhouse", value: "townhouse" },
		{ label: "typesofProperty.condo", value: "condo" },
		{ label: "typesofProperty.studio", value: "studio" },
	],

	optionsBaths: [
		{ label: "1", value: "1" },
		{ label: "2", value: "2" },
		{ label: "3", value: "3" },
		{ label: "4+", value: "4plus" },
	],

	optionsBedrooms: [
		{ label: "typesOfProperty.studio", value: "0" },
		{ label: "1", value: "1" },
		{ label: "2", value: "2" },
		{ label: "3", value: "3" },
		{ label: "4+", value: "4plus" },
	],

	optionsMinPrice: [
		{ label: "≥ 2M", value: "2000000" },
		{ label: "≥ 3M", value: "3000000" },
		{ label: "≥ 4M", value: "4000000" },
		{ label: "≥ 6M", value: "6000000" },
		{ label: "≥ 8M", value: "8000000" },
		{ label: "≥ 10M", value: "10000000" },
		{ label: "≥ 15M", value: "15000000" },
		{ label: "≥ 20M", value: "20000000" },
	],
	optionsMaxPrice: [
		{ label: "≤ 5M", value: "5000000" },
		{ label: "≤ 7M", value: "7000000" },
		{ label: "≤ 10M", value: "10000000" },
		{ label: "≤ 15M", value: "15000000" },
		{ label: "≤ 20M", value: "20000000" },
		{ label: "≤ 30M", value: "30000000" },
		{ label: "≤ 50M", value: "50000000" },
		{ label: "≤ 100M", value: "100000000" },
	],
	optionsMinAndMaxPriceForPhoneMode: [
		{ label: "2M-5M", value: "2000000-5000000" },
		{ label: "3M-7M", value: "3000000-7000000" },
		{ label: "4M-10M", value: "4000000-10000000" },
		{ label: "6M-15M", value: "6000000-15000000" },
		{ label: "8M-20M", value: "8000000-20000000" },
		{ label: "10-30M", value: "10000000-30000000" },
		{ label: "15-50M", value: "15000000-50000000" },
		{ label: "20-100M", value: "20000000-100000000" },
	],
	optionsSortBy: [
		{ label: "sortBy.newest", value: "newest" },
		{ label: "sortBy.oldest", value: "oldest" },
		{ label: "sortBy.recommended", value: "recommended" },
		{ label: "sortBy.popular", value: "popular" },
	],
};

export const TAG_CODES_CONSTANT = {
	object_verified: Check,
	only_on_oneBaan: Logo,
	beneficial_price: BenificialPrice,
	with_furniture: WithFurniture,
	with_parking: BiCar,
	ready_for_rent: BiKey,
	form_of_ownership: MdOutlineBusiness,
	guards: BiShield,
	view_on_mountains: BiLandscape,
	with_pool: BiSwim,
	with_gym: MdFitnessCenter,
	with_child_club: MdChildCare,
	reception: MdHowToReg,
	with_cameras: BiCctv,
	guarded_whole_day: BiCheckShield,
	with_coworking: BiLaptop,
	access_by_card: BiLock,
	with_restaurant: BiRestaurant,
	with_garden: MdOutlineGrass,
};
