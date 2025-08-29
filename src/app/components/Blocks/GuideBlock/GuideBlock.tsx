import styles from "./GuideBlock.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import WhatsAppIcon from "@/../public/whatsapp.svg";
import TelegramIcon from "@/../public/telegram.svg";
import type { IGuideBlockProps } from "@/app/types/GuideBlock.types";
export const GuideBlock = ({
	introBlock,
	guideCards,
	linkToTelegram,
	linkToWhatsApp,
	importantDetail,
}: IGuideBlockProps) => {
	const t = useTranslations();
	return (
		<div className={styles.guideBlock__container}>
			<div className={styles.guideBlock__intro_container}>
				<h4 className={styles.guideBlock__title}>
					{t(introBlock.title)}
				</h4>
				<p className={styles.guideBlock__intro_text}>
					{t(introBlock.text)}
				</p>
			</div>
			<div className={styles.guideBlock__guideContainer}>
				<div className={styles.guideCards__container}>
					{guideCards.map((i, idx) => (
						<div className={styles.guideBlock__guideCard} key={idx}>
							<div className={styles.guideCard_decorate}>
								<img
									src={i.icon}
									alt=""
									className={styles.guideCard__icon}
								/>
								<p className={styles.guideCard__number}>
									{i.number}
								</p>
							</div>
							<p className={styles.guideCard__details}>
								{t(i.text)}
							</p>
						</div>
					))}
				</div>
				<div className={styles.contacts__container}>
					<Link
						href={linkToTelegram}
						className={styles.contacts__button}
					>
						<img
							src={TelegramIcon}
							alt="telegram icon"
							className={styles.contacts__icon}
						/>
						Telegram
					</Link>
					<Link
						href={linkToWhatsApp}
						className={styles.contacts__button}
					>
						<img
							src={WhatsAppIcon}
							alt="WhatsApp icon"
							className={styles.contacts__icon}
						/>
						WhatsApp
					</Link>
				</div>
				<p className={styles.guideBlock__importantDetail}>
					{t(importantDetail)}
				</p>
			</div>
		</div>
	);
};
