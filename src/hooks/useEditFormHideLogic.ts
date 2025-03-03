import { useStoreEditForm } from "@/store/storeEditForm";

export function useEditFormHideLogic() {
    const { isFormShown, toggleEditForm } = useStoreEditForm();

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const editForm = document.getElementById("editForm");
        const startBtn = document.getElementById("startBtn");
        if (isFormShown && editForm && startBtn) {
            if (!editForm.contains(e.target as Node) && !startBtn.contains(e.target as Node)) {
                toggleEditForm();
            }
        }
    };

    return {
        clickHandle,
    };
}
