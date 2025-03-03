"use client";

import Header from "@/components/header/Header";
import styles from "./page.module.css";
import { Main } from "@/components/timer/Main";
import { useTimerParamsFromSearchParams } from "@/hooks/useTimerParamsFromSearchParams";
import { useHeaderHideLogic } from "@/hooks/useHeaderHideLogic";
import { useEditFormHideLogic } from "@/hooks/useEditFormHideLogic";

export default function Home() {
    useTimerParamsFromSearchParams();

    const { mouseMoveHandle } = useHeaderHideLogic();

    const { clickHandle } = useEditFormHideLogic();

    return (
        <div className={styles.page} onMouseMove={mouseMoveHandle} onClick={clickHandle}>
            <Header />
            <Main />
        </div>
    );
}
