"use client";
import styles from "./popUp.module.css";
import { ReactNode, useEffect, useRef } from "react";

type Placement =
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
