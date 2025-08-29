import { ReactElement } from "react";

export type DropdownProps = {
	buttonText: string;
	iconBeforeText?: string;
	children: ReactElement[] | ReactElement;
	sideToPopUp?: "left" | "right";
};
