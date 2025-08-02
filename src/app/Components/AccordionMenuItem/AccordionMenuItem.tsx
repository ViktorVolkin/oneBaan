"use client";
import { useState } from "react";
import styles from "./AccordionMenuItem.module.css";
const arrowDown = "/arrowDown.svg";
import Image from "next/image";

import type { AccordionMenuItemProps } from "@/app/types/AccordionMenuItem.types";

export const AccordionMenuItem = ({
	title,
	children,
}: AccordionMenuItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.accordion}>
			<button
				className={styles.header}
				onClick={() => setIsOpen((prev) => !prev)}
			>
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
			>
				{children}
			</div>
		</div>
	);
};
