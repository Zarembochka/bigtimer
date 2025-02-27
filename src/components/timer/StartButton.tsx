"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";
import { useStoreTime } from "@/store/storeTime";
import { useStoreEditForm } from "@/store/storeEditForm";

export function StartButton() {
    const { time, isTimerStart, start, setTime } = useStoreTime();
    const { isFormShown, editedTime, toggle } = useStoreEditForm();

    const startTime = () => {
        if (isFormShown) {
            toggle();
            setTime(editedTime);
            return;
        }
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
