"use client";
import { Link } from "@/i18n/navigation";
import styles from "./Footer.module.css";
import type { FooterProps } from "@/app/types/Footer.types";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { API_CONSTANTS, NAVIGATION_CONSTANTS } from "@/app/constants/common";
import Arrow from "@/../public/footer__arrow_right.svg?component";
export const signForDistribution = async (data: { email: string }) => {
	if (!API_CONSTANTS.EMAIL_REGEX.test(data.email)) {
		throw new Error("Invalid email format");
	}

	await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_HOST}/distributionSubscribers`,
		{
			headers: { "Content-type": "application/json" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
};
export const Footer = ({
	signForDistributionFn = signForDistribution,
	ourMission = { title: "footer.mission.title", text: "footer.mission.text" },
	contacts = {
		email: "footer.contacts.email",
		adress: "footer.contacts.adress",
		phoneNumber: "footer.contacts.phoneNumber",
	},

	links = NAVIGATION_CONSTANTS.FOOTER_LINKS,
}: FooterProps) => {
	const [currentValueOfMail, setCurrentValueOfMail] = useState<string>("");
	const t = useTranslations();
	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentValueOfMail(event.target.value);
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<div className={styles.footer__info}>
					<div className={styles.footer__misssion}>
						<h4 className={styles.footer__title}>
							{t(ourMission.title)}
						</h4>
						<p className={styles.footer__text}>
							{t(ourMission.text)}
						</p>
					</div>
					<div className={styles.footer__contacts}>
						<h4 className={styles.footer__title}>
							{t("footer.contacts.title")}
						</h4>
						<div className={styles.contacts__detail}>
							<img
								src="/footer__mail.svg"
								alt="mail icon"
								className={styles.contacts__icon}
							/>
							<p className={styles.footer__text}>
								{t(contacts.email)}
							</p>
						</div>
						<div className={styles.contacts__detail}>
							<img
								src="/footer__adress.svg"
								alt="adress icon"
								className={styles.contacts__icon}
							/>
							<p className={styles.footer__text}>
								{t(contacts.adress)}
							</p>
						</div>
						<div className={styles.contacts__detail}>
							<img
								src="/footer__phone.svg"
								alt="phone icon"
								className={styles.contacts__icon}
							/>
							<p className={styles.footer__text}>
								{t(contacts.phoneNumber)}
							</p>
						</div>
						<div className={styles.distribution__container}>
							<h4 className={styles.footer__title}>
								{t("footer.subscribe.title")}
							</h4>
							<div className={styles.distributionSign__container}>
								<input
									type="text"
									className={styles.distributionSign__input}
									placeholder={t(
										"footer.subscribe.placeholder"
									)}
									id="distributionSign__inputID"
									value={currentValueOfMail}
									onChange={inputChangeHandler}
								/>
								<button
									className={styles.distributionSign__button}
									onClick={async () => {
										try {
											await signForDistributionFn({
												email: currentValueOfMail,
											});
										} catch (err) {
											console.error(
												"Ошибка подписки:",
												err
											);
										}
									}}
								>
									<Arrow
										className={
											styles.distributionSign__icon
										}
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footer__nav}>
					<div className={styles.footer__nav_content}>
						<div>
							{links.map((item) => (
								<Link
									key={item.text}
									href={item.leadsTo}
									className={styles.footer__link}
								>
									{t(item.text)}
								</Link>
							))}
						</div>
						<span className={styles.footer__PS}>© OneBaan</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
