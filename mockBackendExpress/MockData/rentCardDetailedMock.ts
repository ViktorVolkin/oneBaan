import { Breadcrumb, ListingCardBaseDTO, TagDTO } from "./sellCardDetailedMock";

export type RentListingDetailsDTO = {
	images: string[];
	offerDetail: string;
	price: string;
	subText?: string;
	breadcrumbs: Breadcrumb[];
	stats: { amountOfBeds: number; amountOfBaths: number; area: number };
	detailValues: {
		yearOfBuilding?: string;
		distanceToSea?: string;
		level?: string;
		amountOfApartments: string;
	};
	tagsSell?: { tags: TagDTO[] };
	offerFeatureText?: string;
	tagsDetailed?: { tags: TagDTO[] };
	detailsOnOneBaan?: { daysOnOneBaan: number; amountOfViews: number };
	complex: {
		complexName: string;
		complexImage: string;
		yearOfBuilding?: number;
		amountOfApartments?: number;
		builder?: string;
		tags: TagDTO[];
	};

	moreFromComplex: {
		nameOfComplex: string;
		cards: ListingCardBaseDTO[];
	};

	location: {
		image: string;
		breadcrumbs: Breadcrumb[];
		toLocationHref: string;
		countryName: string;
	};
	agent: {
		agentIcon: string;
		agentName: string;
		agentExperienceOnPhuket?: string;
		phuketWorkingHours?: string;
		languages?: string;
		allOffers: { href: string; amountOfOffers: string };
		agentStatus: { text: string; img: string };
		phoneHref: string;
		whatsAppHref: string;
	};

	similar: {
		tags: string[];
		cards: ListingCardBaseDTO[];
	};
};

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
				label: "Парковка",
				color: "#44337A",
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
					pricePerMeter: "$25 / м²",
					stats: { amountOfBeds: 2, amountOfBaths: 3, area: 2010 },
					details: "Вид на море",
					cardDescription: "Описание карточки",
					agentLogo: "/agent-logo.svg",
					tags: [
						{
							code: "with_furniture",
						},
						{
							code: "with_furniture",
						},
						{
							code: "with_furniture",
						},
						{
							code: "with_furniture",
						},
					],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "2 дня назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "2",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$2,300",
					pricePerMeter: "$28 / м²",
					stats: { amountOfBeds: 3, amountOfBaths: 2, area: 1750 },
					details: "Вид на горы",
					cardDescription: "Описание карточки 2",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "5 дней назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "3",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,750",
					pricePerMeter: "$26 / м²",
					stats: { amountOfBeds: 2, amountOfBaths: 2, area: 1800 },
					details: "С мебелью",
					cardDescription: "Описание карточки 3",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "3 дня назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "4",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$3,100",
					pricePerMeter: "$32 / м²",
					stats: { amountOfBeds: 4, amountOfBaths: 4, area: 2200 },
					details: "Бассейн и фитнес",
					cardDescription: "Описание карточки 4",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "Неделю назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "5",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$2,000",
					pricePerMeter: "$27 / м²",
					stats: { amountOfBeds: 3, amountOfBaths: 3, area: 1900 },
					details: "Сад и охрана 24/7",
					cardDescription: "Описание карточки 5",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "10 дней назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "6",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,600",
					pricePerMeter: "$24 / м²",
					stats: { amountOfBeds: 2, amountOfBaths: 2, area: 1760 },
					details: "Ресторан и детская зона",
					cardDescription: "Описание карточки 6",
					agentLogo: "/agent-logo.svg",
					tags: [{ code: "with_garden" }],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "Сегодня",
					breadcrumbs: [],
				},
				{
					idOfCard: "7",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$2,800",
					pricePerMeter: "$30 / м²",
					stats: { amountOfBeds: 4, amountOfBaths: 3, area: 2300 },
					details: "Коворкинг и фитнес",
					cardDescription: "Описание карточки 7",
					agentLogo: "/agent-logo.svg",
					tags: [{ code: "with_pool" }, { code: "with_gym" }],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "Вчера",
					breadcrumbs: [],
				},
				{
					idOfCard: "8",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$2,400",
					pricePerMeter: "$29 / м²",
					stats: { amountOfBeds: 3, amountOfBaths: 3, area: 2100 },
					details: "Вид на море и горы",
					cardDescription: "Описание карточки 8",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "3 часа назад",
					breadcrumbs: [],
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
			allOffers: { href: "/agents/ahpi/offers", amountOfOffers: "122" },
			agentStatus: { text: "online", img: "/onlineIcon.svg" },
			phoneHref: "tel:+6699999999",
			whatsAppHref: "https://wa.me/6699999999",
		},

		similar: {
			tags: ["Вид на море", "С мебелью", "Рассрочка"],
			cards: Array.from({ length: 6 }).map((_, i) => ({
				idOfCard: `S${i + 1}`,
				apartmentImages: {
					images: ["/backgroundImage.png", "/backgroundImage.png"],
				},
				price: `$${i % 2 === 0 ? 2300 + i * 100 : 1800 + i * 120}`,
				pricePerMeter: "$27 / м²",
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
				tags: [],
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				whenPosted:
					i === 0
						? "Сегодня"
						: i === 1
						? "Вчера"
						: `${i + 1} дня назад`,
				breadcrumbs: [
					{ label: "Пхукет", href: "/thailand/phuket" },
					{ label: "Бангтао", href: "/thailand/phuket/bangtao" },
				],
				mainImage: "/backgroundImage.png",
			})) as unknown as ListingCardBaseDTO[],
		},
	},
};
