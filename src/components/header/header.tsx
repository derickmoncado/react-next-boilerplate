"use client";

import styles from "./header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee } from "lucide-react";

export default function Header() {
	const currentPath = usePathname();
	const getActiveClass = (path: string) => (currentPath === path ? styles.active : undefined);

	return (
		<header className={styles["header"]}>
			<div className="container">
				<div className={styles["header__inner"]}>
					<div className={styles["header__inner__logo"]}>
						<Link href="/">
							<Coffee /> <p>Logo</p>
						</Link>
					</div>
					<nav className={styles["header__inner__nav"]}>
						<ul>
							<li>
								<Link href="/" className={getActiveClass("/")}>
									Home
								</Link>
							</li>
							<li>
								<Link href="/page-1" className={getActiveClass("/page-1")}>
									Page 1
								</Link>
							</li>
							<li>
								<Link href="/page-2" className={getActiveClass("/page-2")}>
									Page 2
								</Link>
							</li>
							<li>
								<Link href="page-3" className={getActiveClass("page-3")}>
									Page 3
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
