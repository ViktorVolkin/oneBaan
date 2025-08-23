import { useTranslations } from "next-intl";
import styles from "./ListingGranted.module.css";
import { Link } from "@/i18n/navigation";
interface ListingGranted {
	agentIcon: string;
	agentName: string;
	agentStatus: { text: string; img: string };
	agentExperienceOnPhuket: string;
	phuketWorkingHours: string;
	languages: string;
	allOffers: {
		href: string;
		amountOfOffers: string;
	};
	phoneHref: string;
	whatsAppHref: string;
}
export function ListingGranted({
	agentIcon,
	agentName,
	agentStatus,
	phuketWorkingHours,
	languages,
	agentExperienceOnPhuket,
	allOffers,
	phoneHref,
	whatsAppHref,
}: ListingGranted) {
	const t = useTranslations();
	return (
		<div className={styles.listingGranted__container}>
			<h4 className={styles.listingGranted__title}>
				{t("CardDetailed.listingGranted.title")}
			</h4>
			<div className={styles.listingGranted__card}>
				<div className={styles.buttons}>
					<Link
						href={phoneHref}
						className={styles.listingGranted__desktop_phone}
					>
						<img
							src="/footer__phone.svg"
							alt=""
							className={styles.listingGranted__desktop_icon}
						/>
					</Link>
					<Link
						href={whatsAppHref}
						className={styles.listingGranted__desktop_whatsapp}
					>
						WhatsApp
					</Link>
				</div>
				<div className={styles.agent__container}>
					<img
						src={agentIcon}
						alt=""
						className={styles.agent__icon}
					/>
					<div className={styles.agent__info}>
						<h4 className={styles.listingGranted__title_PC}>
							{t("CardDetailed.listingGranted.title")}
						</h4>
						<h2 className={styles.agent__name}>{agentName}</h2>
						<p className={styles.agent__status}>
							<img
								src={agentStatus.img}
								alt=""
								className={styles.statusImage}
							/>
							{agentStatus.text}
						</p>
					</div>
				</div>
				<div className={styles.agent__params}>
					<p className={styles.agent__data__container}>
						{t("CardDetailed.listingGranted.experienceOnPhuket")}
						<span className={styles.agent__data}>
							{agentExperienceOnPhuket}
						</span>
					</p>
					<p className={styles.agent__data__container}>
						{t("CardDetailed.listingGranted.workingHoursOnPhuket")}
						<span className={styles.agent__data}>
							{phuketWorkingHours}
						</span>
					</p>
					<p className={styles.agent__data__container}>
						{t("CardDetailed.listingGranted.languages")}
						<span className={styles.agent__data}>{languages}</span>
					</p>
				</div>
			</div>
			<Link href={allOffers.href} className={styles.toAllOffers}>
				{t("CardDetailed.listingGranted.allOffers")} (
				{allOffers.amountOfOffers})
			</Link>
		</div>
	);
}
