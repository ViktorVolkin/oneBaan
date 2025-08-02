import { ReactNode } from "react";

export type SidebarMenuProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
};
