"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";

export function IncTimerButton() {
    return (
        <motion.button
            initial={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.15 }}
            className={[styles.primaryBtn, styles.roundedBtn].join(" ")}
        >
            +
        </motion.button>
    );
}
