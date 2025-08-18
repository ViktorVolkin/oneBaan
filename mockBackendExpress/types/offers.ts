export type Offer = {
	id: string;
	type: "rent" | "buy";
	translations: {
		en: { title: string; description?: string };
		ru: { title: string; description?: string };
	};
};
