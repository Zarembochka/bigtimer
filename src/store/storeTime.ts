import { create } from "zustand";

interface IStoreTime {
    time: number;
    initialTime: number;
    isTimerStart: boolean;
    isRepeat: boolean;
    increase: () => void;
    decrease: () => void;
    start: () => void;
    toggleRepeat: () => void;
    setTime: (secondsInitial: number, secondsTime?: number, isStarted?: boolean) => void;
    setRepeat: (value: boolean) => void;
}

export const useStoreTime = create<IStoreTime>((set, get) => {
    let intervalId: NodeJS.Timeout | null = null;
    return {
        time: 600,
        initialTime: 600,
        isTimerStart: false,
        isRepeat: false,
        increase: () =>
            set((state) => {
                let newTime = state.initialTime;
                if (newTime < 30) {
                    newTime += 5;
                } else if (newTime < 300) {
                    newTime += 30;
                } else if (newTime < 3600) {
                    newTime += 60;
                } else {
                    newTime += 900;
                }
                if (newTime >= 86400) {
                    newTime = 86400;
                }
                return { initialTime: newTime, time: newTime };
            }),
        decrease: () =>
            set((state) => {
                let newTime = state.initialTime;
                if (newTime === 0) {
                    newTime = 0;
                } else if (newTime <= 30) {
                    newTime -= 5;
                } else if (newTime <= 300) {
                    newTime -= 30;
                } else if (newTime <= 3600) {
                    newTime -= 60;
                } else {
                    newTime -= 900;
                }
                return { initialTime: newTime, time: newTime };
            }),
        start: () => {
            const { initialTime } = get();
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
                        const { isRepeat } = get();
                        if (isRepeat) {
                            set(() => ({ time: initialTime }));
                            return { time: initialTime };
                        }
                        if (intervalId) {
                            clearInterval(intervalId);
                        }
                        return { time: 0, isTimerStart: !state.isTimerStart };
                    });
                }, 1000);
            }
        },
        toggleRepeat: () => {
            set((state) => ({ isRepeat: !state.isRepeat }));
        },
        setTime: (secondsInitial, secondsTime?, isStarted?) => {
            if (secondsInitial > 86400) {
                secondsInitial = 86400;
            }
            set(() => ({ initialTime: secondsInitial }));
            set(() => ({ time: secondsTime ? secondsTime : secondsInitial }));
            if (isStarted) {
                get().start();
            }
        },
        setRepeat: (value: boolean) => {
            set(() => ({
                isRepeat: value,
            }));
        },
    };
});
