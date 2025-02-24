import { create } from "zustand";

interface IStore {
    time: number;
    increase: () => void;
    decrease: () => void;
}

export const useStore = create<IStore>((set) => ({
    time: 600,
    increase: () =>
        set((state) => {
            let newTime = state.time;
            if (newTime < 30) {
                newTime += 5;
            } else if (newTime < 300) {
                newTime += 30;
            } else {
                newTime += 60;
            }
            return { time: newTime };
        }),
    decrease: () =>
        set((state) => {
            let newTime = state.time;
            if (newTime === 0) {
                newTime = 0;
            } else if (newTime <= 30) {
                newTime -= 5;
            } else if (newTime <= 300) {
                newTime -= 30;
            } else {
                newTime -= 60;
            }
            return { time: newTime };
        }),
}));
