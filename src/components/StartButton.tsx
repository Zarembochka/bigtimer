"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";
import { useStoreTime } from "../store/storeTime";

export function StartButton() {
    const time = useStoreTime((state) => state.time);
    const isTimerStart = useStoreTime((state) => state.isTimerStart);
    const start = useStoreTime((state) => state.start);
    const startTime = () => {
        start();
    };
    return (
        <motion.button
            initial={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.15 }}
            className={styles.primaryBtn}
            disabled={time === 0}
            onClick={startTime}
        >
            {isTimerStart ? "Pause" : "Start"}
        </motion.button>
    );
}
