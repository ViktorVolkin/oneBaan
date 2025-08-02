"use client";
import styles from "./HeaderTabletMode.module.css";
import Image from "next/image";
import Dropdown from "../Dropdown";
import logoDesktop from "../../../../public/desktopLogo.svg";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { routing } from "@/i18n/routing";
import russianFlag from "../../../../public/russianFlag.png";
import englishFlag from "../../../../public/UKflag.png";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import burgerMenu from "../../../../public/burgerMenu.svg";
import SidebarMenu from "../SidebarMenu";
import { HeaderModesProps, SupportedLngs } from "@/app/types/Header.types";

const HeaderTabletMode = ({
	burgerOptions,
	typesOfCurrency,
	handleLanguageChange,
}: HeaderModesProps) => {
	const t = useTranslations();
	const path = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [currentCurrency, setCurrency] =
		useState<(typeof typesOfCurrency)[number]>("THB");
	const currentLanguage = useLocale() ?? routing.defaultLocale;
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.tablet__container}>
					<div className={styles.logo__container}>
						<Image
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
						<div className={styles.tablet__changeLanguage}>
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
						<button
							className={styles.burger__container}
							onClick={() => setIsSidebarOpen(true)}
						>
							<Image
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
		</header>
	);
};

export default HeaderTabletMode;
