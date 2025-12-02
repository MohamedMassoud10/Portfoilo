import React from "react";

import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import Link from "next/link";
import classes from "../../../styles/hero.module.css";
import PortfolioImage from "../../../public/images/potfolio.jpg";
import {
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNode,
  FaHtml5,
} from "react-icons/fa";
export default function Hero() {
  return (
    <section className={`${classes.hero}`} id="Home">
      <div className={`${classes.container}`}>
        <div className={`${classes.sectionContent}`}>
          <div className={`${classes.hero__content}`} data-aos="fade-right" data-aos-duration="800">
            <SectionSubtitle subtitle="Hello" />
            <h2 className={`${classes.typing}`}>I am Mohamed Massoud</h2>
            <h5>Software Engineer</h5>
            <p className={`${classes.text__justify}`}>
              Full-Stack Developer passionate about building scalable and user-friendly applications with React, Node.js, React Native, and AI-powered tools. Seeking to contribute to innovative teams and impactful projects.
            </p>
          
            <div>
              <button className={`${classes.main__btn}`}>
                {" "}
                <a href="#contact" aria-label="Navigate to contact section">Hire me</a>
              </button>
            </div>
          </div>
          <div className={`${classes.hero__image}`} data-aos="fade-left" data-aos-duration="800">
            <Image
              alt="Mohamed Massoud - Software Engineer"
              src={PortfolioImage}
              width="250"
              height="250"
              priority
            />
            <div className={`${classes.hero__skills}`}>
              <h6>Skills : </h6>
              <div className={`${classes.skills__icons}`}>
                <FaCss3Alt aria-label="CSS3" />
                <FaHtml5 aria-label="HTML5" />
                <FaJsSquare aria-label="JavaScript" />
                <FaReact aria-label="React" />
                <FaNode aria-label="Node.js" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
