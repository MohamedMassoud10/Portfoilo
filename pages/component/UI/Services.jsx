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

              <ServicesItem title="Backend" icon="ri-code-s-slash-line" />
            </div>

            <ServicesItem
              title=" Web Applications Development"
              icon="ri-computer-line "
            />
          </div>
          <div>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Dedicated to building efficient web applications and enhancing
              user experiences. Skilled in both independent project management
              and collaborative teamwork. Proficient in MERN stack technologies,
              including MongoDB, Express, React, and Node.js, with a strong
              grasp of modern development practices like React Hooks and Redux.
              Committed to delivering high-quality code and exceptional service,
              ensuring smooth and seamless user experiences through better
              design and functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
