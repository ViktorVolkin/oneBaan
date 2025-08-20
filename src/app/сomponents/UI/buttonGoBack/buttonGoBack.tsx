"use client";
import Arrow from "@/../public/footer__arrow_right.svg?component";
type Props = {
	className?: string;
	fallbackHref?: string;
	imgClassName?: string;
};
export default function GoBackButton({
	className,
	imgClassName,
	fallbackHref = "/",
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
			<Arrow
				className={imgClassName}
				style={{ transform: "rotate(180deg)" }}
			/>
		</button>
	);
}
