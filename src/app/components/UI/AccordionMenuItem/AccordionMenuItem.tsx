"use client";
import { useState, MouseEventHandler } from "react";
import styles from "./AccordionMenuItem.module.css";
import arrowDown from "@/../public/arrowDown.svg";
import Image from "next/image";
import { AccordionMenuItemProps } from "@/app/types/AccordionMenuItem.types";
export const AccordionMenuItem = ({
	title,
	children,
	defaultOpen,
}: AccordionMenuItemProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(defaultOpen || false);

	const toggleHeader = () => setIsOpen((prev) => !prev);

	const handleContentClick: MouseEventHandler<HTMLDivElement> = () => {
		setIsOpen(false);
	};

	return (
		<div className={styles.accordion}>
			<button className={styles.header} onClick={toggleHeader}>
				<span className={styles.title}>{title}</span>
				<div
					className={`${styles.arrowWrapper} ${
						isOpen ? styles.rotate : ""
					}`}
				>
					<Image
						src={arrowDown}
						alt=""
						className={styles.arrowDown}
						width={16}
						height={16}
					/>
				</div>
			</button>

			<div
				className={`${styles.content} ${
					isOpen ? styles.open : styles.closed
				}`}
				onClick={handleContentClick}
			>
				{children}
			</div>
		</div>
	);
};
