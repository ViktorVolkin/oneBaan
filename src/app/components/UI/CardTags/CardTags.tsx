"use client";
import type { CardTagsProps } from "@/app/types/CardTags.types";
import styles from "./CardTags.module.css";
import { useTranslations } from "next-intl";

export const CardTags = ({
	tags,
	sizeOfTheIcons,
	gapClamp,
	gapBetweenTags,
	showBorder = true,
}: CardTagsProps) => {
	const t = useTranslations();
	return (
		<div
			className={styles.tags__container}
			style={{ gap: gapClamp ?? "clamp(1px, 1vw, 8px)" }}
		>
			{tags.map((tag, idx) => (
				<div
					key={`${tag.label}-${tag.bgColor}-${idx}`}
					className={styles.tag}
					style={{
						borderColor: tag.borderColor ?? "#FAF5FF",
						color: tag.textColor ?? "#44337A",
						gap: gapBetweenTags ?? "8px",
						backgroundColor: tag.bgColor ?? "#FAF5FF",
					}}
					data-showborder={showBorder ? "show" : "hide"}
				>
					{tag.icon instanceof Array ? (
						<div className={styles.icon_container}>
							{tag.icon.map((Icon, idx) => (
								<Icon
									key={idx}
									width={sizeOfTheIcons ?? "12px"}
									height={sizeOfTheIcons ?? "12px"}
									fill={tag.textColor ?? "#44337A"}
									style={{
										color: tag.textColor ?? "#44337A",
									}}
								/>
							))}
						</div>
					) : (
						<tag.icon
							width={sizeOfTheIcons ?? "12px"}
							height={sizeOfTheIcons ?? "12px"}
							fill={tag.textColor ?? "#44337A"}
							style={{ color: tag.textColor ?? "#44337A" }}
						/>
					)}

					<p style={{ color: tag.textColor ?? "#44337A", margin: 0 }}>
						{t(tag.label)}
					</p>
				</div>
			))}
		</div>
	);
};

export default CardTags;
