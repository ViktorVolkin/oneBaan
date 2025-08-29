import styles from "./styles.module.css";
import Footer from "@/app/components/Blocks/Footer";
import Header from "@/app/components/Blocks/Header";
import RentCardDetailed from "@/app/components/Pages/RentCardDetailed";
type PageProps = { params: { id: string } };

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	return (
		<div className={styles.page}>
			<Header maxPhoneWidth={0} minTabletWidth={768} />
			<RentCardDetailed id={id} />
			<Footer />
		</div>
	);
}
