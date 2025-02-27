import { create } from "zustand";

interface IStoreHeader {
    isHeader: boolean;
    toggleHeader: () => void;
}

export const useStoreFullscreen = create<IStoreHeader>((set, get) => {
    return {
        isHeader: false,
        toggleHeader: () => {
            set((state) => ({ isHeader: !state.isHeader }));
        },
    };
});
