import type { CatalogItem } from "../types/ApiListingCard";

export const rentCatalogMock: Omit<CatalogItem, "pricePerMeterUsd">[] = [
	{
		idOfCard: "ph-001",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 263_889,
		stats: {
			amountOfBeds: 2,
			amountOfBaths: 2,
			area: 79,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=phuket",
				translations: { en: "Phuket", ru: "Пхукет" },
			},
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
				details: "Пхукет • Вид на море • 10 мин до пляжа",
			},
		},
		tags: [
			{
				code: "object_verified",
				color: "#10B981",
				translations: { en: "Verified", ru: "Проверено" },
			},
			{
				code: "beneficial_price",
				color: "#3B82F6",
				translations: { en: "Best price", ru: "Выгодно" },
			},
		],
	},
	{
		idOfCard: "ph-002",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 525_000,
		stats: {
			amountOfBeds: 3,
			amountOfBaths: 3,
			area: 130,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=karon",
				translations: { en: "Karon", ru: "Карон" },
			},
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
			{
				code: "with_furniture",
				color: "#10B981",
				translations: { en: "Furnished", ru: "С мебелью" },
			},
			{
				code: "only_on_oneBaan",
				color: "#3B82F6",
				translations: { en: "Exclusive", ru: "Эксклюзив" },
			},
		],
	},
	{
		idOfCard: "ph-003",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 341_667,
		stats: {
			amountOfBeds: 2,
			amountOfBaths: 2,
			area: 112,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=kamala",
				translations: { en: "Kamala", ru: "Камала" },
			},
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
			{
				code: "object_verified",
				color: "#10B981",
				translations: { en: "Verified", ru: "Проверено" },
			},
			{
				code: "with_furniture",
				color: "#3B82F6",
				translations: { en: "Furnished", ru: "С мебелью" },
			},
		],
	},
	{
		idOfCard: "ph-004",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 219_444,
		stats: {
			amountOfBeds: 1,
			amountOfBaths: 1,
			area: 80,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=patong",
				translations: { en: "Patong", ru: "Патонг" },
			},
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
			{
				code: "beneficial_price",
				color: "#10B981",
				translations: { en: "Best price", ru: "Выгодно" },
			},
			{
				code: "only_on_oneBaan",
				color: "#3B82F6",
				translations: { en: "Exclusive", ru: "Эксклюзив" },
			},
		],
	},
	{
		idOfCard: "ph-005",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 625_000,
		stats: {
			amountOfBeds: 4,
			amountOfBaths: 4,
			area: 145,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=rawai",
				translations: { en: "Rawai", ru: "Раваи" },
			},
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
			{
				code: "object_verified",
				color: "#10B981",
				translations: { en: "Verified", ru: "Проверено" },
			},
			{
				code: "with_furniture",
				color: "#3B82F6",
				translations: { en: "Furnished", ru: "С мебелью" },
			},
		],
	},
	{
		idOfCard: "ph-006",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 325_000,
		stats: {
			amountOfBeds: 2,
			amountOfBaths: 2,
			area: 111,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=bangtao",
				translations: { en: "Bang Tao", ru: "Банг Тао" },
			},
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
			{
				code: "beneficial_price",
				color: "#10B981",
				translations: { en: "Best price", ru: "Выгодно" },
			},
			{
				code: "with_furniture",
				color: "#3B82F6",
				translations: { en: "Furnished", ru: "С мебелью" },
			},
		],
	},
	{
		idOfCard: "ph-007",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 400_000,
		stats: {
			amountOfBeds: 3,
			amountOfBaths: 3,
			area: 122,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=surin",
				translations: { en: "Surin", ru: "Сурин" },
			},
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
			{
				code: "object_verified",
				color: "#10B981",
				translations: { en: "Verified", ru: "Проверено" },
			},
			{
				code: "only_on_oneBaan",
				color: "#3B82F6",
				translations: { en: "Exclusive", ru: "Эксклюзив" },
			},
		],
	},
	{
		idOfCard: "ph-008",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 229_167,
		stats: {
			amountOfBeds: 2,
			amountOfBaths: 2,
			area: 82,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=chalong",
				translations: { en: "Chalong", ru: "Чалонг" },
			},
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
			{
				code: "with_furniture",
				color: "#10B981",
				translations: { en: "Furnished", ru: "С мебелью" },
			},
			{
				code: "beneficial_price",
				color: "#3B82F6",
				translations: { en: "Best price", ru: "Выгодно" },
			},
		],
	},
	{
		idOfCard: "ph-009",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 95_000,
		stats: {
			amountOfBeds: 0,
			amountOfBaths: 1,
			area: 38,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=phuket-town",
				translations: { en: "Phuket Town", ru: "Пхукет-Таун" },
			},
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
			{
				code: "beneficial_price",
				color: "#10B981",
				translations: { en: "Best price", ru: "Выгодно" },
			},
		],
	},
	{
		idOfCard: "ph-010",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 1_350_000,
		stats: {
			amountOfBeds: 5,
			amountOfBaths: 5,
			area: 310,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=nai-harn",
				translations: { en: "Nai Harn", ru: "Най Харн" },
			},
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
			{
				code: "object_verified",
				color: "#10B981",
				translations: { en: "Verified", ru: "Проверено" },
			},
			{
				code: "only_on_oneBaan",
				color: "#3B82F6",
				translations: { en: "Exclusive", ru: "Эксклюзив" },
			},
		],
	},
	{
		idOfCard: "ph-011",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 265_000,
		stats: {
			amountOfBeds: 2,
			amountOfBaths: 3,
			area: 140,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=mai-khao",
				translations: { en: "Mai Khao", ru: "Май Као" },
			},
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
			{
				code: "beneficial_price",
				color: "#10B981",
				translations: { en: "Best price", ru: "Выгодно" },
			},
		],
	},
	{
		idOfCard: "ph-012",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 120_000,
		stats: {
			amountOfBeds: 1,
			amountOfBaths: 1,
			area: 55,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=laguna",
				translations: { en: "Laguna", ru: "Лагуна" },
			},
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
			{
				code: "with_furniture",
				color: "#10B981",
				translations: { en: "Furnished", ru: "С мебелью" },
			},
		],
	},
	{
		idOfCard: "ph-013",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 210_000,
		stats: {
			amountOfBeds: 3,
			amountOfBaths: 2,
			area: 100,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=thalang",
				translations: { en: "Thalang", ru: "Таланг" },
			},
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
			{
				code: "object_verified",
				color: "#10B981",
				translations: { en: "Verified", ru: "Проверено" },
			},
		],
	},
	{
		idOfCard: "ph-014",
		apartmentImages: { images: Array(8).fill("/backgroundImage.png") },
		priceUsd: 180_000,
		stats: {
			amountOfBeds: 1,
			amountOfBaths: 2,
			area: 90,
		},
		agentLogo: "/agent-logo.svg",
		contactWhatsApp: { path: "https://wa.me/66612345678" },
		contactWithSalesman: { path: "tel:+66612345678" },
		breadcrumbs: [
			{ href: "/", translations: { en: "Main page", ru: "Главная" } },
			{
				href: "/catalog",
				translations: { en: "Catalog", ru: "Каталог" },
			},
			{
				href: "/catalog?location=panwa",
				translations: { en: "Cape Panwa", ru: "Кейп Панва" },
			},
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
			{
				code: "only_on_oneBaan",
				color: "#3B82F6",
				translations: { en: "Exclusive", ru: "Эксклюзив" },
			},
		],
	},
];
