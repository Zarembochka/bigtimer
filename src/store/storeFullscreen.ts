import { create } from "zustand";

interface IStoreFullscreen {
    isFullscreen: boolean;
    toggle: () => void;
}

export const useStoreFullscreen = create<IStoreFullscreen>((set, get) => {
    return {
        isFullscreen: false,
        toggle: () => {
            set((state) => ({ isFullscreen: !state.isFullscreen }));
            const { isFullscreen } = get();
            if (isFullscreen) {
                document.documentElement.requestFullscreen();
                return;
            }
            document.exitFullscreen();
        },
    };
});
