"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { findFacultyByBirthday, FacultyMember } from "../data/faculty";
import styles from "./LoginSection.module.css";

interface LoginSectionProps {
  onSuccess: (faculty: FacultyMember) => void;
}

const DAYS = Array.from({ length: 31 }, (_, i) => {
  const num = i + 1;
  return num < 10 ? `0${num}` : `${num}`;
});

const MONTHS = [
  { value: "01", label: "01 - JAN" },
  { value: "02", label: "02 - FEB" },
  { value: "03", label: "03 - MAR" },
  { value: "04", label: "04 - APR" },
  { value: "05", label: "05 - MAY" },
  { value: "06", label: "06 - JUN" },
  { value: "07", label: "07 - JUL" },
  { value: "08", label: "08 - AUG" },
  { value: "09", label: "09 - SEP" },
  { value: "10", label: "10 - OCT" },
  { value: "11", label: "11 - NOV" },
  { value: "12", label: "12 - DEC" },
];

export default function LoginSection({ onSuccess }: LoginSectionProps) {
  const [phase, setPhase] = useState<"entrance" | "recognition">("entrance");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const handleBirthdaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!selectedDay || !selectedMonth) {
      setErrorMsg("Please select both day and month");
      return;
    }

    const birthdayStr = `${selectedDay}/${selectedMonth}`;
    const member = findFacultyByBirthday(birthdayStr);
    if (member) {
      setSelectedFaculty(member);
      setPhase("recognition");
    } else {
      setErrorMsg(`Hmm... invitation not found for ${birthdayStr}. Please verify your birthday selection.`);
    }
  };

  const handleContinue = () => {
    if (selectedFaculty) {
      onSuccess(selectedFaculty);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* Background Anime City Image with Dark Vignette */}
      <div className={styles.bgImageContainer}>
        <img
          src="/login-bg.jpg"
          alt="Login Background"
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      <main className={styles.contentWrapper}>
        <AnimatePresence mode="wait">
          {/* ENTRANCE & BIRTHDAY DROPDOWN SELECTION */}
          {phase === "entrance" && (
            <motion.div
              key="entrance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`${styles.sceneContainer} ${styles.entranceScene}`}
            >
              <div className={styles.kicker}>TEACHER'S DAY 2026</div>
              <h1 className={styles.mainHeading}>A LITTLE SOMETHING AWAITS YOU.</h1>

              <div className={styles.formSection}>
                <p className={styles.promptSub}>FIRST, TELL US...</p>
                <h2 className={styles.promptMain}>YOUR BIRTHDAY</h2>

                <form onSubmit={handleBirthdaySubmit} className={styles.birthdayForm}>
                  <div className={styles.dropdownRow}>
                    <div className={styles.selectGroup}>
                      <label className={styles.selectLabel}>DAY</label>
                      <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        className={styles.dropdownSelect}
                      >
                        <option value="" disabled className={styles.optionItem}>
                          DD
                        </option>
                        {DAYS.map((day) => (
                          <option key={day} value={day} className={styles.optionItem}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>

                    <span className={styles.slashDivider}>/</span>

                    <div className={styles.selectGroup}>
                      <label className={styles.selectLabel}>MONTH</label>
                      <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className={styles.dropdownSelect}
                      >
                        <option value="" disabled className={styles.optionItem}>
                          MM
                        </option>
                        {MONTHS.map((m) => (
                          <option key={m.value} value={m.value} className={styles.optionItem}>
                            {m.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className={styles.enterBtn}>
                      ENTER →
                    </button>
                  </div>
                </form>

                {errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.errorText}
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </div>
            </motion.div>
          )}

          {/* PERSONALIZED RECOGNITION */}
          {phase === "recognition" && selectedFaculty && (
            <motion.div
              key="recognition"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={styles.sceneContainer}
            >
              <div className={styles.kicker}>HEY THERE,</div>
              <h1 className={styles.facultyTitle}>{selectedFaculty.name.toUpperCase()}</h1>
              <p className={styles.waitingText}>WE'VE BEEN WAITING FOR YOU.</p>
              <span className={styles.deptBadge}>{selectedFaculty.department.toUpperCase()}</span>

              <div style={{ marginTop: "3rem" }}>
                <button
                  onClick={handleContinue}
                  className={styles.continueBtn}
                >
                  CONTINUE →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className={styles.loginFooter}>
        Developed and designed by Prashanth (24093-CM-156)
      </footer>
    </div>
  );
}
