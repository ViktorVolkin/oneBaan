import styles from "./detailsCard.module.css";
export interface DetailsCardProps {
	className?: string;
	title: string;
	text: string;
	icon: string;
	isRent: boolean;
}
export function DetailsCard({
	title,
	text,
	icon,
	className,
	isRent,
}: DetailsCardProps) {
	return (
		<div
			className={`${className ? className : ""}  ${
				isRent ? styles.detailsCardRent : styles.detailsCard
			}`}
		>
			<div
				className={`${
					isRent ? styles.info__containerRent : styles.info__container
				} `}
			>
				<p className={`${isRent ? styles.titleRent : styles.title}`}>
					{title}
				</p>
				<p className={`${isRent ? styles.textRent : styles.text}`}>
					{text}
				</p>
			</div>
			<img
				className={`${isRent ? styles.iconRent : styles.icon}`}
				src={icon}
				alt=""
			/>
		</div>
	);
}
