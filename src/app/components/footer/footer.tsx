"use client";

import styles from "./footer.module.scss";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Navigation() {
	return (
		<footer className={styles["footer"]}>
			<div className="container">
				<div className={styles["footer__inner"]}>
					Made with &nbsp;
					<Heart />
					&nbsp; by DM
				</div>
			</div>
		</footer>
	);
}
