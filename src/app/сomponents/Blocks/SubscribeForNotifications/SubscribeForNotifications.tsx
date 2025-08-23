"use client";
import { useTranslations } from "next-intl";
import styles from "./SubscribeForNotifications.module.css";
import PopUp from "../../UI/popUp";
import { useState } from "react";
import { signForDistribution } from "../Footer/Footer";
interface SubscribeForNotificationsProps {
	title?: string;
	list?: Array<string>;
	image?: string;
}
export function SubscribeForNotifications({
	title = "CardDetailed.subscribe.title",
	list = [
		"CardDetailed.subscribe.newOffers",
		"CardDetailed.subscribe.discounts",
	],
	image = "/subscribeForNotificationsDefaultImage.png",
}: SubscribeForNotificationsProps) {
	const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
	const [currEmail, setEmail] = useState<string>("");
	const t = useTranslations();
	return (
		<>
			<div className={styles.SubscribeForNotifications__container}>
				<h4 className={styles.SubscribeForNotifications__title}>
					{t(title)}
				</h4>
				<ul className={styles.SubscribeForNotifications__list}>
					{list.map((item) => (
						<li className={styles.list__item} key={item}>
							<img
								src="/SubscribeNotifications__check.svg"
								alt=""
								className={styles.list__item_icon}
							/>
							{t(item)}
						</li>
					))}
				</ul>
				<button
					className={styles.subscribe__button}
					onClick={() => setIsOpenPopup(true)}
				>
					{t("CardDetailed.subscribe.button")}
					<img
						src="/purple__arrow_right.svg"
						alt=""
						className={styles.subscribe__icon}
					/>
				</button>
				<img
					src={image}
					alt=""
					className={styles.SubscribeForNotifications__imageBg}
				/>
			</div>
			<PopUp
				isOpen={isOpenPopup}
				onClose={() => setIsOpenPopup(false)}
				placement="center"
				contentClassName={styles.popup}
				lockScroll
			>
				<div className={styles.popup__content}>
					<h4 className={styles.popup__title}>
						{t("CardDetailed.subscribe.popupTitle")}
					</h4>
					<p className={styles.popup__text}>
						{t("CardDetailed.subscribe.popupText")}
					</p>
					<div className={styles.input__container}>
						<img
							src="/mailIcon.svg"
							alt=""
							className={styles.input__icon}
						/>
						<input
							type="text"
							className={styles.input}
							value={currEmail}
							placeholder={t(
								"CardDetailed.subscribe.placeholder"
							)}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button
						className={styles.popup__button}
						onClick={() =>
							signForDistribution({ email: currEmail })
						}
					>
						{t("CardDetailed.subscribe.button")}
					</button>
				</div>
			</PopUp>
		</>
	);
}
