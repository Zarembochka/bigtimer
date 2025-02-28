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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.8 }}
            className={[styles.primaryBtn, styles.roundedBtn].join(" ")}
            onClick={incTime}
        >
            +
        </motion.button>
    );
}
