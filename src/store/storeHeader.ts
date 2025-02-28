import { create } from "zustand";

interface IStoreHeader {
    isHeader: boolean;
    setHeader: () => void;
    hideHeader: () => void;
}

export const useStoreHeader = create<IStoreHeader>((set) => {
    return {
        isHeader: true,
        setHeader: () => {
            set(() => ({ isHeader: true }));
        },
        hideHeader: () => {
            set(() => ({ isHeader: false }));
        },
    };
});
