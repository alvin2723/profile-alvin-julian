import React from "react";
import Profile from "../components/ProfileSection";
import Projects from "../components/ProjectsSection";
import Skills from "../components/SkillsSection";
import Experiences from "../components/ExperiencesSection";
import Bootcamps from "../components/BootcampsSection";

export default function MainSection() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Profile />
      <Skills />
      <Experiences />
      <Bootcamps />
      <Projects />
    </div>
  );
}
