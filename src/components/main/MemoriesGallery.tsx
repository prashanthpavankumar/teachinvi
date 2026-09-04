"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

interface MemoryItem {
  id: string;
  category: string;
  title: string;
  year?: string;
  rotation: number;
  width: string;
  minHeight: string;
  colorGradient: string;
  imageSrc?: string;
}

const MEMORIES: MemoryItem[] = [
  {
    id: "m1",
    category: "PREVIOUS YEAR'S CELEBRATION",
    title: "TEACHER'S DAY '25 — CEREMONY",
    year: "2025",
    rotation: -3,
    width: "580px",
    minHeight: "420px",
    colorGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    imageSrc: "/25 celebrations.jpeg",
  },
  {
    id: "m5",
    category: "PREVIOUS YEAR'S CELEBRATION",
    title: "TEACHER'S DAY '25 — HIGHLIGHTS",
    year: "2025",
    rotation: 4,
    width: "540px",
    minHeight: "420px",
    colorGradient: "linear-gradient(135deg, #0284c7 0%, #1e1b4b 100%)",
    imageSrc: "/highlights.jpeg",
  },
  {
    id: "m2",
    category: "OUR CAMPUS",
    title: "OUR COLLEGE BUILDING",
    rotation: -2,
    width: "480px",
    minHeight: "450px",
    colorGradient: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
    imageSrc: "/campus.jpg",
  },
  {
    id: "m3",
    category: "DEPARTMENT & LAB",
    title: "COMPUTER LABS",
    rotation: 3,
    width: "650px",
    minHeight: "440px",
    colorGradient: "linear-gradient(135deg, #0369a1 0%, #0f172a 100%)",
    imageSrc: "/labs.jpg",
  },
  {
    id: "m4",
    category: "COLLEGE MOMENTS",
    title: "CAMPUS LIFE",
    rotation: -4,
    width: "520px",
    minHeight: "400px",
    colorGradient: "linear-gradient(135deg, #312e81 0%, #0f172a 100%)",
    imageSrc: "/campuslife.jpg",
  },
];

export default function MemoriesGallery() {
  return (
    <section className={styles.galleryScene}>
      <div className={styles.galleryHeader}>
        <span className={styles.kicker}>SCATTERED MEMORIES</span>
        <h2 className={styles.galleryTitle}>MOMENTS WE CHERISH</h2>
      </div>

      <div className={styles.collageGrid}>
        {MEMORIES.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
            whileTap={{ scale: 0.98 }}
            className={styles.photoFrame}
            style={{
              width: "100%",
              maxWidth: item.width,
              minHeight: item.minHeight,
              background: item.colorGradient,
            }}
          >
            {item.imageSrc && (
              <img
                src={item.imageSrc}
                alt={item.title}
                className={styles.photoImg}
              />
            )}
            <div className={styles.photoOverlay} />
            <div className={styles.photoContent}>
              <span className={styles.photoCategory}>{item.category}</span>
              <h3 className={styles.photoTitle}>{item.title}</h3>
              {item.year && <span className={styles.photoYear}>{item.year}</span>}
              <div className={styles.photoBadge}>SNAPSHOT</div>
            </div>
            <div className={styles.pinDecoration} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

