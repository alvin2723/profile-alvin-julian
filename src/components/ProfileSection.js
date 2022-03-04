import React from "react";

export default function Profile() {
  return (
    <div className="profile-wrap section-space--ptb_40">
      <div className="profile-hero-block">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="profile-summary w-full md:w-1/2 order-2 md:order-1">
            <div className="profile-name">
              <h2>Hi, I'm Alvin</h2>
              <h6 className="uppercase">Web Developer</h6>
            </div>
            <div className="profile-intro">
              <p>
                Motivated Junior Web Developer with around 1-year of experience
                in developing and updating websites using various web
                programming&nbsp;languages.
              </p>
            </div>
          </div>
          <div className="profile-image order-1 md:order-2">
            <img src="image/profil.png" alt="" />
            <div className="mt-4 mb-4 w-full mx-auto text-center hover:scale-105 transition duration-400">
              <a
                href=""
                className="w-full text-white bg-indigo-600 py-3 px-4 rounded-xl shadow-lg text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        {/* <div className="profile-center">
          <div className="view-cv">
            <a
              type="button"
              href="https://drive.google.com/file/d/1DBI8AMtOGV1SVjmLWqn72sSWAY3_74iB/view?usp=sharing"
              className="btn btn-primary btn-lg px-4 text-light"
            >
              {" "}
              View My CV
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
