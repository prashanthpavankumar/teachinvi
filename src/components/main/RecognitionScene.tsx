"use client";

import React from "react";
import { motion } from "framer-motion";
import { FacultyMember } from "../../data/faculty";
import styles from "../MainSection.module.css";

interface Props {
  faculty: FacultyMember;
}

export default function RecognitionScene({ faculty }: Props) {
  return (
    <section className={styles.fullScene}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.centerComposition}
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.editorialSub}
        >
          HEY THERE,
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className={styles.heroName}
        >
          {faculty.name.toUpperCase()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className={styles.editorialTagline}
        >
          WE'VE BEEN WAITING FOR YOU.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={styles.badgeWrapper}
        >
          <span className={styles.deptBadge}>{faculty.department.toUpperCase()}</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={styles.scrollIndicator}
        >
          SCROLL TO UNFOLD ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
