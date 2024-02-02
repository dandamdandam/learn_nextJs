"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const path = usePathname();
    return(
        <nav>
            <ul>
                <li><Link href="/">Home</Link>{path === "/" ? "🔥" : ""}</li>
                <li><Link href="/about-us">About us</Link>{path === "/about-us" ? "🔥" : ""}</li>
            </ul>
        </nav>
    );
}

export default Navigation;