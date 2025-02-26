import Form from "next/form";
import styles from "../components/ui/editForm.module.css";
import { style } from "motion/react-client";
import { useStoreEditForm } from "@/store/storeEditForm";

interface IEditForm {
    hours: string;
    minutes: string;
    seconds: string;
}

export function EditForm({ hours, minutes, seconds }: IEditForm) {
    const { isFormShown } = useStoreEditForm();
    return (
        <>
            {isFormShown && (
                <Form action="" className={styles.form}>
                    <input className={styles.input} name="hours" defaultValue={hours} pattern="\d*" />
                    <span className={styles.divider}> : </span>
                    <input className={styles.input} name="minutes" defaultValue={minutes} pattern="\d*" />
                    <span className={styles.divider}> : </span>
                    <input className={styles.input} name="seconds" defaultValue={seconds} pattern="\d*" />
                </Form>
            )}
        </>
    );
}
