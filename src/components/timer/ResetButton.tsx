"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";
import { useStoreTime } from "@/store/storeTime";

export function ResetButton() {
    const { initialTime, setTime } = useStoreTime();

    const resetTimer = () => {
        setTime(initialTime);
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
            className={styles.primaryBtn}
            onClick={resetTimer}
        >
            Reset
        </motion.button>
    );
}
