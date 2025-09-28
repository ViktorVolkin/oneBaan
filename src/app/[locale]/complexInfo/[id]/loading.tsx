import Footer from "@/app/components/Blocks/Footer";
import Header from "@/app/components/Blocks/Header";
import { ComplexInfoSkeleton } from "@/app/components/Pages/ComplexInfo";

export default function Page() {
	return (
		<>
			<Header disablePhoneMode />
			<ComplexInfoSkeleton></ComplexInfoSkeleton>
			<Footer />
		</>
	);
}
