"use client";

import styles from "./savedFavouriteSearch.module.css";

type Props = {
	title: string;
	description?: string;
	typeTag?: string;
	onMore?: () => void;
};

export default function SavedSearchCard({
	title,
	description = "",
	typeTag = "",
	onMore,
}: Props) {
	return (
		<div className={styles.savedSearches__item}>
			<div className={styles.savedSearches__main_info}>
				<h6 className={styles.savedSearches__title}>{title}</h6>
				<img
					src="/triple-dots.svg"
					alt="more"
					className={styles.savedSearches__more}
					onClick={onMore}
				/>
			</div>

			{!!description && (
				<p className={styles.savedSearches__description}>
					{description}
				</p>
			)}

			{!!typeTag && (
				<p className={styles.savedSearches__type}>{typeTag}</p>
			)}
		</div>
	);
}
