"use client";

import { motion } from "motion/react";
import { FullscreenIcon, NotFullcreenIcon } from "@/utils/svg/icons";
import styles from "./ui/fullscreen.module.css";
import { useStoreFullscreen } from "@/store/storeFullscreen";

export function Fullscreen() {
    const isFullScreen = useStoreFullscreen((state) => state.isFullscreen);
    const toggle = useStoreFullscreen((state) => state.toggle);
    const toggleFullscreen = () => {
        toggle();
    };
    return (
        <li>
            <motion.div
                initial={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.15 }}
                className={styles.container}
                onClick={toggleFullscreen}
            >
                <span>Fullscreen</span>
                {isFullScreen && <NotFullcreenIcon />}
                {!isFullScreen && <FullscreenIcon />}
            </motion.div>
        </li>
    );
}
