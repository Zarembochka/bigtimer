"use client";

import { Timer } from "./Timer";
import { TimerControls } from "./TimerControls";
import styles from "../app/page.module.css";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useStoreTime } from "@/store/storeTime";
import { useEffect } from "react";
import { StartAndResetButtons } from "./StartAndResetButtons";

export function Main() {
    const { initialTime, isRepeat, isTimerStart } = useStoreTime();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set("seconds", initialTime.toString());
        params.set("repeat", String(isRepeat));
        if (isTimerStart) {
            params.set("target", String(Date.now()));
        } else {
            params.delete("target");
        }
        replace(`${pathname}?${params.toString()}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialTime, isRepeat, isTimerStart, pathname, replace]);

    return (
        <main className={styles.main}>
            <StartAndResetButtons />
            <Timer />
            <TimerControls />
        </main>
    );
}
