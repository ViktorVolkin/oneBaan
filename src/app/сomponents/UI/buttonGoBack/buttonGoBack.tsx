"use client";
type Props = {
	className?: string;
	fallbackHref?: string;
	imgClassName?: string;
	text?: string;
};
export default function GoBackButton({
	className,
	imgClassName,
	fallbackHref = "/",
	text,
}: Props) {
	const onClick = () => {
		if (typeof window !== "undefined" && window.history.length > 1) {
			window.history.back();
		} else {
			window.location.assign(fallbackHref);
		}
	};

	return (
		<button
			type="button"
			className={className}
			onClick={onClick}
			style={{ cursor: "pointer" }}
		>
			<img src="/arrow__back_gray.svg" className={imgClassName} />
			{text && <span>{text}</span>}
		</button>
	);
}
