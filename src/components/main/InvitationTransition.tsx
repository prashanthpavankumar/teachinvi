"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

interface Props {
  onComplete: () => void;
}

export default function InvitationTransition({ onComplete }: Props) {
  useEffect(() => {
    // Hold the transition overlay on screen for 3.2 seconds total so the user can comfortably read the invitation reveal
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.transitionOverlay}
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -8, opacity: 0 }}
        animate={{ scale: [0.5, 1.05, 1], rotate: [-8, 2, 0], opacity: [0, 1, 1] }}
        transition={{ duration: 1.8, times: [0, 0.7, 1], ease: "easeInOut" }}
        className={styles.transitionCard}
      >
        <span className={styles.transitionKicker}>OPENING INVITATION</span>
        <h2 className={styles.transitionText}>YOU ARE INVITED</h2>
      </motion.div>
    </motion.div>
  );
}
