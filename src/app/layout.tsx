import type { Metadata } from "next";
import "./main.scss";

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
				<main>{children}</main>
			</body>
		</html>
	);
}
