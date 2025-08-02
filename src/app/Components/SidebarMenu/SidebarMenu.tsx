"use client";
import { useEffect, useState } from "react";
import styles from "./SidebarMenu.module.css";
import { SidebarMenuProps } from "@/app/types/SidebarMenu.types";

export const SidebarMenu = ({
	isOpen,
	onClose,
	children,
}: SidebarMenuProps) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setVisible(true);
		} else {
			const timeout = setTimeout(() => setVisible(false), 300);
			return () => clearTimeout(timeout);
		}
	}, [isOpen]);

	if (!visible && !isOpen) return null;

	return (
		<div
			className={`${styles.overlay} ${
				isOpen ? styles.show : styles.hide
			}`}
			style={{ pointerEvents: isOpen ? "auto" : "none" }}
		>
			<aside
				className={`${styles.menu} ${
					isOpen ? styles.slideIn : styles.slideOut
				}`}
			>
				{children}
			</aside>
			<div className={styles.overlayArea} onClick={onClose} />
		</div>
	);
};

export default SidebarMenu;
