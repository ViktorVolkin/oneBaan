import { ComplexInfoType } from "../types/comlpexInfo";

export const COMPLEX__MOCK_DATA: Record<string, ComplexInfoType> = {
	"123": {
		images: [
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
		],
		complexMinPrices: {
			sell: { amountOfApartments: 23, minPrice: "$120,000" },
			rent: { amountOfApartments: 17, minPrice: "$1,200" },
		},
		detailValues: {
			yearOfBuilding: "2022",
			distanceToSea: "450 м",
			level: "12",
			amountOfApartments: "123",
		},
		offerDetail:
			"Апартаменты на продажу в Blue Canyon Golf And Country Club Home",
		breadcrumbs: [
			{ href: "/thailand/phuket", label: "Пхукет" },
			{ href: "/thailand/phuket/bangtao", label: "Бангтао" },
			{
				href: "/thailand/phuket/bangtao/apartments",
				label: "Апартаменты",
			},
		],

		complex: {
			complexName: "Blue Canyon Golf And Country Club Home",
			complexImage: "/backgroundImage.png",
			yearOfBuilding: 20212,
			amountOfApartments: 2132,
			builder: "Sino-Thai Engineering & Construction",
			tags: [
				{ code: "aqua_park" },
				{ code: "balcony" },
				{ code: "local_bar_on_roof" },
				{ code: "pool" },
				{ code: "pool_for_pets" },
				{ code: "library" },
				{ code: "billiard" },
				{ code: "wellness_center" },
				{ code: "cctv" },
				{ code: "exit_to_pool" },
				{ code: "dressing_room" },
				{ code: "hydro_therapy" },
				{ code: "golf_simulator" },
				{ code: "jacuzzi" },
				{ code: "aqua_park_for_kids" },
				{ code: "pool_for_kids" },
				{ code: "kids_club" },
				{ code: "access_by_card" },
				{ code: "duplex" },
				{ code: "electro_auto_charge" },
				{ code: "bbq_zone" },
				{ code: "zone_for_pets" },
				{ code: "zone_for_rest" },
				{ code: "zone_for_rest_on_roof" },
				{ code: "wifi" },
				{ code: "yoga_studio" },
				{ code: "cabinet" },
				{ code: "karaoke" },
				{ code: "cinema" },
				{ code: "outdoor_cinema" },
				{ code: "convention_hall" },
				{ code: "concierge_service" },
				{ code: "coworking" },
				{ code: "roofed_parking" },
				{ code: "allowed_with_pets" },
				{ code: "onsen" },
				{ code: "guarded_whole_day" },
				{ code: "parking" },
				{ code: "on_first_line" },
				{ code: "penthouse" },
				{ code: "ceiling_from_3m" },
				{ code: "laundry_room" },
				{ code: "restaurant" },
				{ code: "reception" },
				{ code: "garden_for_walks" },
				{ code: "garden_on_roof" },
				{ code: "sauna" },
				{ code: "climbing_gym" },
				{ code: "furniture_project" },
				{ code: "tenis_court" },
				{ code: "terrace_on_roof" },
				{ code: "only_on_onebaan_project" },
				{ code: "shopping_center" },
				{ code: "on_the_corner" },
				{ code: "cleaning" },
				{ code: "care_for_pets" },
				{ code: "garden_care" },
				{ code: "smart_house" },
				{ code: "fitness_house" },
				{ code: "hammam" },
				{ code: "private_bbq_zone" },
				{ code: "private_parking" },
				{ code: "private_pool_in_separate_apartments" },
				{ code: "private_pool" },
				{ code: "private_jacuzzi" },
				{ code: "pool_cleaning" },
				{ code: "shuttle_to_beach" },
				{ code: "kids_education_nearby" },
				{ code: "eco_design" },
				{ code: "electricity_and_water" },
				{ code: "insects_cleanse" },
				{ code: "separate_entrance" },
			],
		},

		moreFromComplex: {
			nameOfComplex: "Blue Canyon Golf And Country Club Home",
			sellCards: Array.from({ length: 8 }).map((_, i) => ({
				idOfCard: `Sell_${i}`,
				apartmentImages: {
					images: Array(6).fill("/backgroundImage.png"),
				},
				price: `$${1900 + i * 200}`,
				stats: {
					amountOfBeds: 2 + (i % 3),
					amountOfBaths: 1 + (i % 2),
					area: 1500 + i * 100,
				},
				details: [
					"Вид на море",
					"Вид на горы",
					"С мебелью",
					"Бассейн и фитнес",
					"Сад и охрана 24/7",
					"Ресторан и детская зона",
					"Пентхаус",
					"Терраса",
				][i],
				agentLogo: "/agent-logo.svg",
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				pricePerMeter: `${20 + i * 10}$`,
			})),
			rentCards: Array.from({ length: 8 }).map((_, i) => ({
				idOfCard: `Rent_${i}`,
				apartmentImages: {
					images: Array(6).fill("/backgroundImage.png"),
				},
				price: `$${1200 + i * 150}`,
				stats: {
					amountOfBeds: 1 + (i % 2),
					amountOfBaths: 1 + (i % 2),
					area: 900 + i * 80,
				},
				details: [
					"Вид на сад",
					"Бассейн и фитнес",
					"С мебелью",
					"Вид на море",
					"Терраса",
					"Пентхаус",
					"Ресторан и детская зона",
					"Сад и охрана 24/7",
				][i],
				cardDescription: `Описание карточки ${i + 1} (аренда)`,
				agentLogo: "/agent-logo.svg",
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				pricePerMeter: `${15 + i * 5}$`,
			})),
		},

		location: {
			image: "/backgroundImage.png",
			breadcrumbs: [
				{ label: "Пхукет", href: "/thailand/phuket" },
				{ label: "Пляж Багтао", href: "/thailand/phuket/bangtao" },
			],
			toLocationHref: "https://maps.google.com/?q=Phuket%20Bangtao",
			countryName: "Таиланд",
		},

		agent: {
			agentIcon: "/agent-logo.svg",
			agentName: "Apart Homes Pattaya Incorporated",
			agentExperienceOnPhuket: "20 лет",
			phuketWorkingHours: "12-22",
			languages: "Английский,Русский,Тайский",
			allOffers: { href: "/agents/ahpi/offers", amountOfOffers: "122" },
			agentStatus: { text: "online", img: "/onlineIcon.svg" },
			phoneHref: "tel:+6699999999",
			whatsAppHref: "https://wa.me/6699999999",
		},

		similar: {
			tags: ["Вид на море", "С мебелью", "Рассрочка"],

			cards: Array.from({ length: 6 }).map((_, i) => ({
				idOfCard: `S${i + 1}`,
				mainImage: "/backgroundImage.png",
				cardDescription:
					"Комплекс апартаментов Blue Canyon Golf And Country Club Home",
				details:
					i === 0
						? "Вид на море"
						: i === 1
						? "Вид на горы"
						: i === 2
						? "С мебелью"
						: i === 3
						? "Бассейн и фитнес"
						: i === 4
						? "Сад и охрана 24/7"
						: "Ресторан и детская зона",
				phoneHref: "tel:+6699999999",
				whatsAppHref: "https://wa.me/6699999999",
				cardsBasePath: "/catalog/rent/CardDetails",
				breadcrumbs: [
					{ label: "Пхукет", href: "/thailand/phuket" },
					{ label: "Бангтао", href: "/thailand/phuket/bangtao" },
				],

				complexMinPrices: {
					sell: { amountOfApartments: 23, minPrice: "$120,000" },
					rent: { amountOfApartments: 17, minPrice: "$1,200" },
				},
				apartmentImages: {
					images: ["/backgroundImage.png", "/backgroundImage.png"],
				},
				price: `$${i % 2 === 0 ? 2300 + i * 100 : 1800 + i * 120}`,
				pricePerMeter: "$27 / м²",
				stats: { amountOfBeds: 2, amountOfBaths: 3, area: 2010 },
				agentLogo: "/agent-logo.svg",
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				whenPosted: "2 days ago",
				isRentCard: true,
				cards: [{}],
			})),
		},
	},
};
