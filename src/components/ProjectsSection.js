import React, { useState } from "react";
import ProjectsCard from "./page-section/ProjectsCard";
import { projects } from "../ProjectsData";
import ProjectModal from "./page-section/ProjectModal";

// const ontegodeWeb = {
//   id: "web-pro-2",
//   image:
//     "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-lp-android-developer-3.jpg",
//   title: "Ontego.de Website",
//   desc: "Hotel Landing Page Website",
//   url: "",
//   tech: ["HTML", "CSS", "JS", "PHP"],
// };
// const ontegoglWeb = {
//   id: "web-pro-3",
//   image:
//     "https://d17ivq9b7rppb3.cloudfront.net/original/academy/20201117114312af0b9be0d0c62ed11a2206a09254085b.jpg",
//   title: "Ontego.gl Website",
//   desc: "Hotel Landing Page Website",
//   url: "",
//   tech: ["HTML", "CSS", "JS", "PHP"],
// };

export default function Projects() {
  const [isClicked, setIsClicked] = useState([]);
  const [open, setOpen] = useState(false);

  const handleShowModal = (id) => {
    setIsClicked(projects.find((x) => x.id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsClicked([]);
  };
  console.log("ds" + isClicked);
  return (
    <div id="portfolio-projects">
      <div className="projects-wrapper section-space--ptb_60">
        <h4 className="text-left">Portfolio Projects</h4>
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 pt-8">
          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              project={project}
              handleShowModal={handleShowModal}
            />
          ))}
        </div>
      </div>
      {isClicked && (
        <ProjectModal
          id={`${isClicked.id}`}
          project={isClicked}
          setOpen={setOpen}
          handleClose={handleClose}
          open={open}
        />
      )}
    </div>
  );
}
