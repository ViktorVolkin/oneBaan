import { ReactElement } from "react";
import { StaticImageData } from "next/image";

export type DropdownProps = {
	buttonText: string;
	iconBeforeText?: StaticImageData;
	children: ReactElement[] | ReactElement;
	sideToPopUp?: "left" | "right";
};
