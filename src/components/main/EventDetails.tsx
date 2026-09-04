"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

export default function EventDetails() {
  return (
    <section className={styles.fullScene}>
      <div className={styles.detailsGrid}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.detailBlock}
        >
          <span className={styles.kicker}>WHEN?</span>
          <div className={styles.bigDateNum}>05</div>
          <div className={styles.detailTextLarge}>SEPTEMBER 2026</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.detailBlock}
        >
          <span className={styles.kicker}>TIME</span>
          <div className={styles.detailTextHuge}>02:00 PM</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.detailBlockFull}
        >
          <span className={styles.kicker}>WHERE?</span>
          <div className={styles.detailTextHuge}>III/V CM-C CLASSROOM </div>
          <span className={styles.detailSubText}>CAMPUS MAIN BUILDING • FIRST FLOOR</span>
        </motion.div>
      </div>
    </section>
  );
}
