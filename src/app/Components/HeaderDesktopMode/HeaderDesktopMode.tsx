"use client";
import styles from "./HeaderDesktopMode.module.css";
import Image from "next/image";
import Dropdown from "../Dropdown";
import logoDesktop from "../../../../public/desktopLogo.svg";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { routing } from "@/i18n/routing";
import russianFlag from "../../../../public/russianFlag.png";
import englishFlag from "../../../../public/UKflag.png";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { HeaderModesProps, SupportedLngs } from "@/app/types/Header.types";
import { useLocale } from "next-intl";
const HeaderDesktopMode = ({
	burgerOptions,
	typesOfCurrency,
	handleLanguageChange,
}: HeaderModesProps) => {
	const t = useTranslations();
	const path = usePathname();
	const [currentCurrency, setCurrency] =
		useState<(typeof typesOfCurrency)[number]>("THB");
	const currentLanguage = useLocale() ?? routing.defaultLocale;
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.desktop__container}>
					<div className={styles.logo__container}>
						<Image
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
													setCurrency(currencyType)
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
										? russianFlag
										: englishFlag
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
