export interface CardDetailedLocationProps {
	image: string;
	countryName: string;
	breadcrumbs: { label: string; href: string }[];
	toLocationHref: string;
	Mode?: "Rent" | "Complex";
}
