import type { Request } from "express";

export function getAllQuery(
	req: Request,
	opts: { pick: "first" | "last" } = { pick: "first" }
): Record<string, string> {
	const url = new URL(req.originalUrl, "http://local");

	const out: Record<string, string> = {};

	if (opts.pick === "first") {
		for (const [k, v] of url.searchParams) {
			if (!(k in out)) out[k] = v;
		}
	} else {
		for (const [k, v] of url.searchParams) {
			out[k] = v;
		}
	}

	return out;
}
