import { CatalogItem } from "../utils/catalogHelper";

export const sellCatalogListingCards = [
	{
		idOfCard: "ph-001",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 263_889,
		pricePerMeterUsd: 3_340,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 2 },
				{ iconPath: "/BiBath.svg", value: 2 },
				{ iconPath: "/BiBorderOuter.svg", value: 79 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "Mainpage", href: "/" },
			{ label: "Catalog", href: "/catalog" },
			{ label: "Phuket", href: "/catalog?location=phuket" },
		],
		isLiked: false,
		ageDays: 5,
		translations: {
			en: {
				cardDescription: "2-bedroom condo in Kata with sea view",
				details: "Phuket • Sea view • 10 min to beach",
			},
			ru: {
				cardDescription: "Кондо в Ката, 2 спальни, вид на море",
				details: "Phuket • Вид на море • 10 мин до пляжа",
			},
		},
		tags: [
			{ code: "object_verified", label: "Проверено", color: "#10B981" },
			{ code: "beneficial_price", label: "Выгодно", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-002",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 525_000,
		pricePerMeterUsd: 4_038,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 3 },
				{ iconPath: "/BiBath.svg", value: 3 },
				{ iconPath: "/BiBorderOuter.svg", value: 130 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Karon", href: "/catalog?location=karon" },
		],
		isLiked: true,
		ageDays: 2,
		translations: {
			en: {
				cardDescription: "Sea-view villa in Karon, 3 bedrooms",
				details: "Karon • Sea view • 5 min to beach",
			},
			ru: {
				cardDescription: "Вилла в Карон, 3 спальни, вид на море",
				details: "Карон • Вид на море • 5 мин до пляжа",
			},
		},
		tags: [
			{ code: "with_furniture", label: "С мебелью", color: "#10B981" },
			{ code: "only_on_oneBaan", label: "Эксклюзив", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-003",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 341_667,
		pricePerMeterUsd: 3_059,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 2 },
				{ iconPath: "/BiBath.svg", value: 2 },
				{ iconPath: "/BiBorderOuter.svg", value: 112 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Kamala", href: "/catalog?location=kamala" },
		],
		isLiked: false,
		ageDays: 7,
		translations: {
			en: {
				cardDescription: "Kamala hillside apartment, 2 bedrooms",
				details: "Kamala • Hillside • 7 min to beach",
			},
			ru: {
				cardDescription: "Апартаменты на холме Камала, 2 спальни",
				details: "Камала • На возвышенности • 7 мин до пляжа",
			},
		},
		tags: [
			{ code: "object_verified", label: "Проверено", color: "#10B981" },
			{ code: "with_furniture", label: "С мебелью", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-004",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 219_444,
		pricePerMeterUsd: 2_743,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 1 },
				{ iconPath: "/BiBath.svg", value: 1 },
				{ iconPath: "/BiBorderOuter.svg", value: 80 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Patong", href: "/catalog?location=patong" },
		],
		isLiked: true,
		ageDays: 1,
		translations: {
			en: {
				cardDescription: "Patong city condo, 1 bedroom",
				details: "Patong • City view • 12 min to beach",
			},
			ru: {
				cardDescription: "Кондо Патонг, 1 спальня",
				details: "Патонг • Вид на город • 12 мин до пляжа",
			},
		},
		tags: [
			{ code: "beneficial_price", label: "Выгодно", color: "#10B981" },
			{ code: "only_on_oneBaan", label: "Эксклюзив", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-005",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 625_000,
		pricePerMeterUsd: 4_310,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 4 },
				{ iconPath: "/BiBath.svg", value: 4 },
				{ iconPath: "/BiBorderOuter.svg", value: 145 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Rawai", href: "/catalog?location=rawai" },
		],
		isLiked: false,
		ageDays: 9,
		translations: {
			en: {
				cardDescription: "Rawai family villa, 4 bedrooms",
				details: "Rawai • Quiet area • 8 min to beach",
			},
			ru: {
				cardDescription: "Семейная вилла в Раваи, 4 спальни",
				details: "Раваи • Тихий район • 8 мин до пляжа",
			},
		},
		tags: [
			{ code: "object_verified", label: "Проверено", color: "#10B981" },
			{ code: "with_furniture", label: "С мебелью", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-006",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 325_000,
		pricePerMeterUsd: 2_928,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 2 },
				{ iconPath: "/BiBath.svg", value: 2 },
				{ iconPath: "/BiBorderOuter.svg", value: 111 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Bang Tao", href: "/catalog?location=bangtao" },
		],
		isLiked: true,
		ageDays: 3,
		translations: {
			en: {
				cardDescription: "Bang Tao resort apartment, 2 bedrooms",
				details: "Bang Tao • Pool access • 6 min to beach",
			},
			ru: {
				cardDescription: "Апартаменты в Банг Тао, 2 спальни",
				details: "Банг Тао • Выход к бассейну • 6 мин до пляжа",
			},
		},
		tags: [
			{ code: "beneficial_price", label: "Выгодно", color: "#10B981" },
			{ code: "with_furniture", label: "С мебелью", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-007",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 400_000,
		pricePerMeterUsd: 3_279,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 3 },
				{ iconPath: "/BiBath.svg", value: 3 },
				{ iconPath: "/BiBorderOuter.svg", value: 122 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Surin", href: "/catalog?location=surin" },
		],
		isLiked: false,
		ageDays: 0,
		translations: {
			en: {
				cardDescription: "Surin modern condo, 3 bedrooms",
				details: "Surin • Modern • 9 min to beach",
			},
			ru: {
				cardDescription: "Современное кондо Сурин, 3 спальни",
				details: "Сурин • Современный комплекс • 9 мин до пляжа",
			},
		},
		tags: [
			{ code: "object_verified", label: "Проверено", color: "#10B981" },
			{ code: "only_on_oneBaan", label: "Эксклюзив", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-008",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 229_167,
		pricePerMeterUsd: 2_795,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 2 },
				{ iconPath: "/BiBath.svg", value: 2 },
				{ iconPath: "/BiBorderOuter.svg", value: 82 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Chalong", href: "/catalog?location=chalong" },
		],
		isLiked: true,
		ageDays: 4,
		translations: {
			en: {
				cardDescription: "Chalong cozy condo, 2 bedrooms",
				details: "Chalong • Mountain view • 15 min to beach",
			},
			ru: {
				cardDescription: "Уютное кондо Чалонг, 2 спальни",
				details: "Чалонг • Вид на горы • 15 мин до пляжа",
			},
		},
		tags: [
			{ code: "with_furniture", label: "С мебелью", color: "#10B981" },
			{ code: "beneficial_price", label: "Выгодно", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-009",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 95_000,
		pricePerMeterUsd: 2_500,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 0 },
				{ iconPath: "/BiBath.svg", value: 1 },
				{ iconPath: "/BiBorderOuter.svg", value: 38 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Phuket Town", href: "/catalog?location=phuket-town" },
		],
		isLiked: false,
		ageDays: 6,
		translations: {
			en: {
				cardDescription: "Phuket Town studio",
				details: "Phuket Town • City center • 5 min to cafe",
			},
			ru: {
				cardDescription: "Студия в Пхукет-Тауне",
				details: "Пхукет-Таун • Центр • 5 мин до кафе",
			},
		},
		tags: [
			{ code: "beneficial_price", label: "Выгодно", color: "#10B981" },
		],
	},
	{
		idOfCard: "ph-010",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 1_350_000,
		pricePerMeterUsd: 4_355,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 5 },
				{ iconPath: "/BiBath.svg", value: 5 },
				{ iconPath: "/BiBorderOuter.svg", value: 310 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Nai Harn", href: "/catalog?location=nai-harn" },
		],
		isLiked: true,
		ageDays: 8,
		translations: {
			en: {
				cardDescription: "Nai Harn luxury villa, 5 bedrooms",
				details: "Nai Harn • Private pool • 4 min to beach",
			},
			ru: {
				cardDescription: "Роскошная вилла Най Харн, 5 спален",
				details: "Най Харн • Личный бассейн • 4 мин до пляжа",
			},
		},
		tags: [
			{ code: "object_verified", label: "Проверено", color: "#10B981" },
			{ code: "only_on_oneBaan", label: "Эксклюзив", color: "#3B82F6" },
		],
	},
	{
		idOfCard: "ph-011",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 265_000,
		pricePerMeterUsd: 1_893,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 2 },
				{ iconPath: "/BiBath.svg", value: 3 },
				{ iconPath: "/BiBorderOuter.svg", value: 140 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Mai Khao", href: "/catalog?location=mai-khao" },
		],
		isLiked: false,
		ageDays: 10,
		translations: {
			en: {
				cardDescription: "Mai Khao townhouse, 2BR 3BA",
				details: "Mai Khao • Quiet area • 8 min to beach",
			},
			ru: {
				cardDescription: "Таунхаус Май Као, 2 спальни 3 с/у",
				details: "Май Као • Тихий район • 8 мин до пляжа",
			},
		},
		tags: [
			{ code: "beneficial_price", label: "Выгодно", color: "#10B981" },
		],
	},
	{
		idOfCard: "ph-012",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 120_000,
		pricePerMeterUsd: 2_182,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 1 },
				{ iconPath: "/BiBath.svg", value: 1 },
				{ iconPath: "/BiBorderOuter.svg", value: 55 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Laguna", href: "/catalog?location=laguna" },
		],
		isLiked: true,
		ageDays: 11,
		translations: {
			en: {
				cardDescription: "Laguna condo, 1 bedroom",
				details: "Laguna • Lagoon view • 8 min to beach",
			},
			ru: {
				cardDescription: "Кондо Лагуна, 1 спальня",
				details: "Лагуна • Вид на лагуну • 8 мин до пляжа",
			},
		},
		tags: [
			{ code: "with_furniture", label: "С мебелью", color: "#10B981" },
		],
	},
	{
		idOfCard: "ph-013",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 210_000,
		pricePerMeterUsd: 2_100,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 3 },
				{ iconPath: "/BiBath.svg", value: 2 },
				{ iconPath: "/BiBorderOuter.svg", value: 100 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Thalang", href: "/catalog?location=thalang" },
		],
		isLiked: false,
		ageDays: 12,
		translations: {
			en: {
				cardDescription: "Thalang condo, 3 bedrooms",
				details: "Thalang • Family area • 20 min to beach",
			},
			ru: {
				cardDescription: "Кондо Таланг, 3 спальни",
				details: "Таланг • Семейный район • 20 мин до пляжа",
			},
		},
		tags: [
			{ code: "object_verified", label: "Проверено", color: "#10B981" },
		],
	},
	{
		idOfCard: "ph-014",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 180_000,
		pricePerMeterUsd: 2_000,
		iconRow: {
			icons: [
				{ iconPath: "/BiBed.svg", value: 1 },
				{ iconPath: "/BiBath.svg", value: 2 },
				{ iconPath: "/BiBorderOuter.svg", value: 90 },
			],
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ label: "catalog.mainPage", href: "/" },
			{ label: "catalog.property", href: "/catalog" },
			{ label: "Cape Panwa", href: "/catalog?location=panwa" },
		],
		isLiked: true,
		ageDays: 4,
		translations: {
			en: {
				cardDescription: "Cape Panwa loft, 1BR 2BA",
				details: "Cape Panwa • Sea glimpse • 14 min to beach",
			},
			ru: {
				cardDescription: "Лофт Кейп Панва, 1 спальня 2 с/у",
				details: "Кейп Панва • Море рядом • 14 мин до пляжа",
			},
		},
		tags: [
			{ code: "only_on_oneBaan", label: "Эксклюзив", color: "#3B82F6" },
		],
	},
] satisfies Array<CatalogItem>;
