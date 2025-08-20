export type SearchBoxProps = {
	placeholder: string;
	className?: string;
	param?: string;
	changeOnEnter?: boolean;
	onCommit?: (v: string) => void;
	onKeyDownExtra?: React.KeyboardEventHandler<HTMLInputElement>;
	clearable?: boolean;
	withIcon?: boolean;
};
