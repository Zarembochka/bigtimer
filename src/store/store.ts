import { time } from "console";
import { create } from "zustand";

interface IStore {
    time: number;
    isTimerStart: boolean;
    increase: () => void;
    decrease: () => void;
    start: () => void;
}

export const useStore = create<IStore>((set, get) => {
    let intervalId: NodeJS.Timeout | null = null;
    return {
        time: 600,
        isTimerStart: false,
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
        start: () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
            set((state) => ({
                isTimerStart: !state.isTimerStart,
            }));

            const { isTimerStart } = get();

            if (isTimerStart) {
                intervalId = setInterval(() => {
                    set((state) => {
                        if (state.time > 0) {
                            return { time: state.time - 1 };
                        }
                        return { time: 0 };
                    });
                }, 1000);
            }
        },
    };
});
