export type OurMission = {
	title: string;
	text: string;
};

export type Contacts = {
	email: string;
	adress: string;
	phoneNumber: string;
};

export type LinkItem = {
	text: string;
	leadsTo: string;
};

export type FooterProps = {
	ourMission?: OurMission;
	contacts?: Contacts;
	links?: LinkItem[];
	signForDistributionFn?: () => void;
};
