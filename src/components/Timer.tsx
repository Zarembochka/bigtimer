"use client";

import styles from "./ui/timer.module.css";
import { useStoreTime } from "../store/storeTime";
import { useEffect } from "react";
import { EditForm } from "./EditForm";
import { useStoreEditForm } from "@/store/storeEditForm";

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
    const { time, isTimerStart } = useStoreTime();
    const [hours, minutes, seconds] = getTimeFromSeconds(time);
    const { toggle } = useStoreEditForm();
    const toggleEditForm = () => {
        !isTimerStart && toggle();
    };
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
        <div className={styles.container}>
            <div className={styles.timer} onClick={toggleEditForm}>
                {hours > 0 && <span>{displayTime(hours)} : </span>}
                <span>{displayTime(minutes)}</span> : <span>{displayTime(seconds)}</span>
            </div>
            <EditForm hours={displayTime(hours)} minutes={displayTime(minutes)} seconds={displayTime(seconds)} />
        </div>
    );
}
