import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/experience.module.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Really Beyond",
      type: "Part-Time, Remote",
      duration: "",
      date: "AUG 2025",
      description: "Worked as a Software Engineer handling both mobile and web development. As a React Native CLI developer, built a social media application, implemented core mobile features, collaborated on the app's architecture, and optimized performance across Android devices. Additionally, built a freelancing platform using Next.js and Mantine UI, implementing feature-based architecture, reusable modules, and improving the platform's scalability and performance."
    },
    {
      title: "MERN-Stack Developer",
      company: "Ideas & Concepts Group",
      type: "Full-Time, Remote",
      duration: "",
      date: "DEC 2023",
      description: "Delivered multiple large-scale projects using React, Next.js, Tailwind CSS, Node.js, and Express. Projects include: Sahm E-commerce Platform (sahmksa.com), E-Learning Platform, Windows & Doors Factory Management System, Corporate Dashboard & Main Website (i-c.com.sa), Tech Website (i-c.net.sa), ShelfsPro Retail Solution. Led a team of developers, set project architecture, reviewed code, and maintained production-quality deployments."
    },
    {
      title: "Web Counselor",
      company: "IEEE ERU SB",
      type: "Seasonal, Hybrid",
      duration: "",
      date: "AUG 2024",
      description: "Developed the official IEEE ERU website (ieee-eru.site). Delivered 3 training sessions on Frontend Fundamentals and guided students on real-world development workflows."
    },
    {
      title: "Frontend Developer",
      company: "YAFA Cloud Services LLC",
      type: "Full-Time, Remote",
      duration: "",
      date: "JUN 2023 – AUG 2023",
      description: "Developed responsive web applications using React, TypeScript, Tailwind CSS, and MUI. Built scalable front-end architecture and reusable UI components."
    },
    {
      title: "Python Trainee",
      company: "Huawei ICT Academy",
      type: "On-Site",
      duration: "",
      date: "AUG 2023 – OCT 2023",
      description: "Completed intensive training in Python programming, problem-solving, scripting, and automation. Gained hands-on experience through practical assignments and mini-projects."
    }
  ];

  return (
    <div id="experience">
      <div className={`${classes.container}`}>
        <div className={`${classes.experience__content}`}>
          <SectionSubtitle subtitle="Experience" />
          <div className={`${classes.experience__list}`}>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`${classes.experience__item}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`${classes.experience__timeline__point}`}></div>
                <div className={`${classes.experience__content__wrapper}`}>
                  <div className={`${classes.experience__header}`}>
                    <h4>{exp.title} — {exp.company}</h4>
                    <div className={`${classes.experience__meta}`}>
                      <span className={`${classes.experience__type}`}>{exp.type}</span>
                      {exp.duration && <span className={`${classes.experience__duration}`}>{exp.duration}</span>}
                      {exp.date && <span className={`${classes.experience__date}`}>| {exp.date}</span>}
                    </div>
                  </div>
                  <p className={`${classes.experience__description}`}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

