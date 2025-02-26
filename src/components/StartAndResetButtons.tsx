import { ResetButton } from "./ResetButton";
import { StartButton } from "./StartButton";
import styles from "./ui/startAndResetButtons.module.css";

export function StartAndResetButtons() {
    return (
        <div className={styles.container}>
            <StartButton />
            <ResetButton />
        </div>
    );
}
