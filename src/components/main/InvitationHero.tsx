"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

export default function InvitationHero() {
  return (
    <section className={styles.fullScene}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={styles.centerComposition}
      >
        <p className={styles.kicker}>YOU ARE CORDIALLY INVITED TO</p>
        
        <h1 className={styles.heroTitle}>
          TEACHER'S DAY <span className="gradient-text">2026</span>
        </h1>

        <div className={styles.editorialDateBlock}>
          <span className={styles.dateNumber}>05</span>
          <div className={styles.dateMonthYear}>
            <span className={styles.dateMonth}>SEPTEMBER</span>
            <span className={styles.dateYear}>2026</span>
          </div>
        </div>

        <p className={styles.heroSubText}>AN EVENING OF HONOR, GRATITUDE & CELEBRATION</p>
      </motion.div>
    </section>
  );
}
