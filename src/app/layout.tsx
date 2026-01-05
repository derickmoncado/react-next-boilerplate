import type { Metadata } from "next";
import "./globals.css";

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
			<body>{children}</body>
		</html>
	);
}
