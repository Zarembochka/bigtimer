"use client";

import Header from "@/components/header/Header";
import styles from "./page.module.css";
import { Main } from "@/components/timer/Main";
import { useTimerParamsFromSearchParams } from "@/hooks/useTimerParamsFromSearchParams";

export default function Home() {
    useTimerParamsFromSearchParams();

    return (
        <div className={styles.page}>
            <Header />
            <Main />
        </div>
    );
}
