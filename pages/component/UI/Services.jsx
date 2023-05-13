import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/services.module.css";
import ServicesItem from "./ServicesItem";
import "remixicon/fonts/remixicon.css";
const Services = () => {
  return (
    <div id="services">
      <div className={`${classes.container}`}>
        <div className={`${classes.services__container}`}>
          <div className={`${classes.proSkills}`}>
            <div>
              <ServicesItem title="Frontend" icon="ri-apps-line" />

              <ServicesItem title="Web Development" icon="ri-computer-line" />
            </div>

            <ServicesItem
              title="Web Applications Development"
              icon="ri-code-s-slash-line"
            />
          </div>
          <div>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Capable of self-managing in addition to collaborating with others
              in group projects. Skilled in using HTML5, CSS3,SASS, JavaScript,
              React, React Hooks, and Redux. Excellent communication skills with
              clients to establish the best service quality to accomplish
              customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
