import { useStoreEditForm } from "@/store/storeEditForm";
import styles from "./ui/editForm.module.css";
import { displayTime, getTimeFromSeconds } from "@/utils/helpers";

interface IEditInput {
    name: string;
}

export function EditInput({ name }: IEditInput) {
    const { editedTime, setEditedTimeByValues } = useStoreEditForm();
    const [hours, minutes, seconds] = getTimeFromSeconds(editedTime);

    const getCurrentValue = () => {
        if (name === "hours") return hours;
        if (name === "minutes") return minutes;
        if (name === "seconds") return seconds;
        return 0;
    };

    const wheelHandle = (e: React.WheelEvent<HTMLInputElement>, type: string) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -1 : 1;
        if (type === "hours") {
            let changedHours = hours + delta;
            if (changedHours > 24) {
                changedHours = 0;
            }
            if (changedHours < 0) {
                changedHours = 24;
            }
            setEditedTimeByValues(changedHours, minutes, seconds);
        }
        if (type === "minutes") {
            let changedMinutes = minutes + delta;
            if (changedMinutes > 59) {
                changedMinutes = 0;
            }
            if (changedMinutes < 0) {
                changedMinutes = 59;
            }
            setEditedTimeByValues(hours, changedMinutes, seconds);
        }
        if (type === "seconds") {
            let changedseconds = seconds + delta;
            if (changedseconds > 59) {
                changedseconds = 0;
            }
            if (changedseconds < 0) {
                changedseconds = 59;
            }
            setEditedTimeByValues(hours, minutes, changedseconds);
        }
    };
    return (
        <input
            className={styles.input}
            name={name}
            value={displayTime(getCurrentValue())}
            onChange={(e) => setEditedTimeByValues(Number(e.target.value), minutes, seconds)}
            onWheel={(e) => wheelHandle(e, name)}
            pattern="\d*"
        />
    );
}
