import styles from "./styles.module.css";
import Footer from "@/app/components/Blocks/Footer";
import Header from "@/app/components/Blocks/Header";
import { ComplexInfoPage } from "@/app/components/Pages/ComplexInfo/ComplexInfo";
type PageProps = { params: Promise<{ id: string }> };

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	return (
		<div className={styles.page}>
			<Header maxPhoneWidth={0} minTabletWidth={768} />
			<ComplexInfoPage id={id} />
			<Footer />
		</div>
	);
}
