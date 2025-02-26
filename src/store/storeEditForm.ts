import { create } from "zustand";

interface IStoreEditForm {
    isFormShown: boolean;
    toggle: () => void;
}

export const useStoreEditForm = create<IStoreEditForm>((set, get) => {
    return {
        isFormShown: false,
        toggle: () => {
            set((state) => ({ isFormShown: !state.isFormShown }));
        },
    };
});
