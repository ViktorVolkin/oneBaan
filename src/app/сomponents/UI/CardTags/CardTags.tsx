import type { CardTagsProps } from "@/app/types/CardTags.types";
import styles from "./CardTags.module.css";
export const CardTags = (props: CardTagsProps) => {
	const { tags } = props;
	return (
		<div className={styles.tags__container}>
			{tags.map((tag) => (
				<div
					key={tag.label}
					className={styles.tag}
					style={{ borderColor: tag.color, color: tag.color }}
				>
					<tag.svgIconComponent
						width={"12px"}
						height={"12px"}
						fill={tag.color}
						style={{ color: tag.color }}
					/>
					{tag.label}
				</div>
			))}
		</div>
	);
};

export default CardTags;
