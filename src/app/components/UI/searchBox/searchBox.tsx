"use client";
import { useEffect, useState, useCallback } from "react";
import styles from "./searchBox.module.css";
import { useQueryParams } from "@/app/customHooks/useQueryParams";
import SearchIcon from "@/../public/searchIcon.svg?component";
import { SearchBoxProps } from "@/app/types/searchBox.types";

export function SearchBox({
	placeholder,
	className,
	param = "search",
	onCommit,
	onKeyDownExtra,
	changeOnEnter = true,
	clearable = true,
	withIcon = false,
	containerClassName,
}: SearchBoxProps) {
	const { get, set } = useQueryParams();

	const queryValue = get(param) ?? "";

	const [value, setValue] = useState(queryValue);
	useEffect(() => {
		setValue(queryValue);
	}, [queryValue]);

	const commit = useCallback(
		(raw: string) => {
			const v = raw.trim();
			set(param, v === "" ? null : v, {
				reset: ["page"],
				method: "replace",
				scroll: false,
			});
			onCommit?.(v);
		},
		[param, set, onCommit]
	);

	const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter" && changeOnEnter) commit(value);
		onKeyDownExtra?.(e);
	};

	const onClear = () => {
		setValue("");
		commit("");
	};

	return (
		<div className={`${styles.inputContainer} ${containerClassName}`}>
			{withIcon && <SearchIcon className={styles.searchBox__icon} />}
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				className={`${className ?? ""} ${
					withIcon ? styles.searchBox__inputWithIcon : ""
				}`}
			/>
			{clearable && (
				<button
					type="button"
					className={styles.searchBox__clear}
					onClick={onClear}
				>
					&times;
				</button>
			)}
		</div>
	);
}
