import { useTranslations } from "next-intl";
import styles from "./ComplexConveniences.module.css";
import CardTags from "../../UI/CardTags";
import { CardTagProps } from "@/app/types/CardTags.types";
import { classModeHelper } from "@/app/utils/classModeHelper";

interface ComplexConveniencesProps {
	complexImage: string;
	complexName: string;
	details: Record<string, string>[];
	tags: CardTagProps[];
	title?: string;
	mode: "Rent" | "Sell" | "Complex";
}
export function ComplexConveniences({
	complexImage,
	complexName,
	details,
	tags,
	mode,
	title = "CardDetailed.conveniences",
}: ComplexConveniencesProps) {
	const t = useTranslations();

	const cx = classModeHelper(styles, mode);

	return (
		<div className={cx("complexConveniences__container")}>
			<h4 className={styles.complexConveniences__title}>
				{t(title)}
				<span className={cx("complexName")}>{complexName}</span>
			</h4>

			<div className={cx("complexCard")}>
				<img
					src={complexImage}
					alt="image of complex"
					className={cx("complexImage")}
				/>

				<div className={styles.complexDetails}>
					{details.map((detail, index) => (
						<p className={styles.complexDetail} key={index}>
							<span className={styles.detailLabel}>
								{detail.label}
							</span>
							<span className={styles.detailData}>
								{detail.value}
							</span>
						</p>
					))}
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
