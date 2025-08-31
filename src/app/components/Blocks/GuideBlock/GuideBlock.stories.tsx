import type { Meta, StoryObj } from "@storybook/nextjs";
import { GuideBlock } from "./GuideBlock";
import type { IGuideBlockProps } from "../../../types/GuideBlock.types";

const meta: Meta<typeof GuideBlock> = {
	title: "Components/GuideBlock",
	component: GuideBlock,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GuideBlock>;

const guideCards = [
	{
		icon: "/GuideBlock__house.svg",
		number: "01",
		text: "Вы заполняете детальную форму",
	},
	{
		icon: "/GuideBlock__house.svg",
		number: "02",
		text: "Ваш менеджер свяжется с вами для уточнения деталей",
	},
	{
		icon: "/GuideBlock__house.svg",
		number: "03",
		text: "Ваш объект публикуется на платформе OneBaan ",
	},
];

const defaultProps: IGuideBlockProps = {
	introBlock: {
		title: "Хотите продать апартаменты или виллу на Пхукете",
		text: "Добавьте свой объект в каталог OneBaan и его увидят сотни потенциальных клиентов",
	},
	guideCards,
	linkToTelegram: "https://t.me/example",
	linkToWhatsApp: "https://wa.me/123456789",
	importantDetail:
		"Важно: Ваши контактные данные не передаются третьим лицам без вашего ведома, вся коммуникация происходит через менеджера OneBaan",
};

export const Default: Story = {
	args: defaultProps,
	parameters: {
		docs: {
			description: {
				story: "Default guide block with intro, guide cards, and contact links.",
			},
		},
	},
};
