"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

export default function EmotionalStory() {
  return (
    <section className={styles.fullScene}>
      <div className={styles.storyComposition}>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.storyLine}
        >
          SOME PEOPLE TEACH FROM A TEXTBOOK.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.storyLine}
        >
          SOME PEOPLE TEACH FROM EXPERIENCE.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.storyMuted}
        >
          AND SOME...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className={styles.storyHighlight}
        >
          TEACH US HOW TO BECOME BETTER PEOPLE.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className={styles.storyPunch}
        >
          YOU DO ALL THREE.
        </motion.div>
      </div>
    </section>
  );
}
