"use client";
import { useEffect, useState, useCallback } from "react";
import styles from "./searchBox.module.css";
import { useQueryParams } from "@/app/сustomHooks/useQueryParams";

type Props = {
	placeholder: string;
	className?: string;
	param?: string;
	changeOnEnter?: boolean;
	onCommit?: (v: string) => void;
	onKeyDownExtra?: React.KeyboardEventHandler<HTMLInputElement>;
	clearable?: boolean;
};

export function SearchBox({
	placeholder,
	className,
	param = "search",
	onCommit,
	onKeyDownExtra,
	changeOnEnter = true,
	clearable = true,
}: Props) {
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
		<div className={styles.inputContainer}>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				className={className}
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
