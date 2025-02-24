"use client";

import { motion } from "motion/react";
import styles from "./ui/repeatButton.module.css";
import { useState } from "react";

export default function RepeatInput() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <li>
            <div className={styles.container} onClick={toggleSwitch}>
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
                        justifyContent: "flex-" + (!isOn ? "start" : "end"),
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
