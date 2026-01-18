import type { Metadata } from "next";
import "./main.scss";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export const metadata: Metadata = {
	title: "React & Next.js Boilerplate - your page title goes here!",
	description: "This is your meta description",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
