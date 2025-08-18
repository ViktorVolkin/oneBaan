"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CustomSelect.module.css";
import { useTranslations } from "next-intl";

export interface Option {
	label: string;
	value: string;
	disabled?: boolean;
	iconSrc?: string;
}

export interface CustomSelectProps {
	placeholder?: string;
	options: Option[];
	value?: string | null;
	onChange: (value: string | null) => void;
	className?: string;
	disabled?: boolean;
	caretSrc?: string;

	prefixSrc?: string;
	chipWhenSelected?: boolean;
	clearable?: boolean;
	lockWhenSelected?: boolean;
	showLabelWhenEmpty?: boolean;
	allowMissingValue?: boolean;
	missingValueLabelFactory?: (value: string) => string;
}

export default function CustomSelect({
	placeholder = "Select…",
	options: optionsList,
	value = null,
	onChange,
	className,
	disabled = false,
	caretSrc = "/arrowDown.svg",
	prefixSrc,
	chipWhenSelected = false,
	clearable,
	lockWhenSelected = false,
	showLabelWhenEmpty = true,
	allowMissingValue = false,
	missingValueLabelFactory,
}: CustomSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const t = useTranslations();

	useEffect(() => {
		function onDocClick(e: MouseEvent) {
			if (!rootRef.current) return;
			if (!rootRef.current.contains(e.target as Node)) setIsOpen(false);
		}
		if (isOpen) document.addEventListener("mousedown", onDocClick);
		return () => document.removeEventListener("mousedown", onDocClick);
	}, [isOpen]);

	const normalizedOptions = useMemo(() => {
		const v = value ?? "";
		if (!allowMissingValue || !v) return optionsList;

		const exists = optionsList.some((o) => o.value === v);
		if (exists) return optionsList;

		const label = missingValueLabelFactory?.(v) ?? String(v);

		return [...optionsList, { label, value: v }];
	}, [allowMissingValue, missingValueLabelFactory, optionsList, value]);

	const selected = normalizedOptions.find((o) => o.value === value) ?? null;
	const isLocked = !!selected && lockWhenSelected;

	const toggle = () => {
		if (disabled || isLocked) return;
		setIsOpen((v) => !v);
	};

	const pick = (o: Option) => {
		if (o.disabled) return;
		onChange(o.value);
		setIsOpen(false);
	};

	const clear = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (disabled) return;
		onChange(null);
		setIsOpen(false);
	};

	const showCaret = !!caretSrc && !isLocked && !(clearable && !!selected);

	return (
		<div
			ref={rootRef}
			className={`${styles.root} ${className ?? ""} ${
				disabled ? styles.isDisabled : ""
			}`}
			data-open={isOpen || undefined}
		>
			<button
				type="button"
				className={styles.control}
				onClick={toggle}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				aria-label={
					!selected && !showLabelWhenEmpty
						? t(placeholder)
						: undefined
				}
				disabled={disabled}
				data-locked={isLocked || undefined}
			>
				{prefixSrc ? (
					<img
						className={styles.prefix}
						src={prefixSrc}
						alt=""
						aria-hidden
					/>
				) : null}

				{selected && chipWhenSelected ? (
					<span className={styles.chip}>
						<span className={styles.chipLabel}>
							{t(selected.label)}
						</span>
						{clearable && (
							<button
								type="button"
								className={styles.clear}
								onClick={clear}
								aria-label="Clear"
							>
								×
							</button>
						)}
					</span>
				) : (
					<span
						className={`${styles.value} ${
							!selected ? styles.isPlaceholder : ""
						}`}
					>
						{selected
							? t(selected.label)
							: showLabelWhenEmpty
							? t(placeholder)
							: ""}
					</span>
				)}

				{showCaret ? (
					<img
						className={styles.caret}
						src={caretSrc}
						alt=""
						aria-hidden
					/>
				) : null}
			</button>

			{isOpen && (
				<div role="listbox" className={styles.list}>
					{normalizedOptions.map((o) => {
						const isSelected = o.value === value;
						return (
							<div
								key={o.value}
								role="option"
								aria-selected={isSelected}
								data-selected={isSelected || undefined}
								data-disabled={o.disabled || undefined}
								className={styles.option}
								onClick={() => pick(o)}
							>
								{o.iconSrc ? (
									<img
										className={styles.optionIcon}
										src={o.iconSrc}
										alt=""
										aria-hidden
									/>
								) : null}
								<span className={styles.optionLabel}>
									{t(o.label)}
								</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
