import Footer from "@/app/сomponents/Blocks/Footer";
import styles from "./style.module.css";
import SellCardDetailedPage from "@/app/сomponents/Pages/SellCardDetailed";
type PageProps = { params: { id: string } };

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	return (
		<div className={styles.container}>
			<SellCardDetailedPage id={id} />
			<Footer />
		</div>
	);
}
