import Form from "next/form";
import styles from "./ui/editForm.module.css";
import { useStoreEditForm } from "@/store/storeEditForm";
import { EditInput } from "./EditInput";

interface IEditForm {
    hours: number;
    minutes: number;
    seconds: number;
}

export function EditForm() {
    const { isFormShown } = useStoreEditForm();

    return (
        <>
            {isFormShown && (
                <Form action="" className={styles.form}>
                    <EditInput name="hours" />
                    <span className={styles.divider}> : </span>
                    <EditInput name="minutes" />
                    <span className={styles.divider}> : </span>
                    <EditInput name="seconds" />
                </Form>
            )}
        </>
    );
}
