import type { Decorator } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import translationsEn from "../src/messages/en.json";
import translationsRu from "../src/messages/ru.json";
import "./storybook-overrides.css";

const messages = {
	en: translationsEn,
	ru: translationsRu,
};

const withNextIntl: Decorator = (Story, context) => {
	const locale = context.globals.locale || "en";
	return (
		<NextIntlClientProvider locale={locale} messages={messages[locale]}>
			<Story />
		</NextIntlClientProvider>
	);
};

const withSiteLayout: Decorator = (Story) => (
	<div
		style={{
			minHeight: "100vh",
			display: "flex",
			justifyContent: "center",
		}}
	>
		<Story />
	</div>
);

const preview = {
	decorators: [withSiteLayout, withNextIntl],
	globalTypes: {
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
	},
	parameters: {
		viewport: {
			options: {
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
		},
	},
	initialGlobals: {
		viewport: { value: "desktop1440" },
	},
};

export default preview;
