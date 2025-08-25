import SellApartmentsCatalog from "@/app/сomponents/Pages/SellApartmentsCatalog";
import { CATALOG_FILTER_OPTIONS_DEFAULT } from "@/app/constants/common";
import Footer from "@/app/сomponents/Blocks/Footer";

export default function Page() {
	return (
		<>
			<SellApartmentsCatalog
				title="Недвижимость в Таиланде от собственников"
				breadcrumbs={[
					{ label: "catalog.mainPage", href: "/" },
					{ label: "catalog.property", href: "/catalog" },
					{ label: "catalog.rentPage", href: "/catalog/rent" },
				]}
				mainSortsIcons={[
					{
						iconPath: "/BiBuildings_rent.svg",
						iconQueryName: "type",
						iconQueryValue: "building",
						nameForIconsPhone: "catalog.building",
					},
					{
						iconPath: "/adress_rent.svg",
						iconQueryName: "type",
						iconQueryValue: "idk",
						nameForIconsPhone: "catalog.ready",
					},
				]}
				optionsLocation={CATALOG_FILTER_OPTIONS_DEFAULT.optionsLocation}
				optionsTypesOfProperty={
					CATALOG_FILTER_OPTIONS_DEFAULT.optionsTypesOfProperty
				}
				optionsBaths={CATALOG_FILTER_OPTIONS_DEFAULT.optionsBaths}
				optionsBedrooms={CATALOG_FILTER_OPTIONS_DEFAULT.optionsBedrooms}
				optionsMinPrice={CATALOG_FILTER_OPTIONS_DEFAULT.optionsMinPrice}
				optionsMaxPrice={CATALOG_FILTER_OPTIONS_DEFAULT.optionsMaxPrice}
				optionsSortBy={CATALOG_FILTER_OPTIONS_DEFAULT.optionsSortBy}
				optionsPriceForPhoneMode={
					CATALOG_FILTER_OPTIONS_DEFAULT.optionsMinAndMaxPriceForPhoneMode
				}
				isRentPage={true}
			/>
			<Footer></Footer>
		</>
	);
}
