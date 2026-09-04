"use client";

import React from "react";
import { motion } from "framer-motion";
import { FacultyMember } from "../../data/faculty";
import styles from "../MainSection.module.css";

interface Props {
  faculty: FacultyMember;
}

export default function Finale({ faculty }: Props) {
  return (
    <section className={styles.finaleScene}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={styles.centerComposition}
      >
        <h1 className={styles.thankYouHeading}>THANK YOU.</h1>

        <div className={styles.appreciationLines}>
          <p>For teaching us.</p>
          <p>For guiding us.</p>
          <p>For believing in us.</p>
        </div>

        <div className={styles.happyTitleBlock}>
          <h2 className={styles.happyTitle}>HAPPY TEACHER'S DAY</h2>
          <span className={styles.happyName}>{faculty.name.toUpperCase()}</span>
        </div>

        <div className={styles.finalSignoff}>
          <p className={styles.withLove}>WITH LOVE,</p>
          <h3 className={styles.yourStudents}>YOUR STUDENTS</h3>
          <span className={styles.footerDot}>•</span>
          <p className={styles.footerTag}>TEACHER'S DAY 2026</p>
          <p className={styles.creditsTag}>
            Developed and designed by Prashanth (24093-CM-156)
          </p>
        </div>
      </motion.div>
    </section>
  );
}
