"use client";
import { PopUpProps } from "@/app/types/popUp.types";
import styles from "./popUp.module.css";
import { useEffect, useRef } from "react";

export function PopUp({
	isOpen,
	onClose,
	children,
	placement = "top-right",
	maxWidth,
	maxHeight,
	offset = 16,
	showBackdrop = true,
	closeOnBackdrop = true,
	closeOnEsc = true,
	lockScroll = true,
	contentClassName,
}: PopUpProps) {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen) return;

		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape" && closeOnEsc) onClose();
		}
		document.addEventListener("keydown", onKey);

		const prevOverflow = document.body.style.overflow;
		if (lockScroll) document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", onKey);
			if (lockScroll) document.body.style.overflow = prevOverflow;
		};
	}, [isOpen, closeOnEsc, lockScroll, onClose]);

	if (!isOpen) return null;

	const styleVars: React.CSSProperties = {
		maxWidth: maxWidth ?? undefined,
		maxHeight: maxHeight ?? undefined,
		["--pop-offset" as any]: `${offset}px`,
	};

	return (
		<div
			className={styles.popUp}
			role="dialog"
			aria-modal="true"
			data-backdrop={showBackdrop || undefined}
			onMouseDown={() => {
				if (closeOnBackdrop) onClose();
			}}
		>
			<div
				ref={contentRef}
				className={`${styles.popUp__content} ${contentClassName ?? ""}`}
				data-placement={placement}
				style={styleVars}
				onMouseDown={(e) => e.stopPropagation()}
			>
				<button
					className={styles.popUp__close}
					onClick={onClose}
					aria-label="Close"
				>
					×
				</button>

				{children}
			</div>
		</div>
	);
}
