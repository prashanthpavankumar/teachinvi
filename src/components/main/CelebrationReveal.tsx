"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 2,
  duration: Math.random() * 3 + 3,
  color: i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#818cf8" : "#f43f5e",
}));

export default function CelebrationReveal() {
  return (
    <section className={styles.fullScene} style={{ position: "relative", overflow: "hidden" }}>
      {/* Celebration Floating Particles */}
      <div className={styles.particleContainer}>
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            className={styles.particle}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 12px ${p.color}`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className={styles.centerComposition}
      >
        <p className={styles.kicker}>AND NOW...</p>
        <p className={styles.celebrationSub}>IT'S TIME TO</p>
        
        <h1 className={styles.celebrationMainTitle}>
          CELEBRATE.
        </h1>

        <div className={styles.celebrationBanner}>
          <span className="gradient-text">TEACHER'S DAY 2026</span>
        </div>
      </motion.div>
    </section>
  );
}
