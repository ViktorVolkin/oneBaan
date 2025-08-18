"use client";
import styles from "./HeaderDesktopMode.module.css";
import Dropdown from "@/app/сomponents/UI/Dropdown";
import logoDesktop from "@/../public/desktopLogo.svg";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { HeaderModesProps, SupportedLngs } from "@/app/types/Header.types";
import { useQueryParams } from "@/app/сustomHooks/useQueryParams";

const HeaderDesktopMode = ({
	burgerOptions,
	typesOfCurrency,
	handleLanguageChange,
}: HeaderModesProps) => {
	const t = useTranslations();
	const currentLanguage = useLocale() ?? routing.defaultLocale;
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
		}); // <<
		setCurrency(next as any);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.desktop__container}>
					<div className={styles.logo__container}>
						<img
							src={logoDesktop}
							alt="Company logo"
							className={styles.logoDesktop}
						/>
					</div>
					<div className={styles.navigation__panel}>
						{burgerOptions.map((item) => (
							<Link
								key={item.leadsTo}
								href={item.leadsTo}
								className={styles.navigation__link}
							>
								{t(item.text)}
							</Link>
						))}

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

						<div className={styles.desktop__changeLanguage}>
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
					</div>
				</div>
			</nav>
		</header>
	);
};

export default HeaderDesktopMode;
