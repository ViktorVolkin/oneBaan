export const classModeHelper = (
	styles: Record<string, string>,
	defaultMode: string = "",
	options: { includeBase?: boolean } = { includeBase: true }
) => {
	return (base: string, mode?: string) => {
		const baseClass = options.includeBase ? styles[base] ?? "" : "";
		const modeKey = base + (mode || defaultMode);
		const modeClass = styles[modeKey] ?? "";
		return [baseClass, modeClass].filter(Boolean).join(" ");
	};
};
