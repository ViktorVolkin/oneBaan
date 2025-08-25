import Footer from "@/app/сomponents/Blocks/Footer";
import Header from "@/app/сomponents/Blocks/Header";
import RentCardDetailed from "@/app/сomponents/Pages/RentCardDetailed";
type PageProps = { params: { id: string } };

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	return (
		<>
			<Header maxPhoneWidth={0} minTabletWidth={768} />
			<RentCardDetailed id={id} />
			<Footer />
		</>
	);
}
