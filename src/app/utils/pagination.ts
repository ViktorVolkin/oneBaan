type PageToken = number | "…";

export function buildPagination(
	totalPages: number,
	current: number
): PageToken[] {
	const last = Math.max(1, totalPages);
	const cur = Math.min(Math.max(1, current), last);

	if (last <= 7) {
		return Array.from({ length: last }, (_, i) => i + 1);
	}

	if (cur < 5) {
		return [1, 2, 3, 4, "…", last];
	}

	if (cur > last - 4) {
		return [1, "…", last - 3, last - 2, last - 1, last];
	}
	return [1, "…", cur - 1, cur, cur + 1, "…", last];
}
