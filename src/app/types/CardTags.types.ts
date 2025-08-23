import type { FunctionComponent, SVGProps } from "react";

export interface CardTagProps {
	svgIconComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
	label: string;
	color: string;
}

export interface CardTagsProps {
	tags: CardTagProps[];
	sizeOfTheIcons?: "16px" | "18px";
	fillTagColor?: string;
	gapClamp?: string;
}
