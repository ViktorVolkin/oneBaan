const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_BACKEND_HOST: process.env.NEXT_PUBLIC_BACKEND_HOST,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.example.com",
				pathname: "/account123/**",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
				pathname: "/**",
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			oneOf: [
				{
					resourceQuery: /component/,
					issuer: /\.[jt]sx?$/,
					use: ["@svgr/webpack"],
				},
				{ type: "asset" },
			],
		});

		return config;
	},
};

module.exports = withNextIntl(nextConfig);
