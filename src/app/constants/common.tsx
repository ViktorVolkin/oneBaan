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
import { CardTagProps } from "../types/CardTags.types";
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
		{ label: "typesofProperty.studio", value: "0" },
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

export const TAG_CODES_CONSTANT: Record<string, CardTagProps> = {
	object_verified: {
		icon: Check,
		label: "tag.code.verified",
		bgColor: "#F0FFF4",
		borderColor: "#C6F6D5",
		textColor: "#38A169",
	},
	only_on_oneBaan: {
		icon: Logo,
		label: "tag.code.onlyOnOneBaan",
		bgColor: "#EBF8FF",
		borderColor: "#BEE3F8",
		textColor: "#2C5282",
	},
	beneficial_price: {
		icon: BenificialPrice,
		label: "tag.code.beneficialPrice",
		bgColor: "#FFFAF0",
		borderColor: "#FEEBCB",
		textColor: "#C05621",
	},
	with_furniture: {
		icon: WithFurniture,
		label: "tag.code.withFurniture",
		bgColor: "#71809614",
		borderColor: "#71809614",
		textColor: "#2D3748",
	},
	with_parking: {
		icon: BiCar,
		label: "tag.code.withParking",
	},
	ready_for_rent: {
		icon: BiKey,
		label: "tag.code.readyForRent",
	},
	form_of_ownership: {
		icon: MdOutlineBusiness,
		label: "tag.code.formOfOwnership",
	},
	guards: { icon: BiShield, label: "tag.code.guards" },
	view_on_mountains: {
		icon: BiLandscape,
		label: "tag.code.viewOnMountains",
	},
	with_pool: {
		icon: BiSwim,
		label: "tag.code.withPool",
	},
	with_gym: {
		icon: MdFitnessCenter,
		label: "tag.code.withGym",
	},
	with_child_club: {
		icon: MdChildCare,
		label: "tag.code.withChildClub",
	},
	reception: {
		icon: MdHowToReg,
		label: "tag.code.reception",
	},
	with_cameras: {
		icon: BiCctv,
		label: "tag.code.withCameras",
	},
	guarded_whole_day: {
		icon: BiCheckShield,
		label: "tag.code.guardedWholeDay",
	},
	with_coworking: {
		icon: BiLaptop,
		label: "tag.code.withCoworking",
	},
	access_by_card: {
		icon: BiLock,
		label: "tag.code.accessByCard",
	},
	with_restaurant: {
		icon: BiRestaurant,
		label: "tag.code.withRestaurant",
	},
	with_garden: {
		icon: MdOutlineGrass,
		label: "tag.code.withGarden",
	},
};
