"use client";
import styles from "./Header.module.css";
import { useMediaQuery } from "@/app/сustomHooks/MediaQuery";
import HeaderPhoneMode from "../HeaderPhoneMode";
import HeaderTabletMode from "../HeaderTabletMode";
import HeaderDesktopMode from "../HeaderDesktopMode";
import { routing } from "@/i18n/routing";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useMemo, useEffect } from "react";
import type { HeaderProps, SupportedLngs } from "@/app/types/Header.types";
import { useQueryParams } from "@/app/сustomHooks/useQueryParams";
import { NAVIGATION_CONSTANTS } from "@/app/constants/common";
import { CURRENCY_CONSTANTS } from "@/app/constants/common";
const Header = ({
	burgerOptions = NAVIGATION_CONSTANTS.BURGER_OPTIONS,
	typesOfCurrency = CURRENCY_CONSTANTS.TYPES,
	handleLanguageChange: handleLanguageChangeProp,
	matchMediaPhone,
	matchMediaTablet,
	matchMediaDesktop,
	hasCatalog = false,
}: HeaderProps & {
	matchMediaPhone?: string;
	matchMediaTablet?: string;
	matchMediaDesktop?: string;
	hasCatalog?: boolean;
}) => {
	const router = useRouter();
	const path = usePathname();

	const { get, set } = useQueryParams();

	useEffect(() => {
		const c = (get("currency") || "").toUpperCase();
		if (c && (typesOfCurrency as readonly string[]).includes(c)) return;
		set("currency", typesOfCurrency[0], {
			method: "replace",
			scroll: false,
		});
	}, [get, set, typesOfCurrency]);

	const handleLanguageChange = useMemo(() => {
		if (handleLanguageChangeProp) return handleLanguageChangeProp;

		return (locale: SupportedLngs) => {
			let segments = path.split("/").filter(Boolean);
			if (
				segments.length &&
				routing.locales.includes(segments[0] as SupportedLngs)
			) {
				segments = segments.slice(1);
			}
			const cleanPath = "/" + segments.join("/");
			const qs =
				typeof window !== "undefined" ? window.location.search : "";
			const hash =
				typeof window !== "undefined" ? window.location.hash : "";
			router.replace(cleanPath + qs + hash, { locale });
		};
	}, [handleLanguageChangeProp, path, router]);

	const isMobile = useMediaQuery(matchMediaPhone ?? "(max-width: 768px)");
	const isTablet = useMediaQuery(
		matchMediaTablet ?? "(min-width: 768px) and (max-width:1440px)"
	);
	const isDesktop = useMediaQuery(matchMediaDesktop ?? "(min-width: 1440px)");

	if (isMobile) {
		return (
			<HeaderPhoneMode
				burgerOptions={burgerOptions}
				typesOfCurrency={typesOfCurrency}
				handleLanguageChange={handleLanguageChange}
				hasCatalog={hasCatalog}
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
	} else if (isDesktop) {
		return (
			<HeaderDesktopMode
				burgerOptions={burgerOptions}
				typesOfCurrency={typesOfCurrency}
				handleLanguageChange={handleLanguageChange}
			/>
		);
	}
	return null;
};

export default Header;
