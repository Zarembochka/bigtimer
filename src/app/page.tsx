"use client";

import Header from "@/components/header/Header";
import styles from "./page.module.css";
import { Main } from "@/components/timer/Main";
import { useTimerParamsFromSearchParams } from "@/hooks/useTimerParamsFromSearchParams";
import { useHeaderHideLogic } from "@/hooks/useHeaderHideLogic";

export default function Home() {
    useTimerParamsFromSearchParams();

    const { mouseMoveHandle } = useHeaderHideLogic();

    return (
        <div className={styles.page} onMouseMove={mouseMoveHandle}>
            <Header />
            <Main />
        </div>
    );
}
