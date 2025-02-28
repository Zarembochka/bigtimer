"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";
import { useStoreTime } from "@/store/storeTime";

export function IncTimerButton() {
    const increase = useStoreTime((state) => state.increase);
    const incTime = () => {
        increase();
    };
    return (
        <motion.button
            initial={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.15 }}
            className={[styles.primaryBtn, styles.roundedBtn].join(" ")}
            onClick={incTime}
        >
            +
        </motion.button>
    );
}
