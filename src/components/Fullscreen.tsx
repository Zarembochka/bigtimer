"use client";

import { motion } from "motion/react";
import { FullscreenIcon } from "@/utils/svg/icons";
import styles from "./ui/fullscreen.module.css";

export function Fullscreen() {
    return (
        <li>
            <motion.div
                initial={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.15 }}
                className={styles.container}
            >
                <span>Fullscreen</span>
                <FullscreenIcon />
            </motion.div>
        </li>
    );
}
