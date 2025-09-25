export type Locale = "en" | "ru";

export type ApiTag = {
	code:
		| "object_verified"
		| "only_on_onebaan"
		| "beneficial_price"
		| "with_furniture"
		| "aqua_park"
		| "balcony"
		| "local_bar_on_roof"
		| "pool"
		| "pool_for_pets"
		| "library"
		| "billiard"
		| "wellness_center"
		| "cctv"
		| "exit_to_pool"
		| "dressing_room"
		| "hydro_therapy"
		| "golf_simulator"
		| "jacuzzi"
		| "aqua_park_for_kids"
		| "pool_for_kids"
		| "kids_club"
		| "access_by_card"
		| "duplex"
		| "electro_auto_charge"
		| "bbq_zone"
		| "zone_for_pets"
		| "zone_for_rest"
		| "zone_for_rest_on_roof"
		| "wifi"
		| "yoga_studio"
		| "cabinet"
		| "karaoke"
		| "cinema"
		| "outdoor_cinema"
		| "convention_hall"
		| "concierge_service"
		| "coworking"
		| "roofed_parking"
		| "allowed_with_pets"
		| "onsen"
		| "guarded_whole_day"
		| "parking"
		| "on_first_line"
		| "penthouse"
		| "ceiling_from_3m"
		| "laundry_room"
		| "restaurant"
		| "reception"
		| "garden_for_walks"
		| "garden_on_roof"
		| "sauna"
		| "climbing_gym"
		| "furniture_project"
		| "tenis_court"
		| "terrace_on_roof"
		| "only_on_onebaan_project"
		| "shopping_center"
		| "on_the_corner"
		| "cleaning"
		| "care_for_pets"
		| "garden_care"
		| "smart_house"
		| "fitness_house"
		| "hammam"
		| "private_bbq_zone"
		| "private_parking"
		| "private_pool_in_separate_apartments"
		| "private_pool"
		| "private_jacuzzi"
		| "pool_cleaning"
		| "shuttle_to_beach"
		| "kids_education_nearby"
		| "eco_design"
		| "electricity_and_water"
		| "insects_cleanse"
		| "separate_entrance";
};

export type CatalogBreadcrumb = {
	href: string;
	translations: Record<Locale, string>;
};

export type CatalogItem = {
	idOfCard: string;
	apartmentImages: { images: string[] };
	priceUsd: number;
	pricePerMeterUsd: number;
	stats?: {
		amountOfBeds: number;
		amountOfBaths: number;
		area: number;
	};
	agentLogo: string;
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	breadcrumbs: CatalogBreadcrumb[];
	ageDays: number;
	translations: {
		en: { cardDescription: string; details: string };
		ru: { cardDescription: string; details: string };
	};
	tags: ApiTag[];
};
type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type CatalogItemForUtil = SetOptional<
	CatalogItem,
	"pricePerMeterUsd" | "tags"
>;

export type ListingCardBase = {
	idOfCard: string;
	apartmentImages: { images: string[] };
	price: string;
	pricePerMeter: string;
	details: string;
	cardDescription: string;
	agentLogo: string;
	tags: { code: ApiTag["code"] }[];
	contactWhatsApp: { path: string };
	contactWithSalesman: { path: string };
	whenPosted: string;
	breadcrumbs: { href: string; label: string }[];
};
