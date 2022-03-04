import React from "react";
import BootcampExperience from "./page-section/BootcampExperience";

const webDevBootcampUdemy = {
  image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_15.jpg",
  time: "6 Months",
  title: "Web Develop Bootcamp",
  course: "Udemy Course",
  skills: "Javascript, HTML & CSS, Mongo DB, React JS, Node JS",
  certificate:
    "https://drive.google.com/file/d/137r6gIgP15C_QNMLqP-Xyx1ZcbWsXtKM/view",
};
const androidDevBootcampDicoding = {
  image:
    "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-lp-android-developer-3.jpg",
  time: "1 Months",
  title: "Android Develop Bootcamp",
  course: "Dicoding",
  skills: "Fundamental of Android, JAVA, Android Studio",
  certificate:
    "https://drive.google.com/file/u/2/d/1Qn6O06CLbIphpXqG9LbCJi8eYZFCuxH7/view?usp=sharing",
};
const liffBootcampDicoding = {
  image:
    "https://d17ivq9b7rppb3.cloudfront.net/original/academy/20201117114312af0b9be0d0c62ed11a2206a09254085b.jpg",
  time: "1 Months",
  title: "LIFF Framework Bootcamp",
  course: "Dicoding",
  skills: "LIFF(Line Front-end Framework), API in LINE Developer",
  certificate:
    "https://drive.google.com/file/d/1uHQZLdywNpIGTC1pXEpAbnzMfx7RrN2Q/view",
};

export default function Bootcamps() {
  return (
    <div id="bootcamps">
      <div className="bootcamps-wrapper section-space--pb_60">
        <h4 className="text-left">Bootcamps</h4>
        <div className="flex flex-col md:flex-row justify-center items-center py-8">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            <BootcampExperience boot={webDevBootcampUdemy} />
            <BootcampExperience boot={androidDevBootcampDicoding} />
            <BootcampExperience boot={liffBootcampDicoding} />
          </div>
        </div>
      </div>
    </div>
  );
}
