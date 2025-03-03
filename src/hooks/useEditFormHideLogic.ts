import { useStoreEditForm } from "@/store/storeEditForm";

export function useEditFormHideLogic() {
    const { isFormShown, toggleEditForm } = useStoreEditForm();

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const editForm = document.getElementById("editForm");
        if (isFormShown && editForm) {
            if (!editForm.contains(e.target as Node)) {
                toggleEditForm();
            }
        }
    };

    return {
        clickHandle,
    };
}
