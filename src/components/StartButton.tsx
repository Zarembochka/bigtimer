"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";
import { useStore } from "../store/store";

export function StartButton() {
    const time = useStore((state) => state.time);
    const isTimerStart = useStore((state) => state.isTimerStart);
    const start = useStore((state) => state.start);
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
