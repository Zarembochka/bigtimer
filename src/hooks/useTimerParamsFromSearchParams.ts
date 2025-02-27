import { useStoreTime } from "@/store/storeTime";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useTimerParamsFromSearchParams() {
    const searchParams = useSearchParams();
    const { setTime, setRepeat } = useStoreTime();
    const seconds = searchParams.get("seconds");
    const repeat = searchParams.get("repeat");
    const target = searchParams.get("target");

    useEffect(() => {
        let isTimerStarted = false;
        if (!seconds) {
            setTime(600);
        } else {
            const parsedSeconds = parseInt(seconds, 10);
            let leftSeconds = 0;
            //target
            if (target) {
                const parsedTarget = parseInt(target, 10);
                const passedTime = Date.now() - parsedTarget;
                leftSeconds = Math.max(parsedSeconds - Math.floor(passedTime / 1000), 0);
                isTimerStarted = leftSeconds > 0;
            }
            setTime(parsedSeconds, leftSeconds, isTimerStarted);
            setRepeat(repeat === "true");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setTime, setRepeat, repeat, seconds]);
}
