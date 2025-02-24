"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";
import { useStore } from "../store/store";

export function DecTimerButton() {
    const decrease = useStore((state) => state.decrease);
    const decTime = () => {
        decrease();
    };
    return (
        <motion.button
            initial={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.15 }}
            className={[styles.primaryBtn, styles.roundedBtn].join(" ")}
            onClick={decTime}
        >
            -
        </motion.button>
    );
}
