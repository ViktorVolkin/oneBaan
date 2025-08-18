export function whenPostedLabelFromAge(ageDays: number, locale: "ru" | "en") {
	const d = Math.max(0, Math.floor(ageDays || 0));

	if (locale === "en") {
		if (d === 0) return "Today";
		if (d === 1) return "Yesterday";
		return `${d}d ago`;
	}
	if (d === 0) return "Сегодня";
	if (d === 1) return "Вчера";
	return `${d} д. назад`;
}
