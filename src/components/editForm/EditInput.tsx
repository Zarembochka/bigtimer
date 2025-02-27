import styles from "./ui/editForm.module.css";
import { displayTime } from "@/utils/helpers";
import { useEditInputLogic } from "@/hooks/useEditInputLogic";

interface IEditInput {
    name: string;
}

export function EditInput({ name }: IEditInput) {
    const { value, changeHandle, wheelHandle } = useEditInputLogic(name);
    return (
        <div className={styles.digits}>
            <input
                className={styles.input}
                name={name}
                value={displayTime(value)}
                onChange={(e) => changeHandle(e)}
                onWheel={(e) => wheelHandle(e, name)}
            />
            <label htmlFor={name} className={styles.label}>
                <span>{name}</span>
            </label>
        </div>
    );
}
