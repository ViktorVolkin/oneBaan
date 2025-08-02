export const defaultTags = ["rent", "buy"] as const;
export type DefaultTags = typeof defaultTags;
export type Tag = DefaultTags[number];

export type Offer<T extends readonly string[]> = {
	id: string;
	title?: string;
	description?: string;
	type: T[number];
};

export type Props<T extends readonly string[] = DefaultTags> = {
	tags?: T;
	location?: string;
	offers: Offer<T>[];
};
