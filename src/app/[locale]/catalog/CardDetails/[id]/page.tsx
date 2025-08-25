import SellCardDetailedPage from "@/app/сomponents/Pages/SellCardDetailed";
type PageProps = { params: { id: string } };

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	return <SellCardDetailedPage id={id} />;
}
