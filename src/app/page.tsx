"use client";

import Header from "@/components/Header";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useStoreTime } from "../store/storeTime";
import { useSearchParams } from "next/navigation";
import { Main } from "@/components/Main";

export default function Home() {
    const searchParams = useSearchParams();
    const { setTime, setRepeat } = useStoreTime();
    const seconds = searchParams.get("seconds");
    const repeat = searchParams.get("repeat");
    const target = searchParams.get("target");

    useEffect(() => {
        if (!seconds) {
            setTime(600);
        } else {
            const parsedSeconds = parseInt(seconds, 10);
            let leftSeconds = 0;
            //target
            if (target) {
                const parsedTarget = parseInt(target, 10);
                const passedTime = Date.now() - parsedTarget;
                leftSeconds = Math.max(parsedSeconds - Math.floor(passedTime / 1000), 0);
            }
            setTime(parsedSeconds, leftSeconds);
            setRepeat(repeat === "true");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setTime, setRepeat, repeat, seconds]);

    return (
        <div className={styles.page}>
            <Header />
            <Main />
        </div>
    );
}
