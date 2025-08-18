export function makePhonePriceValue(min?: string | null, max?: string | null) {
	const a = (min ?? "").trim();
	const b = (max ?? "").trim();
	return a && b ? `${a}-${b}` : null;
}
export function formatMillions(value?: string | number | null): string {
	const n = Number(value);
	if (!Number.isFinite(n) || n <= 0) return "";
	const m = n / 1_000_000;
	return m % 1 === 0 ? `${m}M` : `${m.toFixed(1)}M`;
}

export function formatMillionsRange(
	min?: string | null,
	max?: string | null
): string {
	const a = (min ?? "").trim();
	const b = (max ?? "").trim();
	if (!a || !b) return "";
	return `${formatMillions(a)}-${formatMillions(b)}`;
}
