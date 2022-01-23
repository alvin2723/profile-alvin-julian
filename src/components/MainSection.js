import React from "react";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";

export default function MainSection() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Profile />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}
