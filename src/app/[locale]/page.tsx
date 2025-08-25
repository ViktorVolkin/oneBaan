import MainPage from "@/app/сomponents/Pages/MainPage";
import Header from "../сomponents/Blocks/Header";
import Footer from "../сomponents/Blocks/Footer";
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
