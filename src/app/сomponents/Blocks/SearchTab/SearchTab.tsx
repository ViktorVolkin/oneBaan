"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./SearchTab.module.css";
import PopupFavourites from "@/app/сomponents/UI/popupFavourites";
import { readIds, writeIds } from "@/app/сustomHooks/useOfferLike";
import SavedSearchCard from "@/app/сomponents/UI/savedCardFavouriteSearch";

const STORAGE_KEY = "favourites:searches";

export default function SearchesTab() {
	const t = useTranslations();

	const [savedSearches, setSavedSearches] = useState<string[]>([]);
	const [showMessage, setShowMessage] = useState<boolean>(false);
	const [areSettingsOpen, setAreSettingsOpen] = useState<boolean>(false);
	const [popUpOpen, setPopUpOpen] = useState(false);
	const [saveSearch, setSaveSearch] = useState<string>("");
	const message = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setSavedSearches(readIds(STORAGE_KEY));
	}, []);

	useMemo(() => {
		if (savedSearches.length > 0) setShowMessage(true);
		return null;
	}, [savedSearches.length]);

	useEffect(() => {
		const onDocClick = (e: MouseEvent) => {
			if (
				message.current &&
				!message.current.contains(e.target as Node)
			) {
				setShowMessage(false);
			}
		};
		document.addEventListener("click", onDocClick);
		return () => document.removeEventListener("click", onDocClick);
	}, []);

	const handleAddSearch = () => {
		const current = readIds(STORAGE_KEY);
		const trimmed = saveSearch.trim();
		if (!trimmed || current.includes(trimmed)) return;

		const next = [...current, trimmed];
		writeIds(next, STORAGE_KEY);
		setSavedSearches(next);
		setSaveSearch("");
		setPopUpOpen(false);
	};

	return (
		<>
			{showMessage && (
				<div className={styles.popMessage__container} ref={message}>
					<p className={styles.popMessage}>
						{t("favourites.savedSearches.popMessage")}
					</p>
				</div>
			)}

			{!popUpOpen && savedSearches.length === 0 && (
				<div className={styles.noSaves__container}>
					<Image
						src="/favouritesCard.png"
						alt="empty"
						className={styles.previewImage}
						width={261}
						height={340}
						priority
					/>
					<div className={styles.saveSearches__text}>
						<h3 className={styles.saveSearches__title}>
							{t("favourites.noSaves.title")}
						</h3>
						<p className={styles.saveSearches__informing_text}>
							{t("favourites.noSaves.text")}
						</p>
						<button
							className={styles.saveSearches__button}
							onClick={() => setPopUpOpen(true)}
							type="button"
						>
							{t("favourites.noSaves.button")}
						</button>
					</div>
				</div>
			)}

			{savedSearches.length > 0 && (
				<div className={styles.savedSearches__container}>
					<button className={styles.sortBy} type="button">
						{t("favourites.savedSearches.sortBy.params")}
						<span className={styles.sortBy__count}>1</span>
					</button>

					<div className={styles.savedSearches__list}>
						{savedSearches.map((search) => (
							<SavedSearchCard
								key={search}
								title={search}
								description="Вилла Паттайа"
								typeTag="Push-уведомления"
								onMore={() => setAreSettingsOpen(true)}
							/>
						))}
					</div>
				</div>
			)}

			<PopupFavourites
				open={areSettingsOpen}
				onClose={() => setAreSettingsOpen(false)}
				blockScroll={false}
			>
				<div className={styles.redactSettings}>
					<h3 className={styles.redactSettings__searchTitle}>
						Купить, район пляжа Патаййа
					</h3>
					<p className={styles.readctSettings__description}>
						Вилла Паттайа
					</p>
					<div className={styles.redactButtons__container}>
						<button className={styles.redactButton} type="button">
							<img src="/BiPencil.svg" alt="edit" />
							{t("favourites.redactSettings.edit")}
						</button>
						<button
							className={styles.deleteButton}
							type="button"
							onClick={() => {
								setAreSettingsOpen(false);
							}}
						>
							<img
								src="/delete.svg"
								alt="delete"
								className={styles.button__icon}
							/>
							{t("favourites.redactSettings.delete")}
						</button>
					</div>
				</div>
			</PopupFavourites>

			<PopupFavourites
				open={popUpOpen}
				onClose={() => setPopUpOpen(false)}
				blockScroll={false}
			>
				<div className={styles.saveSearch}>
					<h3 className={styles.saveSearch__title}>
						{t("favourites.saveSearch.title")}
					</h3>
					<div className={styles.saveSearch__inputContainer}>
						<input
							className={styles.saveSearch__input}
							name="saveSearch"
							placeholder={t(
								"favourites.saveSearch.inputPlaceholder"
							)}
							value={saveSearch}
							onChange={(e) => setSaveSearch(e.target.value)}
						/>
						{!!saveSearch && (
							<button
								type="button"
								className={styles.saveSearch__clear}
								aria-label="clear"
								onClick={() => setSaveSearch("")}
							>
								&times;
							</button>
						)}
					</div>
					<button
						type="button"
						className={styles.saveSearch__button}
						onClick={handleAddSearch}
						disabled={!saveSearch.trim()}
					>
						{t("favourites.saveSearch.button")}
					</button>
				</div>
			</PopupFavourites>
		</>
	);
}
