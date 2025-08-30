import { SearchBox } from "./searchBox";

export default {
	title: "UI/SearchBox",
	component: SearchBox,
};

export const Default = {
	args: {
		placeholder: "Поиск по каталогу...",
		className: "",
		param: "search",
		withIcon: true,
		clearable: true,
		changeOnEnter: true,
		onCommit: (v: string) => alert(`Search: ${v}`),
	},
};
