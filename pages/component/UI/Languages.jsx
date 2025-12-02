import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/languages.module.css";

const Languages = () => {
  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Conversational (Intermediate)" }
  ];

  return (
    <div id="languages">
      <div className={`${classes.container}`}>
        <div className={`${classes.languages__content}`}>
          <SectionSubtitle subtitle="Languages" />
          <h3 className="mb-4 mt-4">Language Proficiency</h3>
          <div className={`${classes.languages__list}`}>
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className={`${classes.language__item}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4>{lang.name}</h4>
                <span className={`${classes.language__level}`}>— {lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;

