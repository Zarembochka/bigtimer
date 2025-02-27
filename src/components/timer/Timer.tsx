"use client";

import styles from "./ui/timer.module.css";
import { useStoreTime } from "../../store/storeTime";
import { useEffect } from "react";
import { EditForm } from "../editForm/EditForm";
import { useStoreEditForm } from "@/store/storeEditForm";
import { displayTime, getTimeFromSeconds } from "@/utils/helpers";

export function Timer() {
    const { time, isTimerStart, initialTime } = useStoreTime();
    const [hours, minutes, seconds] = getTimeFromSeconds(time);
    const { toggle, setEditedTime } = useStoreEditForm();
    const toggleEditForm = () => {
        if (!isTimerStart) {
            toggle();
        }
        setEditedTime(initialTime);
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
            <EditForm />
        </div>
    );
}
