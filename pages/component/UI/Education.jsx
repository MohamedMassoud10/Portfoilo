import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/education.module.css";

const Education = () => {
  return (
    <div id="education">
      <div className={`${classes.container}`}>
        <div className={`${classes.education__content}`}>
          <SectionSubtitle subtitle="Education" />
          <div className={`${classes.education__item}`} data-aos="fade-up" data-aos-duration="800">
            <h4>Egyptian Russian University</h4>
            <p className={`${classes.education__degree}`}>Bachelor of Artificial Intelligence</p>
            <p className={`${classes.education__details}`}>
              <span className={`${classes.education__location}`}>Cairo, Egypt</span>
              <span className={`${classes.education__date}`}>Graduated: June 2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

