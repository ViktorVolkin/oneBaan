import Footer from "@/app/components/Blocks/Footer";
import Header from "@/app/components/Blocks/Header";
import { RentCardDetailedSkeleton } from "@/app/components/Pages/RentCardDetailed";

export default function Page() {
	return (
		<>
			<Header />
			<RentCardDetailedSkeleton />
			<Footer />
		</>
	);
}
