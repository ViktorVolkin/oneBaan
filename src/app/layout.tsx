import { NextIntlClientProvider } from "next-intl";
import { Manrope } from "next/font/google";
import "./[locale]/globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</head>
			<body className={manrope.className}>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
