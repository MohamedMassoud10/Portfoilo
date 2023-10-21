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
            Dedicated to crafting Better Design and elevating user experiences. 
            Equally adept at independent management and collaborative teamwork. 
            Proficient in HTML5, CSS3, SASS, JavaScript, React, React Hooks, and Redux. 
            Exceptional communication skills to deliver top-notch service quality, 
            ensuring customer satisfaction for a seamless Better Design, Better Experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
