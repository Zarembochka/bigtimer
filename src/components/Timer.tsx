"use client";

import { useState } from "react";
import styles from "./ui/timer.module.css";

function displayTime(time: number) {
    const timeString = String(time).padStart(2, "0");
    return timeString;
}

export function Timer() {
    const [minutes, setMinutes] = useState(10);
    const [sekonds, setSeconds] = useState(0);
    return (
        <div className={styles.timer}>
            <span>{displayTime(minutes)}</span>:<span>{displayTime(sekonds)}</span>
        </div>
    );
}
