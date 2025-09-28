import Footer from "../components/Blocks/Footer";
import Header from "../components/Blocks/Header";
import { MainPageSkeleton } from "../components/Pages/MainPage";
export default function Page() {
	return (
		<>
			<Header />
			<MainPageSkeleton />
			<Footer />
		</>
	);
}
