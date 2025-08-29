"use client";

import { useEffect, useCallback } from "react";
import styles from "./popupFavourites.module.css";

type Props = {
	open: boolean;
	onClose?: () => void;
	children: React.ReactNode;
	contentClassName?: string;
	blockScroll?: boolean;
};

export function PopupFavourites({
	open,
	onClose,
	children,
	contentClassName,
	blockScroll = true,
}: Props) {
	const handleKey = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onClose?.();
		},
		[onClose]
	);

	useEffect(() => {
		if (!open || !blockScroll) return;
		document.addEventListener("keydown", handleKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKey);
			document.body.style.overflow = prev;
		};
	}, [open, handleKey]);

	if (!open) return null;

	return (
		<div
			className={styles.overlay}
			role="dialog"
			aria-modal="true"
			onMouseDown={(e) => {
				if (e.target === e.currentTarget) onClose?.();
			}}
		>
			<div className={`${styles.content} ${contentClassName ?? ""}`}>
				{children}

				<button onClick={onClose} className={styles.closeButton}>
					&times;
				</button>
			</div>
		</div>
	);
}
