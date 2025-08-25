import express, { type Request, type Response } from "express";
import cors from "cors";
import { OFFERS } from "./MockData/mockData";
import { RECENTLY } from "./MockData/mockData";
import { getAllQuery } from "./utils/queryNormalize";
import { formatPrice } from "./MockData/mockData";
import { SUBSCRIBERS } from "./MockData/mockData";
import type { Subscriber } from "./types/subscriber";
import { sellCatalogListingCards } from "./MockData/sellCatalogMock";
import { makeCatalogHandler } from "./utils/catalogHelper";
import { rentCatalogMock } from "./MockData/rentCatalogMock";
import { SELL_CARD_DETAILED_MOCKS } from "./MockData/sellCardDetailedMock";
import { RENT_CARD_DETAILED_MOCKS } from "./MockData/rentCardDetailedMock";
const app = express();
app.use(cors());
app.use(express.json());

function pickLocale(query: unknown) {
	return query === "ru" ? "ru" : "en";
}
function pickCurrency(query: unknown) {
	if (typeof query === "string") {
		const normalized = query.toUpperCase();
		switch (normalized) {
			case "USD":
				return "USD";
			case "EUR":
				return "EUR";
			case "RUB":
				return "RUB";
			case "THB":
				return "THB";
			default:
				return "USD";
		}
	}
	return "USD";
}
app.get("/offers-preview", (req: Request, res: Response) => {
	try {
		const query = getAllQuery(req);
		const lang = pickLocale(query.locale);
		const offers = OFFERS.map((item) => {
			const t = item.translations[lang];
			return {
				id: item.id,
				type: item.type,
				title: t.title,
				description: t.description ?? null,
			};
		});

		res.status(200).json(offers);
		return;
	} catch (err) {
		res.status(500).json({ message: "Internal Server Error" });
		console.error(err);
		return;
	}
});
app.get("/recentlyAddedForSale", (req: Request, res: Response) => {
	try {
		const queries = getAllQuery(req);
		const lang = pickLocale(queries.locale);
		const currency = pickCurrency(queries.currency);
		const data = RECENTLY.map((item) => ({
			id: item.id,
			whatsAppLink: item.whatsAppLink,
			image: item.image,
			price: formatPrice(item.priceUsd, currency).formatted,
			details: item.translations[lang].details,
		}));
		res.status(200).json(data);
		return;
	} catch (err) {
		res.status(500).json({ message: "Internal Server Error" });
		console.error(err);
		return;
	}
});
app.post(
	"/distributionSubscribers",
	(req: Request<{}, {}, { email?: string }>, res: Response) => {
		try {
			const email = (req.body?.email ?? "").trim();

			const EMAIL_RE =
				/^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
			if (!EMAIL_RE.test(email)) {
				return res
					.status(400)
					.json({ message: "Invalid email format" });
			}

			const exists = SUBSCRIBERS.some(
				(s) => s.email.toLowerCase() === email.toLowerCase()
			);
			if (exists) {
				return res.status(409).json({ message: "Already subscribed" });
			}

			let nextId = 1;
			if (SUBSCRIBERS.length > 0) {
				const last = SUBSCRIBERS[SUBSCRIBERS.length - 1];
				const lastNum = Number(last.id);
				nextId = Number.isFinite(lastNum) ? lastNum + 1 : Date.now();
			}

			const newUser: Subscriber = { id: String(nextId), email };
			SUBSCRIBERS.push(newUser);
			return res.status(201).json(newUser);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	}
);

app.get("/sell-catalog-offers/preview", (req, res) => {
	res.json({ total: 1920 });
});
app.get("/rent-catalog-offers/preview", (req, res) => {
	res.json({ total: 1225 });
});

app.get("/sell-catalog-offers", makeCatalogHandler(sellCatalogListingCards));
app.get("/rent-catalog-offers", makeCatalogHandler(rentCatalogMock));
app.get("/sell-card-detailed/:id", (req, res) => {
	const { id } = req.params;

	const original = SELL_CARD_DETAILED_MOCKS[id];
	if (!original) return res.status(404).json({ error: "Not found" });

	const data = JSON.parse(JSON.stringify(original));

	const pageRaw = req.query.page as string | undefined;
	const limitRaw = req.query.limit as string | undefined;

	if (pageRaw && limitRaw && data?.moreFromComplex?.cards) {
		const p = Math.max(1, parseInt(pageRaw, 10) || 1);
		const l = Math.max(1, parseInt(limitRaw, 10) || Infinity);

		const all = data.moreFromComplex.cards || [];
		const start = (p - 1) * l;
		const end = start + l;

		const items = all.slice(start, end);
		const total = all.length;
		const hasMore = end < total;

		data.moreFromComplex = {
			...data.moreFromComplex,
			cards: items,
			page: p,
			limit: l,
			total,
			hasMore,
		};
	} else {
		if (data?.moreFromComplex) {
			data.moreFromComplex = {
				...data.moreFromComplex,
				hasMore: false,
			};
		}
	}

	return res.json(data);
});
app.get("/rent-card-detailed/:id", (req, res) => {
	const { id } = req.params;

	const original = RENT_CARD_DETAILED_MOCKS[id];
	if (!original) return res.status(404).json({ error: "Not found" });

	const data = JSON.parse(JSON.stringify(original));

	const pageRaw = req.query.page as string | undefined;
	const limitRaw = req.query.limit as string | undefined;

	if (pageRaw && limitRaw && data?.moreFromComplex?.cards) {
		const p = Math.max(1, parseInt(pageRaw, 10) || 1);
		const l = Math.max(1, parseInt(limitRaw, 10) || 4);

		const all = data.moreFromComplex.cards || [];
		const start = (p - 1) * l;
		const end = start + l;

		const items = all.slice(start, end);
		const total = all.length;
		const hasMore = end < total;

		data.moreFromComplex = {
			...data.moreFromComplex,
			cards: items,
			page: p,
			limit: l,
			total,
			hasMore,
		};
	} else {
		if (data?.moreFromComplex) {
			data.moreFromComplex = {
				...data.moreFromComplex,
				hasMore: false,
			};
		}
	}

	return res.json(data);
});
app.listen(4000, () => {
	console.log("server started on 4000");
});
