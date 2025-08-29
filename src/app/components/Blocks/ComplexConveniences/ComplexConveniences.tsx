import { useTranslations } from "next-intl";
import styles from "./ComplexConveniences.module.css";
import CardTags from "../../UI/CardTags";
import { CardTagProps } from "@/app/types/CardTags.types";

interface ComplexConveniencesProps {
	complexName: string;
	complexImage: string;
	yearOfBuilding: number;
	amountOfApartments: number;
	builder: string;
	tags: CardTagProps[];
	isRent?: boolean;
}
export function ComplexConveniences({
	complexName,
	complexImage,
	yearOfBuilding,
	amountOfApartments,
	builder,
	tags,
	isRent = false,
}: ComplexConveniencesProps) {
	const t = useTranslations();
	return (
		<div
			className={
				isRent
					? styles.complexConveniences__container__rent
					: styles.complexConveniences__container
			}
		>
			<h4 className={styles.complexConveniences__title}>
				{t("CardDetailed.conveniences")}
				<span className={isRent ? "" : styles.complexName}>
					{complexName}
				</span>
			</h4>
			<div
				className={isRent ? styles.complexCardRent : styles.complexCard}
			>
				<img
					src={complexImage}
					alt="image of complex"
					className={
						isRent ? styles.complexImageRent : styles.complexImage
					}
				/>
				<div className={styles.complexDetails}>
					<p className={styles.complexDetail}>
						<span className={styles.detailLabel}>
							{t("CardDetailed.complex.year")}
						</span>
						<span className={styles.detailData}>
							{yearOfBuilding}
						</span>
					</p>
					<p className={styles.complexDetail}>
						<span className={styles.detailLabel}>
							{t("CardDetailed.complex.amountOfApartments")}
						</span>
						<span className={styles.detailData}>
							{amountOfApartments}
						</span>
					</p>
					<p className={styles.complexDetail}>
						<span className={styles.detailLabel}>
							{t("CardDetailed.complex.builder")}
						</span>
						<span className={styles.detailData}>{builder}</span>
					</p>
				</div>
			</div>
			<CardTags
				tags={tags}
				sizeOfTheIcons="16px"
				gapClamp="clamp(8px, 1vw, 12px)"
			/>
		</div>
	);
}
