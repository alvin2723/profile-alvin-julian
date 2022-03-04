import React from "react";
import PropTypes from "prop-types";

const BootcampExperience = ({ boot }) => {
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg">
      <div className="relative">
        <img className="w-full rounded-xl" src={boot.image} alt="Colors" />
      </div>
      <h5 className="mt-4 font-bold cursor-pointer">{boot.title}</h5>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p>{boot.time}</p>
        </div>
        <div className="flex space-x-1 items-center mt-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <p>{boot.course}</p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </span>
          <p className="mt-2">{boot.skills}</p>
        </div>
        <a
          href={boot.certificate}
          className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg block text-center transform hover:scale-105 transition duration-500"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

BootcampExperience.propTypes = {
  work: PropTypes.shape({
    image: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    course: PropTypes.string,
    skills: PropTypes.string,
    certificate: PropTypes.string,
  }),
};

export default BootcampExperience;
