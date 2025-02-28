import { useStoreTime } from "@/store/storeTime";
import { ResetButton } from "./ResetButton";
import { StartButton } from "./StartButton";
import styles from "./ui/startAndResetButtons.module.css";
import { useStoreEditForm } from "@/store/storeEditForm";

export function StartAndResetButtons() {
    const { time, isTimerStart, initialTime } = useStoreTime();
    const { isFormShown } = useStoreEditForm();
    return (
        <div className={styles.container}>
            {(time !== 0 || isFormShown) && <StartButton />}
            {(time === 0 || (!isTimerStart && time !== initialTime)) && <ResetButton />}
        </div>
    );
}
