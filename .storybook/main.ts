import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	staticDirs: ["../public"],
	addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
	framework: { name: "@storybook/nextjs", options: {} },
	webpackFinal: async (cfg) => {
		const assetRule = (cfg.module?.rules as any[])?.find(
			(r) => r?.test && r.test.test && r.test.test(".svg")
		);
		if (assetRule) assetRule.exclude = /\.svg$/i;

		cfg.module!.rules!.push({
			test: /\.svg$/i,
			resourceQuery: /component/,
			use: ["@svgr/webpack"],
		});

		cfg.module!.rules!.push({
			test: /\.svg$/i,
			type: "asset",
			resourceQuery: { not: [/component/] },
		});

		return cfg;
	},
};

export default config;
