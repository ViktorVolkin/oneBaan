"use client";
import { useTranslations } from "next-intl";
import styles from "./FavouritesPage.module.css";
import GoBackButton from "../../UI/buttonGoBack/buttonGoBack";
import { useState } from "react";
import SearchesTab from "@/app/components/Blocks/SearchTab";
type Tab = "advertisement" | "searches";

export default function FavouritesPage() {
	const t = useTranslations();
	const [currentTab, setCurrentTab] = useState<Tab>("searches");

	return (
		<div className={styles.favouritesPage__wrapper}>
			<div className={styles.favouritesPage}>
				<div className={styles.options}>
					<div className={styles.favouritesPage__header}>
						<GoBackButton
							className={styles.goBack}
							imgClassName={styles.goBack__img}
						/>
						<h1 className={styles.favouritesPage__title}>
							{t("favourites.title")}
						</h1>
					</div>

					<div className={styles.tabs__container}>
						<button
							type="button"
							className={`${styles.tab} ${
								currentTab === "advertisement"
									? styles.activeTab
									: ""
							}`}
							onClick={() => setCurrentTab("advertisement")}
						>
							{t("favourites.advertisement")}
						</button>

						<button
							type="button"
							className={`${styles.tab} ${
								currentTab === "searches"
									? styles.activeTab
									: ""
							}`}
							onClick={() => setCurrentTab("searches")}
						>
							{t("favourites.searches")}
						</button>
					</div>
				</div>

				{currentTab === "searches" && <SearchesTab />}
				{currentTab === "advertisement" && <div> </div>}
			</div>
		</div>
	);
}
