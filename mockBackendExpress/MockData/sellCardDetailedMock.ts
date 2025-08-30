// sellCardDetailedMock.ts

export type Breadcrumb = { href: string; label: string };
export type TagDTO = { code: string };

export type ListingCardBaseDTO = {
	idOfCard: string;
	apartmentImages: { images: string[] };

	price: string;
	pricePerMeter?: string;

	stats: {
		amountOfBeds: number;
		amountOfBaths: number;
		area: number;
	};

	details?: string;
	cardDescription?: string;
	agentLogo?: string;
	tags: TagDTO[];

	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	whenPosted: string;
	breadcrumbs: Breadcrumb[];

	isRentCard?: boolean;
	mainImage?: string;
};

export type ListingDetailsDTO = {
	images: string[];
	amountOfLikes: number;
	offerDetail: string;
	price: string;
	subText?: string;
	breadcrumbs: Breadcrumb[];
	stats: { amountOfBeds: number; amountOfBaths: number; area: number };
	detailValues: {
		yearOfBuilding?: string;
		distanceToSea?: string;
		level?: string;
		checkOnMapHref: string;
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

export const SELL_CARD_DETAILED_MOCKS: Record<string, ListingDetailsDTO> = {
	"123": {
		images: [
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
			"/backgroundImage.png",
		],
		amountOfLikes: 120,

		offerDetail:
			"Апартаменты на продажу в Blue Canyon Golf And Country Club Home",
		price: "$1,200,000",
		subText: "$15,200 / м²",
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
			checkOnMapHref: "/2gis",
		},
		tagsSell: { tags: [{ code: "with_furniture" }] },
		offerFeatureText:
			"Комплекс в шаговой доступности от моря; возможно полное обслуживание на ресепшене. Угловая квартира — больше света и меньше соседей.",
		tagsDetailed: {
			tags: [
				{ code: "with_pool" },
				{ code: "view_on_mountains" },
				{ code: "guards" },
				{ code: "with_gym" },
				{ code: "guards" },
				{ code: "with_child_club" },
				{ code: "with_coworking" },
				{ code: "with_restaurant" },
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
					price: "$1,200,000",
					pricePerMeter: "$15,200 за м² ",
					stats: { amountOfBeds: 2, amountOfBaths: 3, area: 2010 },
					details: "Короткое описание",
					cardDescription: "Описание карточки",
					agentLogo: "/agent-logo.svg",
					tags: [
						{ code: "object_verified" },
						{ code: "only_on_oneBaan" },
						{ code: "beneficial_price" },
						{ code: "with_furniture" },
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
					price: "$980,000",
					pricePerMeter: "$13,900 за м² ",
					stats: { amountOfBeds: 3, amountOfBaths: 2, area: 1750 },
					details: "Короткое описание 2",
					cardDescription: "Описание карточки 2",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "21 день назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "3",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,050,000",
					pricePerMeter: "$14,500 за м² ",
					stats: { amountOfBeds: 2, amountOfBaths: 2, area: 1800 },
					details: "Короткое описание 3",
					cardDescription: "Описание карточки 3",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "16 дней назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "4",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,300,000",
					pricePerMeter: "$16,800 за м² ",
					stats: { amountOfBeds: 4, amountOfBaths: 4, area: 2200 },
					details: "Короткое описание 4",
					cardDescription: "Описание карточки 4",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "13 дней назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "5",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,150,000",
					pricePerMeter: "$14,900 за м² ",
					stats: { amountOfBeds: 3, amountOfBaths: 3, area: 1900 },
					details: "Короткое описание 5",
					cardDescription: "Описание карточки 5",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "11 дней назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "6",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,020,000",
					pricePerMeter: "$14,000 за м² ",
					stats: { amountOfBeds: 2, amountOfBaths: 2, area: 1760 },
					details: "Короткое описание 6",
					cardDescription: "Описание карточки 6",
					agentLogo: "/agent-logo.svg",
					tags: [{ code: "with_garden" }],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "10 дней назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "7",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,380,000",
					pricePerMeter: "$17,100 за м² ",
					stats: { amountOfBeds: 4, amountOfBaths: 3, area: 2300 },
					details: "Короткое описание 7",
					cardDescription: "Описание карточки 7",
					agentLogo: "/agent-logo.svg",
					tags: [{ code: "with_pool" }, { code: "with_gym" }],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "9 дней назад",
					breadcrumbs: [],
				},
				{
					idOfCard: "8",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,250,000",
					pricePerMeter: "$16,000 за м² ",
					stats: { amountOfBeds: 3, amountOfBaths: 3, area: 2100 },
					details: "Короткое описание 8",
					cardDescription: "Описание карточки 8",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "8 дней назад",
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
				price: "$1,200,000",
				pricePerMeter: "$15,200 за м²",
				stats: { amountOfBeds: 2, amountOfBaths: 3, area: 2010 },
				details: i % 2 === 0 ? "Вид на море" : "Вид на горы",
				cardDescription: "Апартаменты на продажу",
				agentLogo: "/agent-logo.svg",
				tags: [
					{ code: "object_verified" },
					{ code: "only_on_oneBaan" },
					{ code: "beneficial_price" },
					{ code: "with_furniture" },
				],
				contactWhatsApp: { path: "" },
				contactWithSalesman: { path: "" },
				whenPosted: "Сегодня",
				breadcrumbs: [
					{ label: "Пхукет", href: "/thailand/phuket" },
					{ label: "Бангтао", href: "/thailand/phuket/bangtao" },
				],
				isRentCard: false,
				mainImage: "/backgroundImage.png",
			})),
		},
	},
};
