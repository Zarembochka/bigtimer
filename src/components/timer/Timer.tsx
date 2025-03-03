"use client";

import styles from "./ui/timer.module.css";
import { useStoreTime } from "@/store/storeTime";
import { useEffect } from "react";
import { EditForm } from "@/components/editForm/EditForm";
import { useStoreEditForm } from "@/store/storeEditForm";
import { displayTime, getTimeFromSeconds } from "@/utils/helpers";
import { DigitsSpan } from "./DigitsSpan";

export function Timer() {
    const { time, isTimerStart, initialTime } = useStoreTime();
    const [hours, minutes, seconds] = getTimeFromSeconds(time);
    const { toggleEditForm, setEditedTime } = useStoreEditForm();
    const handleEditForm = () => {
        if (!isTimerStart) {
            toggleEditForm();
        }
        setEditedTime(initialTime);
    };
    useEffect(() => {
        const soundFinish = new Audio("/sounds/finish.mp3");
        let formattedTime = "";
        if (hours > 0) {
            formattedTime = `${displayTime(hours)}:${displayTime(minutes)}:${displayTime(seconds)}`;
        } else {
            formattedTime = `${displayTime(minutes)}:${displayTime(seconds)}`;
        }
        document.title = `${formattedTime} Countdown | Bigtimer`;

        if (time === 0) {
            soundFinish.play();
        }
    }, [hours, minutes, seconds, time]);
    return (
        <div className={styles.container}>
            <div className={styles.timer} onClick={handleEditForm}>
                {hours > 0 && (
                    <span className={styles.hours}>
                        <DigitsSpan name="hours" value={hours} />
                        <span> : </span>
                    </span>
                )}
                <DigitsSpan name="minutes" value={minutes} />
                :
                <DigitsSpan name="seconds" value={seconds} />
            </div>
            <EditForm />
        </div>
    );
}
