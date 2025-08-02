"use client";
import styles from "./HeaderPhoneMode.module.css";
import Image from "next/image";
import Dropdown from "../Dropdown";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import burgerMenu from "../../../../public/burgerMenu.svg";
import { SupportedLngs, HeaderModesProps } from "@/app/types/Header.types";
import { Link } from "@/i18n/navigation";
import SidebarMenu from "../SidebarMenu";
import logo from "../../../../public/logo.svg";

const HeaderPhoneMode = ({
	burgerOptions,
	handleLanguageChange,
}: HeaderModesProps) => {
	const t = useTranslations();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const currentLanguage = useLocale() ?? routing.defaultLocale;
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.mobile__container}>
					<div className={styles.mobile__changeLanguage}>
						<Dropdown
							sideToPopUp="right"
							buttonText={
								currentLanguage === "ru" ? "RUS" : "ENG"
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
											{item === "ru" ? "RUS" : "ENG"}
										</button>
									))}
							</>
						</Dropdown>
					</div>
					<div className={styles.logo__container}>
						<Image
							src={logo}
							alt="Company logo"
							className={styles.phoneLogo}
						/>
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

export default HeaderPhoneMode;
