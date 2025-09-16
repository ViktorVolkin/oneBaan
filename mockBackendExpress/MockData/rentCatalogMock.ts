import type { CatalogItem } from "../types/ApiListingCard";

export const rentCatalogMock: Omit<CatalogItem, "pricePerMeterUsd" | "tags">[] =
	[
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
			ageDays: 5,
			translations: {
				en: {
					cardDescription: "2-bedroom condo in Kata with sea view",
					details: "3/7 fl | sea view",
				},
				ru: {
					cardDescription: "Кондо в Ката, 2 спальни, вид на море",
					details: "3/7 этаж | вид на море",
				},
			},
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
			ageDays: 2,
			translations: {
				en: {
					cardDescription: "Sea-view villa in Karon, 3 bedrooms",
					details: "2/2 fl | sea view",
				},
				ru: {
					cardDescription: "Вилла в Карон, 3 спальни, вид на море",
					details: "2/2 этаж | вид на море",
				},
			},
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
			ageDays: 7,
			translations: {
				en: {
					cardDescription: "Kamala hillside apartment, 2 bedrooms",
					details: "5/8 fl | hill view",
				},
				ru: {
					cardDescription: "Апартаменты на холме Камала, 2 спальни",
					details: "5/8 этаж | вид на холмы",
				},
			},
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
			ageDays: 1,
			translations: {
				en: {
					cardDescription: "Patong city condo, 1 bedroom",
					details: "8/15 fl | city view",
				},
				ru: {
					cardDescription: "Кондо Патонг, 1 спальня",
					details: "8/15 этаж | вид на город",
				},
			},
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
			ageDays: 9,
			translations: {
				en: {
					cardDescription: "Rawai family villa, 4 bedrooms",
					details: "2/2 fl | garden view",
				},
				ru: {
					cardDescription: "Семейная вилла в Раваи, 4 спальни",
					details: "2/2 этаж | вид на сад",
				},
			},
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
			ageDays: 3,
			translations: {
				en: {
					cardDescription: "Bang Tao resort apartment, 2 bedrooms",
					details: "4/6 fl | pool access",
				},
				ru: {
					cardDescription: "Апартаменты в Банг Тао, 2 спальни",
					details: "4/6 этаж | у бассейна",
				},
			},
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
			ageDays: 0,
			translations: {
				en: {
					cardDescription: "Surin modern condo, 3 bedrooms",
					details: "7/12 fl | sea view",
				},
				ru: {
					cardDescription: "Современное кондо Сурин, 3 спальни",
					details: "7/12 этаж | вид на море",
				},
			},
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
			ageDays: 4,
			translations: {
				en: {
					cardDescription: "Chalong cozy condo, 2 bedrooms",
					details: "6/9 fl | mountain view",
				},
				ru: {
					cardDescription: "Уютное кондо Чалонг, 2 спальни",
					details: "6/9 этаж | вид на горы",
				},
			},
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
			ageDays: 6,
			translations: {
				en: {
					cardDescription: "Phuket Town studio",
					details: "3/8 fl | city center",
				},
				ru: {
					cardDescription: "Студия в Пхукет-Тауне",
					details: "3/8 этаж | центр",
				},
			},
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
			ageDays: 8,
			translations: {
				en: {
					cardDescription: "Nai Harn luxury villa, 5 bedrooms",
					details: "2/2 fl | private pool",
				},
				ru: {
					cardDescription: "Роскошная вилла Най Харн, 5 спален",
					details: "2/2 этаж | личный бассейн",
				},
			},
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
			ageDays: 10,
			translations: {
				en: {
					cardDescription: "Mai Khao townhouse, 2BR 3BA",
					details: "1/2 fl | quiet area",
				},
				ru: {
					cardDescription: "Таунхаус Май Као, 2 спальни 3 с/у",
					details: "1/2 этаж | тихий район",
				},
			},
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
			ageDays: 11,
			translations: {
				en: {
					cardDescription: "Laguna condo, 1 bedroom",
					details: "4/6 fl | lagoon view",
				},
				ru: {
					cardDescription: "Кондо Лагуна, 1 спальня",
					details: "4/6 этаж | вид на лагуну",
				},
			},
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
			ageDays: 12,
			translations: {
				en: {
					cardDescription: "Thalang condo, 3 bedrooms",
					details: "9/12 fl | family area",
				},
				ru: {
					cardDescription: "Кондо Таланг, 3 спальни",
					details: "9/12 этаж | семейный район",
				},
			},
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
			ageDays: 4,
			translations: {
				en: {
					cardDescription: "Cape Panwa loft, 1BR 2BA",
					details: "5/7 fl | near sea",
				},
				ru: {
					cardDescription: "Лофт Кейп Панва, 1 спальня 2 с/у",
					details: "5/7 этаж | близко к морю",
				},
			},
		},
	];
