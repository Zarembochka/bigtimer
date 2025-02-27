import { useStoreHeader } from "@/store/storeHeader";
import { useRef } from "react";

export function useHeaderHideLogic() {
    const { hideHeader, setHeader } = useStoreHeader();

    const intervalId = useRef<NodeJS.Timeout | null>(null);

    const mouseMoveHandle = () => {
        if (intervalId.current) {
            clearTimeout(intervalId.current);
            setHeader();
        }
        intervalId.current = setTimeout(hideHeader, 3000);
    };
    return {
        mouseMoveHandle,
    };
}
