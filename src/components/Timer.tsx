"use client";

import styles from "./ui/timer.module.css";
import { useStoreTime } from "../store/storeTime";
import { useEffect } from "react";

function displayTime(time: number) {
    const timeString = String(time).padStart(2, "0");
    return timeString;
}

function getTimeFromSeconds(time: number): [hours: number, minutes: number, seconds: number] {
    const hours = Math.floor(time / 3600);
    const remainingtime = time - hours * 3600;
    const minutes = Math.floor(remainingtime / 60);
    const seconds = remainingtime - 60 * minutes;
    return [hours, minutes, seconds];
}

export function Timer() {
    const time = useStoreTime((state) => state.time);
    const [hours, minutes, seconds] = getTimeFromSeconds(time);
    useEffect(() => {
        let formattedTime = "";
        if (hours > 0) {
            formattedTime = `${displayTime(hours)}:${displayTime(minutes)}:${displayTime(seconds)}`;
        } else {
            formattedTime = `${displayTime(minutes)}:${displayTime(seconds)}`;
        }
        document.title = `${formattedTime} Countdown | Bigtimer`;
    }, [hours, minutes, seconds]);
    return (
        <div className={styles.timer}>
            {hours > 0 && <span>{displayTime(hours)} : </span>}
            <span>{displayTime(minutes)}</span> : <span>{displayTime(seconds)}</span>
        </div>
    );
}
