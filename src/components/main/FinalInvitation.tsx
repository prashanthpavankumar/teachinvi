"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../MainSection.module.css";

export default function FinalInvitation() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section className={styles.fullScene}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.centerComposition}
      >
        <span className={styles.kicker}>SO...</span>

        <h2 className={styles.finalInvTitle}>
          WILL WE SEE YOU THERE?
        </h2>

        {!confirmed ? (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setConfirmed(true)}
            className={styles.finalYesBtn}
          >
            YES. ♡
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.confirmedBadge}
          >
            WE'LL SEE YOU THERE. ❤️
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
