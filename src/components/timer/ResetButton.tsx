"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";
import { useStoreTime } from "../store/storeTime";

export function ResetButton() {
    const { time, initialTime, isTimerStart, setTime } = useStoreTime();

    const resetTimer = () => {
        setTime(initialTime);
    };
    return (
        <motion.button
            initial={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.15 }}
            className={styles.primaryBtn}
            disabled={isTimerStart || time === initialTime}
            onClick={resetTimer}
        >
            Reset
        </motion.button>
    );
}
