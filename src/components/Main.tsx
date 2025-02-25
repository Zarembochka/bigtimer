"use client";

import { StartButton } from "./StartButton";
import { Timer } from "./Timer";
import { TimerControls } from "./TimerControls";
import styles from "../app/page.module.css";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useStoreTime } from "@/store/storeTime";
import { useEffect } from "react";

export function Main() {
    const { initialTime, isRepeat } = useStoreTime();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set("seconds", initialTime.toString());
        params.set("repeat", String(isRepeat));
        replace(`${pathname}?${params.toString()}`);
    }, [initialTime, isRepeat, pathname, replace, searchParams]);
    return (
        <main className={styles.main}>
            <StartButton />
            <Timer />
            <TimerControls />
        </main>
    );
}
