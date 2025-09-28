"use client";
import { Link } from "@/i18n/navigation";
import styles from "./CardButtons.module.css";
import { useTranslations } from "next-intl";
export interface CardButtonsProps {
	displayWhatsAppIconWithText: boolean;
	displayPhoneWithoutText: boolean;
	contactSalesmanHref: string;
	contactSalesmanWhatsAppHref: string;
	whatsAppBgColor?: string;
	whatsAppTextColor?: string;
	contactsBgColor?: string;
	contactsTextColor?: string;
	rentDetailedPhoneIconMode?: boolean;
}
export function CardButtons({
	displayWhatsAppIconWithText,
	displayPhoneWithoutText,
	contactSalesmanHref,
	contactSalesmanWhatsAppHref,
	whatsAppBgColor,
	whatsAppTextColor,
	contactsBgColor,
	contactsTextColor,
	rentDetailedPhoneIconMode,
}: CardButtonsProps) {
	const t = useTranslations();

	return (
		<div className={styles.cardButtons}>
			<Link
				href={contactSalesmanHref}
				className={`${styles.cardButton} ${
					styles.cardButton__contactWithSalesman
				} ${
					displayPhoneWithoutText ? styles.cardButton__onlyIcon : ""
				} ${
					rentDetailedPhoneIconMode
						? styles.rentDetailedPhoneIconMode
						: ""
				}`}
				style={{
					backgroundColor: contactsBgColor ?? "",
					color: contactsTextColor ?? "",
				}}
			>
				{!displayPhoneWithoutText &&
					!rentDetailedPhoneIconMode &&
					t("cards.talkToSalesman")}
				{(displayPhoneWithoutText || rentDetailedPhoneIconMode) && (
					<img
						className={
							rentDetailedPhoneIconMode
								? styles.iconPhoneRentDetailedMode
								: styles.iconPhone
						}
						src="/MdCall.svg"
					/>
				)}
			</Link>
			<Link
				href={contactSalesmanWhatsAppHref}
				className={`${styles.cardButton} ${
					styles.cardButton__whatsApp
				} ${
					displayWhatsAppIconWithText
						? styles.cardButton__withText
						: ""
				}`}
				style={{
					backgroundColor: whatsAppBgColor ?? "",
					color: whatsAppTextColor ?? "",
				}}
			>
				{displayWhatsAppIconWithText && (
					<img
						className={styles.inlineWhatsAppIcon}
						src="/whatsapp.svg"
					/>
				)}
				<p
					className={
						displayWhatsAppIconWithText ? styles.textWithIcon : ""
					}
				>
					WhatsApp
				</p>
			</Link>
		</div>
	);
}
