import type { ReactNode } from "react";

export type Placement =
	| "center"
	| "top-right"
	| "top-left"
	| "bottom-right"
	| "bottom-left"
	| "right"
	| "left"
	| "top"
	| "bottom";

export interface PopUpProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;

	placement?: Placement;
	maxWidth?: number | string;
	maxHeight?: number | string;
	offset?: number;
	showBackdrop?: boolean;
	closeOnBackdrop?: boolean;
	closeOnEsc?: boolean;
	lockScroll?: boolean;
	contentClassName?: string;
}
