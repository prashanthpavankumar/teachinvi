"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FacultyMember } from "../data/faculty";
import { ShaderBackground } from "./ui/mesh-drift-shader";
import QuestionExperience from "./main/QuestionExperience";
import InvitationTransition from "./main/InvitationTransition";
import InvitationHero from "./main/InvitationHero";
import EmotionalStory from "./main/EmotionalStory";
import PersonalizedMessage from "./main/PersonalizedMessage";
import MemoriesGallery from "./main/MemoriesGallery";
import CelebrationReveal from "./main/CelebrationReveal";
import EventDetails from "./main/EventDetails";
import Countdown from "./main/Countdown";
import FinalInvitation from "./main/FinalInvitation";
import Finale from "./main/Finale";
import styles from "./MainSection.module.css";

interface MainSectionProps {
  faculty: FacultyMember;
}

export default function MainSection({ faculty }: MainSectionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleYesSelected = () => {
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setIsUnlocked(true);
  };

  return (
    <div className={styles.mainContainer}>
      {/* WebGL Mesh Drift Shader Background */}
      <ShaderBackground style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      <AnimatePresence>
        {isTransitioning && (
          <InvitationTransition onComplete={handleTransitionComplete} />
        )}
      </AnimatePresence>

      <div style={{ position: "relative", zIndex: 1 }}>
        {!isUnlocked ? (
          /* PHASE 1: Playful Question */
          <QuestionExperience
            faculty={faculty}
            onYesSelected={handleYesSelected}
          />
        ) : (
          /* PHASE 2: Main Invitation Story Unfolding */
          <>
            <InvitationHero />
            <EmotionalStory />
            <PersonalizedMessage faculty={faculty} />
            <MemoriesGallery />
            <CelebrationReveal />
            <EventDetails />
            <Countdown />
            <FinalInvitation />
            <Finale faculty={faculty} />
          </>
        )}
      </div>
    </div>
  );
}
