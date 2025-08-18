"use client";
import styles from "./Dropdown.module.css";
import { useState, useRef, useEffect } from "react";
import arrowDown from "@/../public/arrowDown.svg";
import React from "react";

import type { DropdownProps } from "@/app/types/Dropdown.types";

export const Dropdown = ({
	buttonText,
	iconBeforeText,
	children,
	sideToPopUp = "left",
}: DropdownProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("click", handleClickOutside);
		} else {
			document.removeEventListener("click", handleClickOutside);
		}

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className={styles.dropdown__container} ref={containerRef}>
			<div
				className={styles.dropdown__button}
				onClick={() => setIsOpen(!isOpen)}
				aria-haspopup="true"
				aria-expanded={isOpen}
			>
				{iconBeforeText && (
					<img
						src={iconBeforeText}
						alt="dropdown icon"
						className={styles.dropdown__iconBeforeText}
					/>
				)}
				{buttonText}
				<img
					src={arrowDown}
					alt="arrow"
					className={`${styles.dropdown__icon} ${
						isOpen ? styles.dropdown__icon_open : ""
					}`}
				/>
				{isOpen && (
					<ul
						className={`${styles.dropdown__list} ${
							sideToPopUp === "right"
								? styles.dropdown__list_right
								: styles.dropdown__list_left
						}`}
					>
						{React.Children.map(children, (child, index) => (
							<li
								key={index}
								className={styles.dropdown__listItem}
							>
								{child}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
