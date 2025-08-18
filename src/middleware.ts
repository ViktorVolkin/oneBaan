import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
const locales = routing.locales;
export default createMiddleware({
	locales,
	defaultLocale: "en",
	localePrefix: "always",
});

export const config = {
	matcher: ["/", "/en/:path*", "/ru/:path*"],
};
