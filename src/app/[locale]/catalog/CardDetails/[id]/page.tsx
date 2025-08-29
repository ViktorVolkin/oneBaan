import SellCardDetailedPage from "@/app/components/Pages/SellCardDetailed";
type PageProps = { params: { id: string } };

export default async function Page({ params }: PageProps) {
	const { id } = await params;
	return <SellCardDetailedPage id={id} />;
}
