"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import styles from "./Footer.module.css";
import emailIcon from "../../../../public/footer__mail.svg";
import adressIcon from "../../../../public/footer__adress.svg";
import phoneIcon from "../../../../public/footer__phone.svg";
import arrowRight from "../../../../public/footer__arrow_right.svg";
import type { FooterProps } from "@/app/types/Footer.types";
import { useTranslations } from "next-intl";

export const Footer = ({
	signForDistributionFn,
	ourMission = { title: "footer.mission.title", text: "footer.mission.text" },
	contacts = {
		email: "footer.contacts.email",
		adress: "footer.contacts.adress",
		phoneNumber: "footer.contacts.phoneNumber",
	},

	links = [
		{ text: "nav.home", leadsTo: "/" },
		{ text: "nav.sell", leadsTo: "/sell" },
		{ text: "nav.rent", leadsTo: "/rent" },
		{ text: "nav.compare", leadsTo: "/compare" },
		{ text: "nav.favourites", leadsTo: "/favourites" },
	],
}: FooterProps) => {
	const t = useTranslations();

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
							<Image
								src={emailIcon}
								alt="mail icon"
								className={styles.contacts__icon}
							/>
							<p className={styles.footer__text}>
								{t(contacts.email)}
							</p>
						</div>
						<div className={styles.contacts__detail}>
							<Image
								src={adressIcon}
								alt="adress icon"
								className={styles.contacts__icon}
							/>
							<p className={styles.footer__text}>
								{t(contacts.adress)}
							</p>
						</div>
						<div className={styles.contacts__detail}>
							<Image
								src={phoneIcon}
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
								/>
								<button
									className={styles.distributionSign__button}
									onClick={() => signForDistributionFn}
								>
									<Image
										src={arrowRight}
										alt="sign for distribution"
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
