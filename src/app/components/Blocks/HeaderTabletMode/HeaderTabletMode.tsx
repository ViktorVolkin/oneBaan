"use client";
import styles from "./HeaderTabletMode.module.css";
import Dropdown from "@/app/components/UI/Dropdown";
import logoDesktop from "@/../public/desktopLogo.svg";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import burgerMenu from "@/../public/burgerMenu.svg";
import SidebarMenu from "@/app/components/UI/SidebarMenu";
import { HeaderModesProps, SupportedLngs } from "@/app/types/Header.types";
import { useQueryParams } from "@/app/customHooks/useQueryParams";

const HeaderTabletMode = ({
	burgerOptions,
	typesOfCurrency,
	handleLanguageChange,
}: HeaderModesProps) => {
	const t = useTranslations();
	const currentLanguage = useLocale() ?? routing.defaultLocale;
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const { get, set } = useQueryParams();
	const [currentCurrency, setCurrency] =
		useState<(typeof typesOfCurrency)[number]>("THB");

	useEffect(() => {
		const c = (get("currency") || "").toUpperCase();
		if (c && (typesOfCurrency as readonly string[]).includes(c)) {
			setCurrency(c as any);
		}
	}, [get, typesOfCurrency]);

	const updateCurrencyInUrl = (currency: string) => {
		const next = currency.toUpperCase();
		set("currency", next, {
			reset: ["page"],
			method: "replace",
			scroll: false,
		});
		setCurrency(next as any);
	};

	return (
		<div className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.tablet__container}>
					<div className={styles.logo__container}>
						<img
							src={logoDesktop}
							alt="Company logo"
							className={styles.logoDesktop}
						/>
					</div>
					<div className={styles.navigation__panel}>
						<div className={styles.currentCurrency}>
							<Dropdown buttonText={currentCurrency}>
								<>
									{typesOfCurrency.map(
										(currencyType: string) => (
											<button
												key={currencyType}
												onClick={() =>
													updateCurrencyInUrl(
														currencyType
													)
												}
											>
												{currencyType}
											</button>
										)
									)}
								</>
							</Dropdown>
						</div>

						<div className={styles.tablet__changeLanguage}>
							<Dropdown
								iconBeforeText={
									currentLanguage === "ru"
										? "/russianFlag.png"
										: "/UKflag.png"
								}
								sideToPopUp="left"
								buttonText={
									currentLanguage === "ru"
										? "Русский"
										: "English"
								}
							>
								<>
									{routing.locales
										.filter(
											(lang: string) =>
												lang !== currentLanguage
										)
										.map((item: string) => (
											<button
												key={item}
												onClick={() =>
													handleLanguageChange(
														item as SupportedLngs
													)
												}
											>
												{item === "ru"
													? "Русский"
													: "English"}
											</button>
										))}
								</>
							</Dropdown>
						</div>

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
					</div>

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
					</SidebarMenu>
				</div>
			</nav>
		</div>
	);
};

export default HeaderTabletMode;
