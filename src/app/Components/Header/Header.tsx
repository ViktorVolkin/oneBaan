"use client";
import styles from "./Header.module.css";
import { useMediaQuery } from "@/app/CustomHooks/MediaQuery";
import HeaderPhoneMode from "../HeaderPhoneMode";
import HeaderTabletMode from "../HeaderTabletMode";
import HeaderDesktopMode from "../HeaderDesktopMode";
import { usePathname, useSearchParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
const preparedData = [
	{ leadsTo: "/", text: "header.home" },
	{ leadsTo: "/catalog", text: "header.catalog" },
	{ leadsTo: "/sell", text: "header.sell" },
	{ leadsTo: "/agents", text: "header.agents" },
];

import type { HeaderProps, SupportedLngs } from "@/app/types/Header.types";

const Header = ({
	burgerOptions = preparedData,
	typesOfCurrency = ["THB", "RUB", "USD", "EUR"] as const,
	handleLanguageChange: handleLanguageChangeProp,
}: HeaderProps) => {
	let handleLanguageChange = handleLanguageChangeProp;
	if (!handleLanguageChange) {
		const path = usePathname();
		const searchParams = useSearchParams();
		const router = useRouter();
		handleLanguageChange = (locale: SupportedLngs) => {
			if (!router || !path || !searchParams) return;
			const queryString = searchParams.toString();
			const hash =
				typeof window !== "undefined" ? window.location.hash : "";

			const segments = path
				? path
						.split("/")
						.filter((i) => typeof i === "string" && i.length > 0)
				: [];

			if (
				segments[0] &&
				routing.locales.includes(segments[0] as SupportedLngs)
			) {
				segments.shift();
			}

			const cleanPath = "/" + segments.join("/");
			const finalPath =
				cleanPath +
				(queryString ? `?${queryString}` : "") +
				(hash || "");

			router.push(finalPath || "/", { locale });
		};
	}
	const isMobile = useMediaQuery("(max-width: 768px)");
	const isTablet = useMediaQuery("(min-width: 768px) and (max-width:1440px)");

	if (isMobile) {
		return (
			<HeaderPhoneMode
				burgerOptions={burgerOptions}
				typesOfCurrency={typesOfCurrency}
				handleLanguageChange={handleLanguageChange}
			/>
		);
	} else if (isTablet) {
		return (
			<HeaderTabletMode
				burgerOptions={burgerOptions}
				typesOfCurrency={typesOfCurrency}
				handleLanguageChange={handleLanguageChange}
			/>
		);
	} else {
		return (
			<HeaderDesktopMode
				burgerOptions={burgerOptions}
				typesOfCurrency={typesOfCurrency}
				handleLanguageChange={handleLanguageChange}
			/>
		);
	}
};

export default Header;
