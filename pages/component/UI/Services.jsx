import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/services.module.css";
import ServicesItem from "./ServicesItem";
import "remixicon/fonts/remixicon.css";

const Services = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "React Native (CLI & Expo)",
    "JavaScript (ES6)",
    "TypeScript",
    "Tailwind CSS",
    "MUI",
    "Material UI",
    "Chakra UI",
    "Unistyles",
    "Bootstrap",
    "Redux & Redux Toolkit"
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Mongoose",
    "Socket.io",
    "Docker",
    "CI/CD Pipelines"
  ];

  const programmingLanguages = [
    "Java",
    "C++",
    "Python",
    "NumPy",
    "Pandas"
  ];

  return (
    <div id="services">
      <div className={`${classes.container}`}>
        <div className={`${classes.services__container}`}>
          <div className={`${classes.services__left}`} data-aos="fade-right" data-aos-duration="800">
            <div className={`${classes.services__grid}`}>
              <div className={`${classes.services__column}`}>
                <div data-aos="fade-up" data-aos-delay="100">
                  <ServicesItem title="Frontend" icon="ri-apps-line" />
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <ServicesItem title="Backend" icon="ri-code-s-slash-line" />
                </div>
              </div>
              <div className={`${classes.services__column}`}>
                <div data-aos="fade-up" data-aos-delay="300">
                  <ServicesItem
                    title="Mobile Apps Development"
                    icon="ri-smartphone-line"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <ServicesItem
                    title="Web Applications Development"
                    icon="ri-computer-line"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.services__right}`} data-aos="fade-left" data-aos-duration="800">
            <SectionSubtitle subtitle="What I do" />
            <h3 className={`${classes.services__heading}`}>
              Better Design,
            </h3>
            <h3 className={`${classes.services__heading} ${classes.services__heading__accent}`}>
              Better Experience
            </h3>
            <p className={`${classes.text__justify} ${classes.services__description}`}>
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
        
        <div className={`${classes.skills__section}`} data-aos="fade-up" data-aos-duration="800">
          <SectionSubtitle subtitle="Technical Skills" />
          <div className={`${classes.skills__container}`}>
            <div className={`${classes.skills__category}`} data-aos="fade-up" data-aos-delay="100">
              <h4 className={`${classes.skills__title}`}>Frontend</h4>
              <div className={`${classes.skills__tags}`}>
                {frontendSkills.map((skill, index) => (
                  <span key={index} className={`${classes.skill__tag}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${classes.skills__category}`} data-aos="fade-up" data-aos-delay="200">
              <h4 className={`${classes.skills__title}`}>Backend</h4>
              <div className={`${classes.skills__tags}`}>
                {backendSkills.map((skill, index) => (
                  <span key={index} className={`${classes.skill__tag}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${classes.skills__category}`} data-aos="fade-up" data-aos-delay="300">
              <h4 className={`${classes.skills__title}`}>Programming Languages</h4>
              <div className={`${classes.skills__tags}`}>
                {programmingLanguages.map((skill, index) => (
                  <span key={index} className={`${classes.skill__tag}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
