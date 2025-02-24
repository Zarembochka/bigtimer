import Header from "@/components/Header";
import styles from "./page.module.css";
import { StartButton } from "@/components/StartButton";
import { Timer } from "@/components/Timer";
import { TimerControls } from "@/components/TimerControls";

export default function Home() {
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
