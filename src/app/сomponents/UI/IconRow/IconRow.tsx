"use client";
import type { IconRowProps } from "@/app/types/IconRow.types";
import styles from "./IconRow.module.css";

const defaultProps: IconRowProps = {
	icons: [
		{ iconPath: "/BiBed.svg", value: 1 },
		{ iconPath: "/BiBath.svg", value: 2 },
		{ iconPath: "/BiBorderOuter.svg", value: 3000 },
	],
};

export const IconRow = ({
	icons = defaultProps.icons,
	sizeForIconsinRow = "md",
	showLines = true,
	className,
}: IconRowProps) => {
	return (
		<ul className={`${styles.icons__list} ${className}`}>
			{icons?.map((icon, index) => (
				<li
					key={index}
					className={`${styles.icon__item} ${
						styles[`icon__item_${sizeForIconsinRow}`]
					}`}
					data-show={showLines ? "show" : "hide"}
				>
					<img
						src={icon.iconPath}
						alt="icon"
						className={styles[`icon__${sizeForIconsinRow}`]}
					/>
					<span
						className={`${styles.icon__value} ${
							styles[`icon__value_${sizeForIconsinRow}`]
						}`}
					>
						{icon.value}
					</span>
				</li>
			))}
		</ul>
	);
};
