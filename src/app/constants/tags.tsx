import BiBath from "../../../public/iconTags/BiBath.svg?component";
import BiBusSchool from "../../../public/iconTags/BiBusSchool.svg?component";
import BiCabinet from "../../../public/iconTags/BiCabinet.svg?component";
import BiCar from "../../../public/iconTags/BiCar.svg?component";
import BiCard from "../../../public/iconTags/BiCard.svg?component";
import BiCctv from "../../../public/iconTags/BiCctv.svg?component";
import BiCloset from "../../../public/iconTags/BiCloset.svg?component";
import BiDish from "../../../public/iconTags/BiDish.svg?component";
import BiDoorOpen from "../../../public/iconTags/BiDoorOpen.svg?component";
import BiDumbbell from "../../../public/iconTags/BiDumbbell.svg?component";
import BiKey from "../../../public/iconTags/BiKey.svg?component";
import BiLandscape from "../../../public/iconTags/BiLandscape.svg?component";
import BiLibrary from "../../../public/iconTags/BiLibrary.svg?component";
import BiMicrophone from "../../../public/iconTags/BiMicrophone.svg?component";
import BiShoppingBag from "../../../public/iconTags/BiShoppingBag.svg?component";
import BiSpa from "../../../public/iconTags/BiSpa.svg?component";
import BiSwim from "../../../public/iconTags/BiSwim.svg?component";
import BiUserVoice from "../../../public/iconTags/BiUserVoice.svg?component";
import BiWater from "../../../public/iconTags/BiWater.svg?component";
import BiWifi from "../../../public/iconTags/BiWifi.svg?component";
import LogoProject from "../../../public/iconTags/logo.svg?component";
import Logo from "../../../public/logoSmall.svg?component";
import MdAllOut from "../../../public/iconTags/MdAllOut.svg?component";
import MdChildCare from "../../../public/iconTags/MdChildCare.svg?component";
import MdEco from "../../../public/iconTags/MdEco.svg?component";
import MdElectricCar from "../../../public/iconTags/MdElectricCar.svg?component";
import MdGrass from "../../../public/iconTags/MdGrass.svg?component";
import MdLightbulbOutline from "../../../public/iconTags/MdLightbulbOutline.svg?component";
import MdLocalBar from "../../../public/iconTags/MdLocalBar.svg?component";
import MdOutlineBalcony from "../../../public/iconTags/MdOutlineBalcony.svg?component";
import MdOutlineBedroomParent from "../../../public/iconTags/MdOutlineBedroomParent.svg?component";
import MdOutlineCleaningServices from "../../../public/iconTags/MdOutlineCleaningServices.svg?component";
import MdOutlineDryCleaning from "../../../public/iconTags/MdOutlineDryCleaning.svg?component";
import MdOutlineFiberSmartRecord from "../../../public/iconTags/MdOutlineFiberSmartRecord.svg?component";
import MdOutlineOtherHouses from "../../../public/iconTags/MdOutlineOtherHouses.svg?component";
import MdOutlineScreenSearchDesktop from "../../../public/iconTags/MdOutlineScreenSearchDesktop.svg?component";
import MdOutlineSpa from "../../../public/iconTags/MdOutlineSpa.svg?component";
import MdOutlineWbSunny from "../../../public/iconTags/MdOutlineWbSunny.svg?component";
import MdPets from "../../../public/iconTags/MdPets.svg?component";
import MdRestaurant from "../../../public/iconTags/MdRestaurant.svg?component";
import MdSchool from "../../../public/iconTags/MdSchool.svg?component";
import MdRestore from "../../../public/iconTags/MdRestore.svg?component";
import MdRoofing from "../../../public/iconTags/MdRoofing.svg?component";
import MdRoundedCorner from "../../../public/iconTags/MdRoundedCorner.svg?component";
import MdSecurity from "../../../public/iconTags/MdSecurity.svg?component";
import MdSportsGolf from "../../../public/iconTags/MdSportsGolf.svg?component";
import MdSportsTennis from "../../../public/iconTags/MdSportsTennis.svg?component";
import MdTv from "../../../public/iconTags/MdTv.svg?component";
import MdWhatshot from "../../../public/iconTags/MdWhatshot.svg?component";
import MdDesktopWindows from "../../../public/iconTags/MdDesktopWindows.svg?component";
import Check from "../../../public/BiCheckCircle.svg?component";
import WithFurniture from "../../../public/MdOutlineChair.svg?component";
import BenificialPrice from "../../../public/BiDollar.svg?component";
import MdOutlineLocationOn from "../../../public/iconTags/MdOutlineLocationOn.svg?component";
import { CardTagProps } from "../types/CardTags.types";

export const TAG_CODES_CONSTANT: Record<string, CardTagProps> = {
	object_verified: {
		icon: Check,
		label: "tag.code.verified",
		bgColor: "#F0FFF4",
		borderColor: "#C6F6D5",
		textColor: "#38A169",
	},
	only_on_onebaan: {
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
	aqua_park: {
		icon: BiWater,
		label: "tag.code.aquaPark",
	},
	balcony: {
		icon: MdOutlineBalcony,
		label: "tag.code.balcony",
	},
	local_bar_on_roof: {
		icon: MdLocalBar,
		label: "tag.code.localBarOnRoof",
	},
	pool: { icon: BiSwim, label: "tag.code.pool" },
	pool_for_pets: {
		icon: [MdPets, BiWater],
		label: "tag.code.poolForPets",
	},
	library: {
		icon: BiLibrary,
		label: "tag.code.library",
	},
	billiard: {
		icon: MdAllOut,
		label: "tag.code.billiard",
	},
	wellness_center: {
		icon: BiSpa,
		label: "tag.code.wellnessCenter",
	},
	cctv: { icon: BiCctv, label: "tag.code.cctv" },
	exit_to_pool: {
		icon: BiSwim,
		label: "tag.code.exitToPool",
	},
	dressing_room: {
		icon: BiCloset,
		label: "tag.code.dressingRoom",
	},
	hydro_therapy: {
		icon: BiWater,
		label: "tag.code.hydroTherapy",
	},
	golf_simulator: {
		icon: MdSportsGolf,
		label: "tag.code.golfSimulator",
	},
	jacuzzi: {
		icon: BiBath,
		label: "tag.code.jacuzzi",
	},
	aqua_park_for_kids: {
		icon: [MdChildCare, BiSwim],
		label: "tag.code.aquaParkForKids",
	},
	pool_for_kids: {
		icon: [MdChildCare, BiSwim],
		label: "tag.code.poolForKids",
	},
	kids_club: {
		icon: [MdChildCare, MdRoofing],
		label: "tag.code.kidsClub",
	},
	access_by_card: {
		icon: BiCard,
		label: "tag.code.accessByCard",
	},
	duplex: {
		icon: MdOutlineOtherHouses,
		label: "tag.code.duplex",
	},
	electro_auto_charge: {
		icon: MdElectricCar,
		label: "tag.code.electroAutoCharge",
	},
	bbq_zone: {
		icon: BiDish,
		label: "tag.code.bbqZone",
	},
	zone_for_pets: {
		icon: MdPets,
		label: "tag.code.zoneForPets",
	},
	zone_for_rest: {
		icon: MdRestore,
		label: "tag.code.zoneForRest",
	},
	zone_for_rest_on_roof: {
		icon: [MdRestore, MdRoofing],
		label: "tag.code.zoneForRestOnRoof",
	},
	wifi: {
		icon: BiWifi,
		label: "tag.code.wifi",
	},
	yoga_studio: {
		icon: MdOutlineSpa,
		label: "tag.code.yogaStudio",
	},
	cabinet: {
		icon: BiCabinet,
		label: "tag.code.cabinet",
	},
	karaoke: {
		icon: BiMicrophone,
		label: "tag.code.karaoke",
	},
	cinema: {
		icon: MdTv,
		label: "tag.code.cinema",
	},
	outdoor_cinema: {
		icon: [MdTv, MdOutlineWbSunny],
		label: "tag.code.outdoorCinema",
	},
	convention_hall: {
		icon: MdOutlineScreenSearchDesktop,
		label: "tag.code.conventionHall",
	},
	concierge_service: {
		icon: BiKey,
		label: "tag.code.conciergeService",
	},
	coworking: {
		icon: MdDesktopWindows,
		label: "tag.code.coworking",
	},
	roofed_parking: {
		icon: BiCar,
		label: "tag.code.roofedParking",
	},
	allowed_with_pets: {
		icon: MdPets,
		label: "tag.code.allowedWithPets",
		bgColor: "#FFF4EE",
		borderColor: "#8532021A",
		textColor: "#853202",
	},
	onsen: {
		icon: BiWater,
		label: "tag.code.onsen",
	},
	guarded_whole_day: {
		icon: MdSecurity,
		label: "tag.code.guardedWholeDay",
	},
	parking: {
		icon: BiCar,
		label: "tag.code.parking",
	},
	on_first_line: {
		icon: BiWater,
		label: "tag.code.onFirstLine",
		bgColor: "#EDF7FF",
		textColor: "#1A8AE5",
		borderColor: "#1A8AE51A",
	},
	penthouse: {
		icon: MdRoofing,
		label: "tag.code.penthouse",
	},
	ceiling_from_3m: {
		icon: MdRoofing,
		label: "tag.code.ceilingFrom3m",
	},
	laundry_room: {
		icon: MdOutlineDryCleaning,
		label: "tag.code.laundryRoom",
	},
	restaurant: {
		icon: MdRestaurant,
		label: "tag.code.restaurant",
	},
	reception: {
		icon: BiUserVoice,
		label: "tag.code.reception",
	},
	garden_for_walks: {
		icon: MdGrass,
		label: "tag.code.gardenForWalks",
	},
	garden_on_roof: {
		icon: [MdGrass, MdRoofing],
		label: "tag.code.gardenOnRoof",
	},
	sauna: {
		icon: MdWhatshot,
		label: "tag.code.sauna",
	},
	climbing_gym: {
		icon: BiLandscape,
		label: "tag.code.climbingGym",
	},
	furniture_project: {
		icon: MdOutlineBedroomParent,
		label: "tag.code.withFurniture",
	},
	tenis_court: {
		icon: MdSportsTennis,
		label: "tag.code.tenisCourt",
	},
	terrace_on_roof: {
		icon: MdRoofing,
		label: "tag.code.terraceOnRoof",
	},
	only_on_onebaan_project: {
		icon: LogoProject,
		label: "tag.code.onlyOnOneBaan",
	},
	shopping_center: {
		icon: BiShoppingBag,
		label: "tag.code.shoppingCenter",
	},
	on_the_corner: {
		icon: MdRoundedCorner,
		label: "tag.code.onTheCorner",
	},
	cleaning: {
		icon: MdOutlineCleaningServices,
		label: "tag.code.cleaning",
	},
	care_for_pets: { icon: MdPets, label: "tag.code.careForPets" },
	garden_care: {
		icon: [MdGrass, MdOutlineCleaningServices],
		label: "tag.code.gardenCare",
	},
	smart_house: {
		icon: [MdOutlineFiberSmartRecord, MdOutlineOtherHouses],
		label: "tag.code.smartHouse",
	},
	fitness_house: {
		icon: BiDumbbell,
		label: "tag.code.fitnessHouse",
	},
	hammam: {
		icon: MdWhatshot,
		label: "tag.code.hammam",
	},
	private_bbq_zone: {
		icon: BiDish,
		label: "tag.code.privateBbqZone",
	},
	private_parking: {
		icon: BiCar,
		label: "tag.code.privateParking",
	},
	private_pool_in_separate_apartments: {
		icon: BiSwim,
		label: "tag.code.privatePoolInSeparateApartments",
	},
	private_pool: {
		icon: BiSwim,
		label: "tag.code.privatePool",
	},
	private_jacuzzi: {
		icon: BiBath,
		label: "tag.code.privateJacuzzi",
	},
	pool_cleaning: {
		icon: [MdOutlineCleaningServices, BiSwim],
		label: "tag.code.poolCleaning",
	},
	shuttle_to_beach: {
		icon: BiBusSchool,
		label: "tag.code.shuttleToBeach",
	},
	kids_education_nearby: {
		icon: MdSchool,
		label: "tag.code.kidsEductaionNearby",
	},
	eco_design: {
		icon: MdEco,
		label: "tag.code.ecoDesign",
	},
	electricity_and_water: {
		icon: [MdLightbulbOutline, BiWater],
		label: "tag.code.electricityAndWater",
	},
	insects_cleanse: {
		icon: MdOutlineCleaningServices,
		label: "tag.code.insectsCleanse",
	},
	separate_entrance: {
		icon: BiDoorOpen,
		label: "tag.code.separateEntrance",
	},
	location__bangtao: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.bangtao",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__karon_kata: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.karonKata",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__kathu: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.kathu",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__ko_sirey: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.koSirey",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__laguna: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.laguna",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__mai_khao: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.maiKhao",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__nai_thon: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.naiThon",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__nai_harn: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.naiHarn",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__nai_yang: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.naiYang",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__paklok: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.paklok",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__panwa: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.panwa",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__patong: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.patong",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__rawai: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.rawai",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__surin: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.surin",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__thalang: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.thalang",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__chalong: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.chalong",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
	location__cherngtalay: {
		icon: MdOutlineLocationOn,
		label: "tag.code.location.cherngtalay",
		bgColor: "#F2FEFF",
		borderColor: "#33727A1A",
		textColor: "#33727A",
	},
};
