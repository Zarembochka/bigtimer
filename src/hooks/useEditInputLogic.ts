import { useStoreEditForm } from "@/store/storeEditForm";
import { getTimeFromSeconds } from "@/utils/helpers";

export function useEditInputLogic(name: string) {
    const { editedTime, setEditedTimeByValues } = useStoreEditForm();
    const [hours, minutes, seconds] = getTimeFromSeconds(editedTime);

    const getCurrentValue = () => {
        if (name === "hours") return hours;
        if (name === "minutes") return minutes;
        if (name === "seconds") return seconds;
        return 0;
    };

    const changeHours = (delta: number) => {
        let changedHours = hours + delta;
        if (changedHours > 24) {
            changedHours = 0;
        }
        if (changedHours < 0) {
            changedHours = 24;
        }
        return changedHours;
    };

    const changeMinutesAndSeconds = (startValue: number, delta: number) => {
        let changedValue = startValue + delta;
        if (changedValue > 59) {
            changedValue = 0;
        }
        if (changedValue < 0) {
            changedValue = 59;
        }
        return changedValue;
    };

    const saveChangedValue = (type: string, delta: number) => {
        if (type === "hours") {
            const changedHours = changeHours(delta);
            setEditedTimeByValues(changedHours, minutes, seconds);
        }
        if (type === "minutes") {
            const changedMinutes = changeMinutesAndSeconds(minutes, delta);
            setEditedTimeByValues(hours, changedMinutes, seconds);
        }
        if (type === "seconds") {
            const changedseconds = changeMinutesAndSeconds(seconds, delta);
            setEditedTimeByValues(hours, minutes, changedseconds);
        }
    };

    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.slice(1);
        if (/^\d*$/.test(value)) {
            let newValue = Number(value);
            if (name === "hours") {
                if (newValue > 24) {
                    newValue = 0;
                }
                setEditedTimeByValues(newValue, minutes, seconds);
            }
            if (name === "minutes") {
                if (newValue > 59) {
                    newValue = 0;
                }
                setEditedTimeByValues(hours, newValue, seconds);
            }
            if (name === "seconds") {
                if (newValue > 59) {
                    newValue = 0;
                }
                setEditedTimeByValues(hours, minutes, newValue);
            }
        }
    };

    const wheelHandle = (e: React.WheelEvent<HTMLInputElement>, type: string) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -1 : 1;
        saveChangedValue(type, delta);
    };

    const keyboardHandle = (e: React.KeyboardEvent<HTMLInputElement>, type: string) => {
        e.preventDefault();
        const codeKey = e.code;
        if (codeKey === "ArrowUp" || codeKey === "ArrowDown") {
            const delta = codeKey === "ArrowUp" ? 1 : -1;
            saveChangedValue(type, delta);
        }
    };
    return {
        value: getCurrentValue(),
        changeHandle,
        wheelHandle,
        keyboardHandle,
    };
}
