"use client";

import { motion } from "motion/react";
import styles from "./ui/primaryButton.module.css";
import { IncTimerButton } from "./IncTimerButton";
import { DecTimerButton } from "./DecTimerButton";

export function TimerControls() {
    return (
        <div className={styles.controls}>
            <IncTimerButton />
            <DecTimerButton />
        </div>
    );
}
