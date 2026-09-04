"use client";

import React, { useState } from "react";
import LoginSection from "../components/LoginSection";
import MainSection from "../components/MainSection";
import { FacultyMember } from "../data/faculty";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [faculty, setFaculty] = useState<FacultyMember | null>(null);

  const handleLoginSuccess = (facultyMember: FacultyMember) => {
    setFaculty(facultyMember);
    setIsLoggedIn(true);
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#050811", color: "#ffffff" }}>
      {!isLoggedIn || !faculty ? (
        <LoginSection onSuccess={handleLoginSuccess} />
      ) : (
        <MainSection faculty={faculty} />
      )}
    </main>
  );
}
