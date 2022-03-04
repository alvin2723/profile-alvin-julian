import React from "react";
import { skills } from "../SkillsData";

export default function Skills() {
  return (
    <div id="skills">
      <hr className="section-space--pb_60" />
      <div className="skills-wrapper">
        <h4 className="text-left">Skills</h4>
        <div className="flex flex-col md:flex-row py-8">
          <div className="frontend-skills w-100 md:w-1/2 overflow-hidden">
            <h5 className="text-center">Front End</h5>
            <div className="p-4 md:flex items-center justify-center flex-wrap">
              {skills
                .filter((skill) => skill.label.includes("FrontEnd"))
                .map((skill) => (
                  <div key={skill.name} className="w-100 md:w-1/2 lg:w-1/3 p-4">
                    <img
                      src={skill.image}
                      alt=""
                      className="h-36 md:h-16 lg:h-20 rounded-full mx-auto"
                    />
                    <div className="text-center py-2 skill-name">
                      {skill.name}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="backend-skills w-100 md:w-1/2 overflow-hidden md:border-l-2">
            <h5 className="text-center">Back End</h5>
            <div className="p-4 flex items-center justify-center flex-wrap">
              {skills
                .filter((skill) => skill.label.includes("BackEnd"))
                .map((skill) => (
                  <div key={skill.name} className="md:w-1/2 lg:w-1/3 p-4">
                    <img
                      src={skill.image}
                      alt=""
                      className="h-36 md:h-16 lg:h-20 rounded mx-auto"
                    />
                    <div className="text-center py-2 skill-name">
                      {skill.name}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
