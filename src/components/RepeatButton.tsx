"use client";

import { motion } from "motion/react";
import styles from "./ui/repeatButton.module.css";
import { useStoreTime } from "../store/storeTime";

export default function RepeatInput() {
    const { isRepeat } = useStoreTime();
    const toggle = useStoreTime((state) => state.toggleRepeat);
    const toggleRepeat = () => {
        toggle();
    };

    return (
        <li>
            <div className={styles.container} onClick={toggleRepeat}>
                <motion.span
                    className={styles.label}
                    initial={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.15 }}
                >
                    Repeat
                </motion.span>
                <button
                    className={styles.btnContainer}
                    style={{
                        justifyContent: "flex-" + (isRepeat ? "end" : "start"),
                    }}
                >
                    <motion.div
                        className={styles.btnHandle}
                        layout
                        transition={{
                            type: "spring",
                            visualDuration: 0.2,
                            bounce: 0.2,
                        }}
                    />
                </button>
            </div>
        </li>
    );
}
