import CustomSelect from "./CustomSelect";
import type { Option } from "@/app/types/CustomSelect.types";

export default {
	title: "UI/CustomSelect",
	component: CustomSelect,
};

const options: Option[] = [
	{ label: "1 спальня", value: "1" },
	{ label: "2 спальни", value: "2" },
	{ label: "3 спальни", value: "3" },
	{ label: "4+ спальни", value: "4plus" },
];

export const Default = {
	args: {
		placeholder: "Выберите количество спален",
		options,
		value: "2",
		onChange: (v: string | null) => alert(`Selected: ${v}`),
		clearable: true,
	},
};
