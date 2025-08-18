"use client";
import styles from "./HeaderPhoneMode.module.css";
import Dropdown from "@/app/сomponents/UI/Dropdown";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect, useCallback } from "react";
import { routing } from "@/i18n/routing";
import burgerMenu from "@/../public/burgerMenu.svg";
import { SupportedLngs, HeaderModesProps } from "@/app/types/Header.types";
import { Link } from "@/i18n/navigation";
import SidebarMenu from "@/app/сomponents/UI/SidebarMenu";
import AccordionMenuItem from "../../UI/AccordionMenuItem";
import SearchIcon from "@/../public/searchIcon.svg?component";
import { useQueryParams } from "@/app/сustomHooks/useQueryParams";
import SearchBox from "../../UI/searchBox";
const HeaderPhoneMode = ({
	burgerOptions,
	handleLanguageChange,
	typesOfCurrency,
	hasCatalog = false,
}: HeaderModesProps & { hasCatalog?: boolean }) => {
	const t = useTranslations();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const currentLanguage = useLocale() ?? routing.defaultLocale;

	const { get, set } = useQueryParams();

	const [currentCurrency, setCurrency] =
		useState<(typeof typesOfCurrency)[number]>("THB");

	useEffect(() => {
		const fromUrl = (get("currency") || "").toUpperCase();
		if (
			fromUrl &&
			(typesOfCurrency as readonly string[]).includes(fromUrl) &&
			fromUrl !== currentCurrency
		) {
			setCurrency(fromUrl as any);
		}
	}, [get, typesOfCurrency, currentCurrency]);

	const commitSearch = useCallback(
		(v: string) => {
			set("search", v === "" ? null : v, {
				reset: ["page"],
				method: "replace",
				scroll: false,
			});
		},
		[set]
	);

	const updateCurrencyInUrl = useCallback(
		(currency: string) => {
			const next = currency.toUpperCase();
			if (next === currentCurrency) return;
			set("currency", next, {
				reset: ["page"],
				method: "replace",
				scroll: false,
			});
			setCurrency(next as any);
		},
		[currentCurrency, set]
	);

	return (
		<header className={styles.header}>
			<nav className={hasCatalog ? styles.headerAddedCatalog : ""}>
				<div className={styles.mobile__container}>
					<div
						className={`${styles.mobile__changeLanguage} ${
							hasCatalog ? styles.hidden : ""
						}`}
					>
						<Dropdown
							sideToPopUp="right"
							buttonText={
								currentLanguage === "ru" ? "RUS" : "ENG"
							}
						>
							<>
								{routing.locales
									.filter((lang) => lang !== currentLanguage)
									.map((item) => (
										<button
											key={item}
											onClick={() =>
												handleLanguageChange(
													item as SupportedLngs
												)
											}
										>
											{item === "ru" ? "RUS" : "ENG"}
										</button>
									))}
							</>
						</Dropdown>
					</div>

					<div className={styles.logo__container}>
						<img
							src="/logo.svg"
							alt="Company logo"
							className={styles.phoneLogo}
						/>
					</div>

					{hasCatalog && (
						<div className={styles.catalog__searchContainer}>
							<SearchIcon
								className={styles.catalog__searchIcon}
								fill="white"
							/>

							<SearchBox
								placeholder={t("header.catalogPlaceholder")}
								aria-label={t("header.catalogPlaceholder")}
								className={styles.catalogInput}
								onCommit={commitSearch}
							/>
						</div>
					)}

					<button
						className={styles.burger__container}
						onClick={() => setIsSidebarOpen(true)}
					>
						<img
							src={burgerMenu}
							alt="Menu"
							className={styles.burgerMenu}
						/>
					</button>

					<SidebarMenu
						isOpen={isSidebarOpen}
						onClose={() => setIsSidebarOpen(false)}
					>
						{burgerOptions.map((item, idx) => (
							<Link
								key={idx}
								href={item.leadsTo}
								onClick={() => setIsSidebarOpen(false)}
							>
								{t(item.text)}
							</Link>
						))}

						<AccordionMenuItem title={currentCurrency}>
							{typesOfCurrency
								.filter((item) => item !== currentCurrency)
								.map((currency) => (
									<button
										key={currency}
										onClick={() => {
											updateCurrencyInUrl(currency);
											setIsSidebarOpen(false);
										}}
									>
										{currency}
									</button>
								))}
						</AccordionMenuItem>

						{hasCatalog && (
							<AccordionMenuItem
								title={currentLanguage === "ru" ? "RUS" : "ENG"}
							>
								{routing.locales
									.filter((lang) => lang !== currentLanguage)
									.map((item) => (
										<button
											key={item}
											onClick={() =>
												handleLanguageChange(
													item as SupportedLngs
												)
											}
										>
											{item === "ru" ? "RUS" : "ENG"}
										</button>
									))}
							</AccordionMenuItem>
						)}
					</SidebarMenu>
				</div>
			</nav>
		</header>
	);
};

export default HeaderPhoneMode;
