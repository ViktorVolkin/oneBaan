import { RentListingDetailsDTO } from "../types/rentCardDetailed";
import { ListingCardBaseDTO } from "../types/sellCardDetailed";

export const RENT_CARD_DETAILED_MOCKS: Record<string, RentListingDetailsDTO> = {
	"123": {
		images: [
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
		],

		offerDetail:
			"Апартаменты на продажу в Blue Canyon Golf And Country Club Home",
		price: "$1,000",
		subText: "При 12-мес. аренде",
		breadcrumbs: [
			{ href: "/thailand/phuket", label: "Пхукет" },
			{ href: "/thailand/phuket/bangtao", label: "Бангтао" },
			{
				href: "/thailand/phuket/bangtao/apartments",
				label: "Апартаменты",
			},
		],
		stats: { amountOfBeds: 4, amountOfBaths: 2, area: 1204 },
		detailValues: {
			yearOfBuilding: "2022",
			distanceToSea: "450 м",
			level: "12",
			amountOfApartments: "123",
		},
		tagsSell: {
			tags: [{ code: "with_parking" }],
		},
		offerFeatureText:
			"Комплекс в шаговой доступности от моря; возможно полное обслуживание на ресепшене. Угловая квартира — больше света и меньше соседей.",
		tagsDetailed: {
			tags: [
				{ code: "with_pool" },
				{
					code: "view_on_mountains",
				},

				{ code: "with_gym" },
				{ code: "guards" },
				{
					code: "with_child_club",
				},
				{
					code: "with_coworking",
				},
				{
					code: "with_restaurant",
				},
				{ code: "with_garden" },
			],
		},
		detailsOnOneBaan: { daysOnOneBaan: 12, amountOfViews: 14 },

		complex: {
			complexName: "Blue Canyon Golf And Country Club Home",
			complexImage: "/backgroundImage.png",
			yearOfBuilding: 20212,
			amountOfApartments: 2132,
			builder: "Sino-Thai Engineering & Construction",
			tags: Array.from({ length: 6 }).map(() => ({
				code: "with_parking",
			})),
		},

		moreFromComplex: {
			nameOfComplex: "Blue Canyon Golf And Country Club Home",
			cards: [
				{
					idOfCard: "1",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,900",
					stats: { amountOfBeds: 2, amountOfBaths: 3, area: 2010 },
					details: "Вид на море",
					agentLogo: "/agent-logo.svg",
				},
				{
					idOfCard: "2",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$2,300",
					stats: { amountOfBeds: 3, amountOfBaths: 2, area: 1750 },
					details: "Вид на горы",
					agentLogo: "/agent-logo.svg",
				},
				{
					idOfCard: "3",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,750",
					stats: { amountOfBeds: 2, amountOfBaths: 2, area: 1800 },
					details: "С мебелью",
					agentLogo: "/agent-logo.svg",
				},
				{
					idOfCard: "4",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$3,100",
					stats: { amountOfBeds: 4, amountOfBaths: 4, area: 2200 },
					details: "Бассейн и фитнес",
					agentLogo: "/agent-logo.svg",
				},
				{
					idOfCard: "5",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$2,000",
					stats: { amountOfBeds: 3, amountOfBaths: 3, area: 1900 },
					details: "Сад и охрана 24/7",
					agentLogo: "/agent-logo.svg",
				},
				{
					idOfCard: "6",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,600",
					stats: { amountOfBeds: 2, amountOfBaths: 2, area: 1760 },
					details: "Ресторан и детская зона",
					agentLogo: "/agent-logo.svg",
				},
				{
					idOfCard: "7",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$2,800",
					stats: { amountOfBeds: 4, amountOfBaths: 3, area: 2300 },
					details: "Коворкинг и фитнес",
					agentLogo: "/agent-logo.svg",
				},
				{
					idOfCard: "8",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$2,400",
					stats: { amountOfBeds: 3, amountOfBaths: 3, area: 2100 },
					details: "Вид на море и горы",
					agentLogo: "/agent-logo.svg",
				},
			],
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
			allOffers: { href: "/agents/ahpi/offers", amountOfOffers: "967" },
			agentStatus: { text: "online", img: "/onlineIcon.svg" },
			phoneHref: "tel:+6699999999",
			whatsAppHref: "https://wa.me/669999999",
		},

		similar: {
			tags: ["Вид на море", "С мебелью", "Рассрочка"],
			cards: Array.from({ length: 6 }).map((_, i) => ({
				idOfCard: `S${i + 1}`,
				price: `$${i % 2 === 0 ? 2300 + i * 100 : 1800 + i * 120}`,
				stats: { amountOfBeds: 2, amountOfBaths: 3, area: 2010 },
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
				cardDescription: "Апартаменты с видом на море",
				agentLogo: "/agent-logo.svg",
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				breadcrumbs: [
					{ label: "Пхукет", href: "/thailand/phuket" },
					{ label: "Бангтао", href: "/thailand/phuket/bangtao" },
				],
				mainImage: "/backgroundImage.png",
			})),
		},
	},
};
