"use client";
import styles from "./SellCardDetailed.module.css";
import CardDetailedPreviewBlock from "../../Blocks/CardDetailedPreviewBlock/CardDetailedPreviewBlock";
import DetailsOfOffer from "../../Blocks/DetailsOfOffer";
import smth from "@/../public/iconTags/BiCar.svg?component";
import ComplexConveniences from "../../Blocks/ComplexConveniences";
import MoreOffersFromThisComplex from "../../Blocks/MoreOffersFromThisComplex";
import { CATALOG_FILTER_OPTIONS_DEFAULT } from "@/app/constants/common";
import SubscribeForNotifications from "../../Blocks/SubscribeForNotifications";
import CardDetailedLocation from "../../Blocks/CardDetailedLocation";
import ListingGranted from "../../Blocks/ListingGranted";
export function SellCardDetailedPage() {
	return (
		<div className={styles.sellCardContainer}>
			<CardDetailedPreviewBlock
				images={[
					"/backgroundImage.png",
					"/backgroundImage.png",
					"/backgroundImage.png",
					"/backgroundImage.png",
					"/backgroundImage.png",
				]}
				offerId={"123"}
				isRent={false}
			/>
			<div className={styles.sellCardContent}>
				<DetailsOfOffer
					isRent={false}
					offerDetail={
						"Апартаменты на продажу в Blue Canyon Golf And Country Club Home"
					}
					price={"$1,200,000"}
					propDetailsCard={[
						{
							title: "something",
							text: "123",
							icon: "/BiHeart.svg",
						},
						{
							title: "something",
							text: "234",
							icon: "/BiHeart.svg",
						},
						{
							title: "something",
							text: "456",
							icon: "/BiHeart.svg",
						},
						{
							title: "something",
							text: "456",
							icon: "/BiHeart.svg",
						},
					]}
					subText="$15,200 / м² "
					breadcrumbs={[
						{
							href: "#",
							label: "Пхукет",
						},
						{
							href: "#",
							label: "Бангтао",
						},
						{
							href: "#",
							label: "Апартаменты",
						},
					]}
					icons={[
						{
							iconPath: "/BiBed.svg",
							value: "4 спальни",
						},
						{
							iconPath: "/BiBath.svg",
							value: "4 ванные",
						},
						{
							iconPath: "/BiBorderOuter.svg",
							value: "203",
						},
					]}
					tagsSell={{
						tags: [
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "green",
							},
						],
					}}
					offerFeatureText={
						"Комплекс находится в шаговой доступности до моря, на ресепшене можно организовать ее полное обслуживание. Эта угловая квартира, более светлая и с меньшим количеством соседей."
					}
					tagsDetailed={{
						tags: [
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
							{
								svgIconComponent: smth,
								label: "yooooo",
								color: "yellow",
							},
						],
						sizeOfTheIcons: "16px",
					}}
					detailsOnOneBaan={{
						daysOnOneBaan: 12,
						amountOfViews: 14,
					}}
				/>
				<div className={styles.complexBlock}>
					<ComplexConveniences
						complexName={"Blue Canyon Golf And Country Club Home"}
						complexImage={"/backgroundImage.png"}
						yearOfBuilding={2022}
						amountOfApartments={232}
						builder={"Sino-Thai Engineering & Construction"}
						tags={[
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
							{
								svgIconComponent: smth,
								label: "Парковка",
								color: "#44337A",
							},
						]}
					/>
				</div>
				<div className={styles.moreOffersFromComplex}>
					<MoreOffersFromThisComplex
						nameOfComplex={"Blue Canyon Golf And Country Club Home"}
						optionsBedrooms={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsBedrooms
						}
						optionsSortBy={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsSortBy
						}
						optionsPriceForPhoneMode={
							CATALOG_FILTER_OPTIONS_DEFAULT.optionsMinAndMaxPriceForPhoneMode
						}
						cards={[
							{
								idOfCard: "1",
								apartmentImages: {
									images: [
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
									],
								},
								price: "$1,200,000",
								pricePerMeter: "$15,200 за м² ",
								iconRow: {
									icons: [
										{
											iconPath: "/BiBed.svg",
											value: "2",
										},
										{
											iconPath: "/BiBath.svg",
											value: "3",
										},
										{
											iconPath: "/BiBorderOuter.svg",
											value: "2010",
										},
									],
									showLines: true,
								},
								details: "jgjhghgysjgfgfgfgfgfgffgfgfgys",
								cardDescription: "hhg",
								agentLogo: "/agent-logo.svg",
								tags: [],
								contactWhatsApp: {
									path: "",
								},
								contactWithSalesman: {
									path: "",
								},
								whenPosted: "",
								breadcrumbs: [],
							},
							{
								idOfCard: "2",
								apartmentImages: {
									images: [
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
									],
								},
								price: "$1,200,000",
								pricePerMeter: "$15,200 за м² ",
								iconRow: {
									icons: [
										{
											iconPath: "/BiBed.svg",
											value: "2",
										},
										{
											iconPath: "/BiBath.svg",
											value: "3",
										},
										{
											iconPath: "/BiBorderOuter.svg",
											value: "2010",
										},
									],
									showLines: true,
								},
								details: "jgjhghgysjgfgfgfgfgfgffgfgfgys",
								cardDescription: "hhg",
								agentLogo: "/agent-logo.svg",
								tags: [],
								contactWhatsApp: {
									path: "",
								},
								contactWithSalesman: {
									path: "",
								},
								whenPosted: "",
								breadcrumbs: [],
							},
							{
								idOfCard: "3",
								apartmentImages: {
									images: [
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
									],
								},
								price: "$1,200,000",
								pricePerMeter: "$15,200 за м² ",
								iconRow: {
									icons: [
										{
											iconPath: "/BiBed.svg",
											value: "2",
										},
										{
											iconPath: "/BiBath.svg",
											value: "3",
										},
										{
											iconPath: "/BiBorderOuter.svg",
											value: "2010",
										},
									],
									showLines: true,
								},
								details: "jgjhghgysjgfgfgfgfgfgffgfgfgys",
								cardDescription: "hhg",
								agentLogo: "/agent-logo.svg",
								tags: [],
								contactWhatsApp: {
									path: "",
								},
								contactWithSalesman: {
									path: "",
								},
								whenPosted: "",
								breadcrumbs: [],
							},
							{
								idOfCard: "4",
								apartmentImages: {
									images: [
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
										"/backgroundImage.png",
									],
								},
								price: "$1,200,000",
								pricePerMeter: "$15,200 за м² ",
								iconRow: {
									icons: [
										{
											iconPath: "/BiBed.svg",
											value: "2",
										},
										{
											iconPath: "/BiBath.svg",
											value: "3",
										},
										{
											iconPath: "/BiBorderOuter.svg",
											value: "2010",
										},
									],
									showLines: true,
								},
								details: "jgjhghgysjgfgfgfgfgfgffgfgfgys",
								cardDescription: "hhg",
								agentLogo: "/agent-logo.svg",
								tags: [],
								contactWhatsApp: {
									path: "",
								},
								contactWithSalesman: {
									path: "",
								},
								whenPosted: "",
								breadcrumbs: [],
							},
						]}
						isRent={false}
					></MoreOffersFromThisComplex>
				</div>
				<div className={styles.subscribeForNotifications}>
					<SubscribeForNotifications />
				</div>
				<div className={styles.location}>
					<CardDetailedLocation
						image={"/backgroundImage.png"}
						breadcrumbs={[
							{
								label: "Пхукет",
								href: "#",
							},
							{
								label: "Пляж Багтао",
								href: "#",
							},
						]}
						toLocationHref={""}
						countryName={"Таиланд"}
					></CardDetailedLocation>
				</div>
				<div className={styles.listingGranted}>
					<ListingGranted
						agentIcon={"/agent-logo.svg"}
						agentName={"Apart Homes Pattaya Incorporated"}
						agentExperienceOnPhuket={"20 лет"}
						phuketWorkingHours={"12-24"}
						languages={"Английский,Русский,Тайский"}
						allOffers={{
							href: "#",
							amountOfOffers: "12",
						}}
						agentStatus={{
							text: "online",
							img: "/onlineIcon.svg",
						}}
						phoneHref={""}
						whatsAppHref={""}
					></ListingGranted>
				</div>
			</div>
		</div>
	);
}
