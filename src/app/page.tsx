"use client";

import Header from "@/components/Header";
import styles from "./page.module.css";
import { StartButton } from "@/components/StartButton";
import { Timer } from "@/components/Timer";
import { TimerControls } from "@/components/TimerControls";
import { useEffect } from "react";
import { useStoreTime } from "../store/storeTime";
import { useSearchParams } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();
    const setTime = useStoreTime((state) => state.setTime);
    const seconds = searchParams.get("seconds");

    useEffect(() => {
        if (!seconds) {
            setTime(600);
        } else {
            const parsedSeconds = parseInt(seconds, 10);
            setTime(parsedSeconds);
        }
    }, [searchParams, setTime, seconds]);

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <StartButton />
                <Timer />
                <TimerControls />
            </main>
        </div>
    );
}
