import { useTranslations } from "next-intl";
import styles from "./ListingGranted.module.css";
import { Link } from "@/i18n/navigation";

interface ListingGrantedProps {
	agentIcon: string;
	agentName: string;
	agentStatus: { text: string; img: string };
	agentExperienceOnPhuket: string;
	phuketWorkingHours: string;
	languages: string;
	allOffers: { href: string; amountOfOffers: string };
	phoneHref: string;
	whatsAppHref: string;
	isRent?: boolean;
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
	isRent = false,
}: ListingGrantedProps) {
	const t = useTranslations();

	return (
		<div
			className={
				isRent
					? styles.listingGranted__containerRent
					: styles.listingGranted__container
			}
		>
			<h4
				className={
					isRent
						? styles.listingGranted__titleRent
						: styles.listingGranted__title
				}
			>
				{t("CardDetailed.listingGranted.title")}
			</h4>

			<div
				className={
					isRent
						? styles.listingGranted__cardRent
						: styles.listingGranted__card
				}
			>
				<div className={isRent ? styles.buttonsRent : styles.buttons}>
					<Link
						href={phoneHref}
						className={
							isRent
								? styles.listingGranted__desktop_phoneRent
								: styles.listingGranted__desktop_phone
						}
					>
						<img
							src="/footer__phone.svg"
							alt=""
							className={
								isRent
									? styles.listingGranted__desktop_iconRent
									: styles.listingGranted__desktop_icon
							}
						/>
					</Link>

					<Link
						href={whatsAppHref}
						className={
							isRent
								? styles.listingGranted__desktop_whatsappRent
								: styles.listingGranted__desktop_whatsapp
						}
					>
						WhatsApp
					</Link>
				</div>

				<div
					className={
						isRent
							? styles.agent__containerRent
							: styles.agent__container
					}
				>
					<img
						src={agentIcon}
						alt=""
						className={
							isRent ? styles.agent__iconRent : styles.agent__icon
						}
					/>

					<div
						className={
							isRent ? styles.agent__infoRent : styles.agent__info
						}
					>
						<h4
							className={
								isRent
									? styles.listingGranted__title_PCRent
									: styles.listingGranted__title_PC
							}
						>
							{t("CardDetailed.listingGranted.title")}
						</h4>

						<h2
							className={
								isRent
									? styles.agent__nameRent
									: styles.agent__name
							}
						>
							{agentName}
						</h2>

						<p
							className={
								isRent
									? styles.agent__statusRent
									: styles.agent__status
							}
						>
							<img
								src={agentStatus.img}
								alt=""
								className={
									isRent
										? styles.statusImageRent
										: styles.statusImage
								}
							/>
							{agentStatus.text}
						</p>
					</div>
				</div>

				<div
					className={
						isRent ? styles.agent__paramsRent : styles.agent__params
					}
				>
					<p
						className={
							isRent
								? styles.agent__data__containerRent
								: styles.agent__data__container
						}
					>
						{t("CardDetailed.listingGranted.experienceOnPhuket")}
						<span
							className={
								isRent
									? styles.agent__dataRent
									: styles.agent__data
							}
						>
							{agentExperienceOnPhuket}
						</span>
					</p>

					<p
						className={
							isRent
								? styles.agent__data__containerRent
								: styles.agent__data__container
						}
					>
						{t("CardDetailed.listingGranted.workingHoursOnPhuket")}
						<span
							className={
								isRent
									? styles.agent__dataRent
									: styles.agent__data
							}
						>
							{phuketWorkingHours}
						</span>
					</p>

					<p
						className={
							isRent
								? styles.agent__data__containerRent
								: styles.agent__data__container
						}
					>
						{t("CardDetailed.listingGranted.languages")}
						<span
							className={
								isRent
									? styles.agent__dataRent
									: styles.agent__data
							}
						>
							{languages}
						</span>
					</p>
				</div>
			</div>

			<Link
				href={allOffers.href}
				className={isRent ? styles.toAllOffersRent : styles.toAllOffers}
			>
				{t("CardDetailed.listingGranted.allOffers")} (
				{allOffers.amountOfOffers})
			</Link>
		</div>
	);
}
