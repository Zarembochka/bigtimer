"use client";

import styles from "./ui/timer.module.css";
import { useStoreTime } from "../store/storeTime";

function displayTime(time: number) {
    const timeString = String(time).padStart(2, "0");
    return timeString;
}

function getTimeFromSeconds(time: number): [minutes: number, seconds: number] {
    const minutes = Math.floor(time / 60);
    const seconds = time - 60 * minutes;
    return [minutes, seconds];
}

export function Timer() {
    const time = useStoreTime((state) => state.time);
    const [minutes, seconds] = getTimeFromSeconds(time);
    return (
        <div className={styles.timer}>
            <span>{displayTime(minutes)}</span>:<span>{displayTime(seconds)}</span>
        </div>
    );
}
