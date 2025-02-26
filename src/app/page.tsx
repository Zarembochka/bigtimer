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

    useEffect(() => {
        if (!seconds) {
            setTime(600);
        } else {
            const parsedSeconds = parseInt(seconds, 10);
            setTime(parsedSeconds);
            setRepeat(repeat === "true");
        }
    }, [searchParams, setTime, setRepeat, repeat, seconds]);

    return (
        <div className={styles.page}>
            <Header />
            <Main />
        </div>
    );
}
