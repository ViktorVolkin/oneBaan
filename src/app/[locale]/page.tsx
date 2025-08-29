import MainPage from "@/app/components/Pages/MainPage";
import Header from "../components/Blocks/Header";
import Footer from "../components/Blocks/Footer";
export default async function Home({
	searchParams,
}: {
	searchParams: Promise<Record<string, string | string[]>>;
}) {
	return (
		<>
			<Header />
			<MainPage searchParams={searchParams} />
			<Footer></Footer>
		</>
	);
}
