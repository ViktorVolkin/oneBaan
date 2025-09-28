import styles from "./styles.module.css";
import Footer from "@/app/components/Blocks/Footer";
import Header from "@/app/components/Blocks/Header";
import RentCardDetailed from "@/app/components/Pages/RentCardDetailed";
type PageProps = { params: Promise<{ id: string }> };

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	await new Promise((r) => setTimeout(r, 30000));
	return (
		<div className={styles.page}>
			<Header disablePhoneMode />
			<RentCardDetailed id={id} />
			<Footer />
		</div>
	);
}
