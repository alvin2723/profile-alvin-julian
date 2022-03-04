import React from "react";
import PropTypes from "prop-types";

const ProjectsCard = ({ project, handleShowModal }) => {
  return (
    <div
      className="max-w-sm bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
      onClick={() => handleShowModal(project.id)}
    >
      <div className="w-full project-card-wrap px-6 pt-6 pb-2">
        <div className="project-image">
          <img src={project.image} alt="" className="w-full rounded-xl" />
        </div>

        <div className="project-overlay rounded-xl"></div>
        <div className="project-labels-wrap flex">
          {project.tech.map((child, key) => {
            if (key >= 0)
              return (
                <div className="project-labels-item" key={key}>
                  {child}
                </div>
              );
          })}
        </div>
        <div className="project-text p-4 text-center">
          <h5 className="font-bold mb-2">{project.title}</h5>
          <p className="mb-2">{project.desc}</p>
        </div>
        <div className="project-cta"></div>
        <div className="view-details-cta">Details</div>
      </div>
    </div>
  );
};

ProjectsCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    url: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProjectsCard;
