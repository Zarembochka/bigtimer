"use client";

import { motion } from "motion/react";
import { displayTime } from "@/utils/helpers";
import styles from "./ui/timer.module.css";

interface IDigitSpan {
    name: string;
    value: number;
}

export function DigitsSpan({ name, value }: IDigitSpan) {
    return (
        <span className={styles.digits}>
            <motion.span key={value} animate={{ opacity: [0, 1], scale: [0.8, 1] }} transition={{ duration: 0.3 }}>
                {displayTime(value)}
            </motion.span>
            <span className={styles.label}>
                <span>{name}</span>
            </span>
        </span>
    );
}
