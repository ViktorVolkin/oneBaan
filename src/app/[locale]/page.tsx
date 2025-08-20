import MainPage from "@/app/сomponents/Pages/MainPage";
import Header from "../сomponents/Blocks/Header";
export default async function Home({
	searchParams,
}: {
	searchParams: Promise<Record<string, string | string[]>>;
}) {
	return (
		<>
			<Header />
			<MainPage searchParams={searchParams} />
		</>
	);
}
