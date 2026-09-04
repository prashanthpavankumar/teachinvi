"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

const LESSONS = [
  {
    word: "CURIOSITY",
    subtitle: "You taught us to ask why.",
    accentColor: "#38bdf8",
  },
  {
    word: "COURAGE",
    subtitle: "To make mistakes without being afraid of them.",
    accentColor: "#818cf8",
  },
  {
    word: "DISCIPLINE",
    subtitle: "To keep going when things get difficult.",
    accentColor: "#c084fc",
  },
  {
    word: "CONFIDENCE",
    subtitle: "To believe that we can figure things out.",
    accentColor: "#34d399",
  },
];

export default function LessonsSection() {
  return (
    <div className={styles.lessonsContainer}>
      <div className={styles.lessonsHeader}>
        <span className={styles.kicker}>WHAT YOU TAUGHT US</span>
      </div>

      {LESSONS.map((lesson, idx) => (
        <section key={lesson.word} className={styles.lessonScene}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={styles.centerComposition}
          >
            <span className={styles.lessonNumber}>0{idx + 1}</span>
            <h2
              className={styles.lessonWord}
              style={{
                backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${lesson.accentColor} 100%)`,
              }}
            >
              {lesson.word}
            </h2>
            <p className={styles.lessonSubtitle}>{lesson.subtitle}</p>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
