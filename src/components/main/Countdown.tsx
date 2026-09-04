"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

const EVENT_DATE = new Date("2026-09-05T14:00:00").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.fullScene}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.centerComposition}
      >
        <span className={styles.kicker}>EVENT COUNTDOWN</span>

        {timeLeft.isPast ? (
          <h2 className={styles.countdownTitle}>TODAY'S THE DAY. 🎉</h2>
        ) : (
          <div className={styles.countdownGrid}>
            <div className={styles.countUnit}>
              <span className={styles.countNum}>
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className={styles.countLabel}>DAYS</span>
            </div>
            <div className={styles.countUnit}>
              <span className={styles.countNum}>
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className={styles.countLabel}>HOURS</span>
            </div>
            <div className={styles.countUnit}>
              <span className={styles.countNum}>
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className={styles.countLabel}>MINUTES</span>
            </div>
            <div className={styles.countUnit}>
              <span className={styles.countNum}>
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className={styles.countLabel}>SECONDS</span>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
