import type { FunctionComponent, SVGProps } from "react";

export interface CardTagProps {
	icon: FunctionComponent<SVGProps<SVGSVGElement>>;
	label: string;
	bgColor?: string;
	borderColor?: string;
	textColor?: string;
}

export interface CardTagsProps {
	tags: CardTagProps[];
	sizeOfTheIcons?: "16px" | "18px";
	gapClamp?: string;
	gapBetweenTags?: string;
	showBorder?: boolean;
}
