import React from "react";
import PropTypes from "prop-types";

const EduExperience = ({ time, title, place }) => {
  return (
    <div className="experience-timeline-container education-experience">
      <div className="content">
        <span className="time">{time}</span>
        <h6 className="title">{title}</h6>
        <div className="desc">
          <p>Place : {place}</p>
        </div>
      </div>
    </div>
  );
};

EduExperience.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  place: PropTypes.string,
};

export default EduExperience;
