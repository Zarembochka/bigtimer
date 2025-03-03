import { create } from "zustand";

interface IStoreEditForm {
    editedTime: number;
    isFormShown: boolean;
    setEditedTime: (value: number) => void;
    toggleEditForm: () => void;
    setEditedTimeByValues: (hours: number, minutes: number, seconds: number) => void;
}

export const useStoreEditForm = create<IStoreEditForm>((set) => {
    return {
        editedTime: 0,
        isFormShown: false,
        setEditedTime: (value: number) => {
            set(() => ({ editedTime: value }));
        },
        toggleEditForm: () => {
            set((state) => ({ isFormShown: !state.isFormShown }));
        },
        setEditedTimeByValues: (hours, minutes, seconds) => {
            set(() => ({ editedTime: hours * 3600 + minutes * 60 + seconds }));
        },
    };
});
