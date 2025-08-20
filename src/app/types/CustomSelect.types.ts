export interface Option {
	label: string;
	value: string;
	disabled?: boolean;
	iconSrc?: string;
}

export interface CustomSelectProps {
	placeholder?: string;
	options: Option[];
	value?: string | null;
	onChange: (value: string | null) => void;
	className?: string;
	disabled?: boolean;
	caretSrc?: string;

	prefixSrc?: string;
	chipWhenSelected?: boolean;
	clearable?: boolean;
	lockWhenSelected?: boolean;
	showLabelWhenEmpty?: boolean;
	allowMissingValue?: boolean;
	missingValueLabelFactory?: (value: string) => string;
}
