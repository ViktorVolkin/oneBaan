"use client";
import styles from "./Header.module.css";
import HeaderPhoneMode from "../HeaderPhoneMode";
import HeaderTabletMode from "../HeaderTabletMode";
import HeaderDesktopMode from "../HeaderDesktopMode";
import { routing } from "@/i18n/routing";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useMemo, useEffect } from "react";
import type { HeaderProps, SupportedLngs } from "@/app/types/Header.types";
import { useQueryParams } from "@/app/сustomHooks/useQueryParams";
import {
	NAVIGATION_CONSTANTS,
	CURRENCY_CONSTANTS,
} from "@/app/constants/common";

const Header = ({
	burgerOptions = NAVIGATION_CONSTANTS.BURGER_OPTIONS,
	typesOfCurrency = CURRENCY_CONSTANTS.TYPES,
	handleLanguageChange: handleLanguageChangeProp,
	maxPhoneWidth = 767.99,
	maxTabletWidth = 1439.99,
	minDesktopWidth = 1440,
	hasCatalog = false,
}: HeaderProps & {
	maxPhoneWidth?: number;
	maxTabletWidth?: number;
	minDesktopWidth?: number;
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

	const tabletMin = maxPhoneWidth + 0.01;

	return (
		<header>
			<div className="phone slot">
				<HeaderPhoneMode
					burgerOptions={burgerOptions}
					typesOfCurrency={typesOfCurrency}
					handleLanguageChange={handleLanguageChange}
					hasCatalog={hasCatalog}
				/>
			</div>

			<div className="tablet slot">
				<HeaderTabletMode
					burgerOptions={burgerOptions}
					typesOfCurrency={typesOfCurrency}
					handleLanguageChange={handleLanguageChange}
				/>
			</div>

			<div className="desktop slot">
				<HeaderDesktopMode
					burgerOptions={burgerOptions}
					typesOfCurrency={typesOfCurrency}
					handleLanguageChange={handleLanguageChange}
				/>
			</div>

			<style jsx>{`
				.slot {
					display: none;
				}

				@media (max-width: ${maxPhoneWidth}px) {
					.phone {
						display: block;
					}
				}

				@media (min-width: ${tabletMin}px) and (max-width: ${maxTabletWidth}px) {
					.tablet {
						display: block;
					}
				}

				@media (min-width: ${minDesktopWidth}px) {
					.desktop {
						display: block;
					}
				}
			`}</style>
		</header>
	);
};

export default Header;
