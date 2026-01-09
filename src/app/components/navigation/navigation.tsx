"use client";

import styles from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee } from "lucide-react";

export default function Navigation() {
	const currentPath = usePathname();
	const getActiveClass = (path: string) => (currentPath === path ? styles.active : undefined);

	return (
		<nav className={styles["navigation"]}>
			<div className="container">
				<div className={styles["navigation__inner"]}>
					<div className={styles["navigation__inner__logo"]}>
						<Link href="/">
							LOGO HERE <Coffee />
						</Link>
					</div>
					<div className={styles["navigation__inner__links"]}>
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
					</div>
				</div>
			</div>
		</nav>
	);
}
