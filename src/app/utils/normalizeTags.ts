import { TAG_CODES_CONSTANT } from "../constants/common";
import { CardTagProps } from "../types/CardTags.types";

export function normalizeTags(
	tags: Array<string | { code: string }> = []
): CardTagProps[] {
	return tags
		.map((t) => (typeof t === "string" ? t : t?.code))
		.filter(Boolean)
		.map((code: string) => {
			const meta = TAG_CODES_CONSTANT[code];
			return meta ?? { label: code };
		});
}
