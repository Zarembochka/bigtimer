import { create } from "zustand";
import { useSearchParams } from "next/navigation";

interface IStoreTime {
    time: number;
    isTimerStart: boolean;
    isRepeat: boolean;
    increase: () => void;
    decrease: () => void;
    start: () => void;
    toggleRepeat: () => void;
    setTime: (seconds: number) => void;
    updateSearchParams: (seconds: number) => void;
}

export const useStoreTime = create<IStoreTime>((set, get) => {
    let intervalId: NodeJS.Timeout | null = null;
    const searchParams = new URLSearchParams(window.location.search);
    return {
        time: 600,
        isTimerStart: false,
        isRepeat: false,
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
                get().updateSearchParams(newTime);
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
                get().updateSearchParams(newTime);
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
        toggleRepeat: () => {
            set((state) => ({ isRepeat: !state.isRepeat }));
            const { time } = get();
            get().updateSearchParams(time);
        },
        setTime: (seconds: number) => {
            set((state) => ({ time: seconds }));
            get().updateSearchParams(seconds);
        },
        updateSearchParams: (seconds: number) => {
            const { isRepeat } = get();
            searchParams.set("seconds", seconds.toString());
            searchParams.set("repeat", String(isRepeat));
            const newUrl = window.location.pathname + "?" + searchParams.toString();
            window.history.replaceState({}, "", newUrl);
        },
    };
});
