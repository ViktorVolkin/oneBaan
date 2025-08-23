import type { CardTagsProps } from "@/app/types/CardTags.types";
import styles from "./CardTags.module.css";

export const CardTags = ({
	tags,
	sizeOfTheIcons,
	fillTagColor,
	gapClamp,
}: CardTagsProps) => {
	return (
		<div
			className={styles.tags__container}
			style={{ gap: gapClamp ?? "clamp(4px, 1vw, 8px)" }}
		>
			{tags.map((tag) => (
				<div
					key={`${tag.label}-${tag.color}`}
					className={styles.tag}
					style={{
						borderColor: tag.color,
						color: tag.color,
						backgroundColor: fillTagColor ?? "inherit",
					}}
					data-showborder={!fillTagColor ? "show" : "hide"}
				>
					<tag.svgIconComponent
						width={sizeOfTheIcons ?? "12px"}
						height={sizeOfTheIcons ?? "12px"}
						fill={tag.color}
						style={{ color: tag.color }}
					/>
					<p style={{ color: tag.color, margin: 0 }}>{tag.label}</p>
				</div>
			))}
		</div>
	);
};

export default CardTags;
