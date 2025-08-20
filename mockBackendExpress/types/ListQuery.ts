export type ListQuery = {
	search: string;
	location: string;
	bedsMin?: number;
	bathsMin?: number;
	minPrice?: number;
	maxPrice?: number;
	sortBy: "recommended" | "newest" | "oldest" | "popular";
	locale: "en" | "ru";
	currency: "USD" | "THB" | "RUB" | "EUR";
	page: number;
	limit: number;
};
