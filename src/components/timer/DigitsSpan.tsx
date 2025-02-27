import { displayTime } from "@/utils/helpers";
import styles from "./ui/timer.module.css";

interface IDigitSpan {
    name: string;
    value: number;
}

export function DigitsSpan({ name, value }: IDigitSpan) {
    return (
        <span className={styles.digits}>
            {displayTime(value)}
            <span className={styles.label}>
                <span>{name}</span>
            </span>
        </span>
    );
}
