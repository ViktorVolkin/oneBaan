const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	// locales: ["ru", "en"],
	// defaultLocale: "en",
	// localeDetection: true,
};

module.exports = withNextIntl(nextConfig);
