import type { Decorator } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import translationsEn from "../src/messages/en.json";
import translationsRu from "../src/messages/ru.json";
import { Manrope } from "next/font/google";
import "../src/app/[locale]/globals.css";

const messages = { en: translationsEn, ru: translationsRu };
const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

const withNextIntl: Decorator = (Story, context) => {
	const locale = (context.globals.locale as "en" | "ru") || "en";
	return (
		<NextIntlClientProvider locale={locale} messages={messages[locale]}>
			<Story />
		</NextIntlClientProvider>
	);
};

const withSiteLayout: Decorator = (Story) => (
	<div className={manrope.className}>
		<Story />
	</div>
);

export const decorators = [withSiteLayout, withNextIntl];

export const globalTypes = {
	locale: {
		name: "Locale",
		description: "Internationalization locale",
		defaultValue: "en",
		toolbar: {
			icon: "globe",
			items: [
				{ value: "en", right: "🇺🇸", title: "English" },
				{ value: "ru", right: "🇷🇺", title: "Russian" },
			],
		},
	},
};

export const parameters = {
	nextjs: {
		appDirectory: true,
		navigation: {
			pathname: "/",
			query: {},
		},
	},
	viewport: {
		viewports: {
			mobile360: {
				name: "Mobile 360",
				styles: { width: "360px", height: "640px" },
				type: "mobile",
			},
			tablet768: {
				name: "Tablet 768",
				styles: { width: "768px", height: "1024px" },
				type: "tablet",
			},
			desktop1440: {
				name: "Desktop 1440",
				styles: { width: "1440px", height: "900px" },
				type: "desktop",
			},
			desktop1920: {
				name: "Desktop 1920",
				styles: { width: "1920px", height: "1200px" },
				type: "desktop",
			},
		},
		defaultViewport: "desktop1440",
	},
};
