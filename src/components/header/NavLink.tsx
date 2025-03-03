"use client";

import { motion } from "motion/react";
import Link from "next/link";
import styles from "./ui/navLink.module.css";
import { ReactNode } from "react";

interface INavLink {
    hrefSrc: string;
    icon: ReactNode;
    title: string;
}

export default function NavLink(props: INavLink) {
    return (
        <motion.div initial={{ scale: 1 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.15 }}>
            <li>
                <Link className={styles.navlink} href={props.hrefSrc}>
                    {props.icon}
                    <span>{props.title}</span>
                </Link>
            </li>
        </motion.div>
    );
}
