"use client";

import React from "react";
import { motion } from "framer-motion";
import { FacultyMember } from "../../data/faculty";
import styles from "../MainSection.module.css";

interface Props {
  faculty: FacultyMember;
}

export default function PersonalizedMessage({ faculty }: Props) {
  return (
    <section className={styles.fullScene}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={styles.centerComposition}
      >
        <span className={styles.kicker}>{faculty.name.toUpperCase()}</span>
        <h2 className={styles.personalizedHeader}>THIS PART IS ESPECIALLY FOR YOU.</h2>

        <div className={styles.editorialLetterBox}>
          <div className={styles.letterQuoteMark}>“</div>
          <p className={styles.letterMessage}>{faculty.message}</p>
          <div className={styles.letterSignature}>— YOUR STUDENTS</div>
        </div>
      </motion.div>
    </section>
  );
}
