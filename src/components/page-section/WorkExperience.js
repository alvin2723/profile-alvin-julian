import React from "react";
import PropTypes from "prop-types";

const WorkExperience = ({ work }) => {
  return (
    <div className="experience-timeline-container work-experience">
      <div className="content">
        <span className="time">{work.time}</span>
        <h6 className="title">{work.title}</h6>
        <div className="desc">
          <p>Place : {work.place}</p>
          <p>Task and Achievement :</p>
          <ul className="list-disc">
            {work.achieve.map((child, key) => {
              if (key >= 0) return <li key={key}>{child}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

WorkExperience.propTypes = {
  work: PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    place: PropTypes.string,
    achieve: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default WorkExperience;
