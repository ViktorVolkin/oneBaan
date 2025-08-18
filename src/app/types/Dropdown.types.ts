import { ReactElement } from "react";
import { StaticImageData } from "next/image";

export type DropdownProps = {
	buttonText: string;
	iconBeforeText?: string;
	children: ReactElement[] | ReactElement;
	sideToPopUp?: "left" | "right";
};
