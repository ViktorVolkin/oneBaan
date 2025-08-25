export type Breadcrumb = { href: string; label: string };
export type TagDTO = { code: string; label: string; color?: string };

export type ListingCardBaseDTO = {
	idOfCard: string;
	apartmentImages?: { images: string[] };
	mainImage?: string;
	price: string;
	pricePerMeter?: string;
	iconRow: {
		icons: Array<{ iconPath: string; value: string }>;
		showLines?: boolean;
	};
	details?: string;
	cardDescription?: string;
	agentLogo?: string;
	tags: TagDTO[];
	contactWhatsApp?: { path: string };
	contactWithSalesman?: { path: string };
	whenPosted?: string;
	breadcrumbs?: Breadcrumb[];
};

export type ListingDetailsDTO = {
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
		tagsSell: {
			tags: [{ code: "with_parking", label: "Парковка", color: "green" }],
		},
		offerFeatureText:
			"Комплекс в шаговой доступности от моря; возможно полное обслуживание на ресепшене. Угловая квартира — больше света и меньше соседей.",
		tagsDetailed: {
			tags: [
				{ code: "with_pool", label: "Бассейн", color: "yellow" },
				{
					code: "view_on_mountains",
					label: "Вид на горы",
					color: "yellow",
				},
				{ code: "with_furniture", label: "С мебелью", color: "yellow" },
				{ code: "with_gym", label: "Фитнес", color: "yellow" },
				{ code: "guards", label: "Охрана 24/7", color: "yellow" },
				{
					code: "with_child_club",
					label: "Детская зона",
					color: "yellow",
				},
				{ code: "with_coworking", label: "Коворкинг", color: "yellow" },
				{ code: "with_restaurant", label: "Ресторан", color: "yellow" },
				{ code: "with_garden", label: "Сад", color: "yellow" },
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
				// page 1
				{
					idOfCard: "1",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,200,000",
					pricePerMeter: "$15,200 за м² ",
					iconRow: {
						icons: [
							{ iconPath: "/BiBed.svg", value: "2" },
							{ iconPath: "/BiBath.svg", value: "3" },
							{ iconPath: "/BiBorderOuter.svg", value: "2010" },
						],
					},
					details: "Короткое описание",
					cardDescription: "Описание карточки",
					agentLogo: "/agent-logo.svg",
					tags: [
						{
							code: "with_furniture",
							label: "С мебелью",
							color: "green",
						},
						{
							code: "with_furniture",
							label: "С мебелью",
							color: "green",
						},
						{
							code: "with_furniture",
							label: "С мебелью",
							color: "green",
						},
						{
							code: "with_furniture",
							label: "С мебелью",
							color: "green",
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
					price: "$980,000",
					pricePerMeter: "$13,900 за м² ",
					iconRow: {
						icons: [
							{ iconPath: "/BiBed.svg", value: "3" },
							{ iconPath: "/BiBath.svg", value: "2" },
							{ iconPath: "/BiBorderOuter.svg", value: "1750" },
						],
					},
					details: "Короткое описание 2",
					cardDescription: "Описание карточки 2",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "2025-08-10T12:00:00.000Z",
					breadcrumbs: [],
				},
				{
					idOfCard: "3",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,050,000",
					pricePerMeter: "$14,500 за м² ",
					iconRow: {
						icons: [
							{ iconPath: "/BiBed.svg", value: "2" },
							{ iconPath: "/BiBath.svg", value: "2" },
							{ iconPath: "/BiBorderOuter.svg", value: "1800" },
						],
					},
					details: "Короткое описание 3",
					cardDescription: "Описание карточки 3",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "2025-08-15T09:30:00.000Z",
					breadcrumbs: [],
				},
				{
					idOfCard: "4",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,300,000",
					pricePerMeter: "$16,800 за м² ",
					iconRow: {
						icons: [
							{ iconPath: "/BiBed.svg", value: "4" },
							{ iconPath: "/BiBath.svg", value: "4" },
							{ iconPath: "/BiBorderOuter.svg", value: "2200" },
						],
					},
					details: "Короткое описание 4",
					cardDescription: "Описание карточки 4",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "2025-08-18T14:00:00.000Z",
					breadcrumbs: [],
				},

				// page 2
				{
					idOfCard: "5",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,150,000",
					pricePerMeter: "$14,900 за м² ",
					iconRow: {
						icons: [
							{ iconPath: "/BiBed.svg", value: "3" },
							{ iconPath: "/BiBath.svg", value: "3" },
							{ iconPath: "/BiBorderOuter.svg", value: "1900" },
						],
					},
					details: "Короткое описание 5",
					cardDescription: "Описание карточки 5",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "2025-08-20T10:00:00.000Z",
					breadcrumbs: [],
				},
				{
					idOfCard: "6",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,020,000",
					pricePerMeter: "$14,000 за м² ",
					iconRow: {
						icons: [
							{ iconPath: "/BiBed.svg", value: "2" },
							{ iconPath: "/BiBath.svg", value: "2" },
							{ iconPath: "/BiBorderOuter.svg", value: "1760" },
						],
					},
					details: "Короткое описание 6",
					cardDescription: "Описание карточки 6",
					agentLogo: "/agent-logo.svg",
					tags: [
						{ code: "with_garden", label: "Сад", color: "green" },
					],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "2025-08-21T11:15:00.000Z",
					breadcrumbs: [],
				},
				{
					idOfCard: "7",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,380,000",
					pricePerMeter: "$17,100 за м² ",
					iconRow: {
						icons: [
							{ iconPath: "/BiBed.svg", value: "4" },
							{ iconPath: "/BiBath.svg", value: "3" },
							{ iconPath: "/BiBorderOuter.svg", value: "2300" },
						],
					},
					details: "Короткое описание 7",
					cardDescription: "Описание карточки 7",
					agentLogo: "/agent-logo.svg",
					tags: [
						{ code: "with_pool", label: "Бассейн", color: "green" },
						{ code: "with_gym", label: "Фитнес", color: "green" },
					],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "2025-08-22T09:00:00.000Z",
					breadcrumbs: [],
				},
				{
					idOfCard: "8",
					apartmentImages: {
						images: Array(6).fill("/backgroundImage.png"),
					},
					price: "$1,250,000",
					pricePerMeter: "$16,000 за м² ",
					iconRow: {
						icons: [
							{ iconPath: "/BiBed.svg", value: "3" },
							{ iconPath: "/BiBath.svg", value: "3" },
							{ iconPath: "/BiBorderOuter.svg", value: "2100" },
						],
					},
					details: "Короткое описание 8",
					cardDescription: "Описание карточки 8",
					agentLogo: "/agent-logo.svg",
					tags: [],
					contactWhatsApp: { path: "" },
					contactWithSalesman: { path: "" },
					whenPosted: "2025-08-23T16:45:00.000Z",
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
				iconRow: {
					icons: [
						{ iconPath: "/BiBed.svg", value: "2" },
						{ iconPath: "/BiBath.svg", value: "3" },
						{ iconPath: "/BiBorderOuter.svg", value: "2010" },
					],
				},
				details: "2 спальни, 3 ванные, 2010 м²",
				cardDescription: "Апартаменты с видом на море",
				agentLogo: "/agent-logo.svg",
				tags: [],
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
