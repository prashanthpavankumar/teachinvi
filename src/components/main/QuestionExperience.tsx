"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FacultyMember } from "../../data/faculty";
import styles from "../MainSection.module.css";

interface Props {
  faculty: FacultyMember;
  onYesSelected: () => void;
}

const NO_STATES = [
  { question: "WILL YOU JOIN US THIS TEACHER'S DAY?", label: "no" },
  { question: "ARE YOU SURE?", label: "no :(" },
  { question: "REALLY?", label: "no...(Our tears are about to fall) 🥺" },
  { question: "YOU'D REALLY MISS IT?", label: "please? 👉👈" },
  { question: "COME ON...", label: "please 🥹" },
  { question: "YOU'RE BREAKING OUR HEARTS.", label: "We'll be sad 💔" },
  { question: "OKAY... BUT WHY? 😭", label: "no 🏃‍♂️" },
  { question: "FINE. WE'RE TAKING THAT AS A YES. :)", label: "" },
];

export default function QuestionExperience({ faculty, onYesSelected }: Props) {
  const [noIndex, setNoIndex] = useState(0);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  const handleNoInteraction = () => {
    if (noIndex < NO_STATES.length - 1) {
      setNoIndex((prev) => prev + 1);
      const randomX = (Math.random() - 0.5) * 260;
      const randomY = (Math.random() - 0.5) * 180;
      setNoOffset({ x: randomX, y: randomY });
    }
  };

  return (
    <section className={styles.fullScene}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.centerComposition}
      >
        <p className={styles.kicker}>{faculty.name.toUpperCase()}</p>
        <p className={styles.editorialSub}>WE HAVE A QUESTION FOR YOU.</p>

        <h2 className={styles.questionTitle}>
          {NO_STATES[noIndex].question}
        </h2>

        <div className={styles.questionActions}>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYesSelected}
            className={styles.primaryYesBtn}
          >
            {noIndex === 7 ? "YES, I'LL BE THERE! ❤️" : "YES, OF COURSE ♡"}
          </motion.button>

          {noIndex < 7 && (
            <motion.button
              animate={{ x: noOffset.x, y: noOffset.y }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              onMouseEnter={handleNoInteraction}
              onClick={handleNoInteraction}
              className={styles.secondaryNoBtn}
            >
              {NO_STATES[noIndex].label}
            </motion.button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
