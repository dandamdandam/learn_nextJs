"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

const Navigation = () => {
    const path = usePathname();
    return(
        <nav className={styles.nav}>
            <ul>
                <li><Link prefetch href="/">Home</Link>{path === "/" ? "🔥" : ""}</li>
                <li><Link prefetch href="/about-us">About us</Link>{path === "/about-us" ? "🔥" : ""}</li>
            </ul>
        </nav>
    );
}

export default Navigation;