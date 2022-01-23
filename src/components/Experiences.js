import React from "react";
import EduExperience from "./page-section/EduExperience";
import WorkExperience from "./page-section/WorkExperience";

const labAssistant = {
  time: "Feb 2018 - Dec 2019",
  title: "Laboratory Assistant",
  place: "Multimedia Nusantara University",
  achieve: [
    "Earn The Best Laboratory Assistant on Introduction to Multimedia",
    "Got a Certificate",
  ],
};

const webInternGolden = {
  time: "Juny 2020 - Dec 2020",
  title: "Web Developer Intern",
  place: "GNG Golden Investama",
  achieve: ["Learn new Skills like PHP, LARAVEL, and WORDPRESS"],
};

const fullstackDevSinarmas = {
  time: "Feb 2021 - Juny 2021",
  title: "Sinarmas Land Indonesia",
  place: "Multimedia Nusantara University",
  achieve: ["Learn new Skills like Developing Web and Apps using OUTSYSTEMS"],
};

const webDevCommsult = {
  time: "Juny 2021 - Present",
  title: "Web Developer Fulltime",
  place: "commsult Indonesia",
  achieve: [""],
};

export default function Experiences() {
  return (
    <div id="experiences">
      <div className="section-space--ptb_60">
        <h4 className="text-left">Experience</h4>
        <div className="experience-wrap py-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 px-4">
              <div className="rounded-xl p-8 shadow-lg bg-white overflow-hidden relative">
                <EduExperience
                  time="2017-2021"
                  title="Bachelor Degree"
                  place="Multimedia Nusantara University"
                />
                <EduExperience
                  time="2014 - 2017"
                  title="SMP AND SMA"
                  place="SMP / SMA Xaverius 1 JAMBI"
                />
                <span className="line-edu"></span>
              </div>
            </div>
            <div className="md:w-1/2 px-4">
              <div className="rounded-xl p-8 shadow-lg bg-white overflow-hidden relative">
                <WorkExperience work={webDevCommsult} />
                <WorkExperience work={fullstackDevSinarmas} />
                <WorkExperience work={webInternGolden} />
                <WorkExperience work={labAssistant} />
                <span className="line-work"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
