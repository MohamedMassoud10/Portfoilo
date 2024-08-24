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
          <div className={`${classes.hero__content}`}>
            <SectionSubtitle subtitle="Hello" />
            <h2 className={`${classes.typing}`}>I am Mohamed Massoud</h2>
            <h5>Aspiring Software engineer</h5>
            <p className={`${classes.text__justify}`}>
              I am a self-motivated Full Stack Web Developer with a strong drive
              to learn and explore the latest technologies to create
              high-performance applications. I excel in both independent work
              and team collaborations. Skilled in front-end technologies like
              HTML5, CSS3, SASS, JavaScript, React, React Hooks, Redux, and
              Next.js, as well as back-end development with Node.js, Express.js,
              and MongoDB. I am proficient in building and managing RESTful APIs
              and working with the full MERN stack. With excellent communication
              skills, I ensure top-quality service to meet and exceed customer
              expectations.
            </p>
            <div>
              <button className={`${classes.main__btn}`}>
                {" "}
                <Link href="#">Hire me</Link>
              </button>
              <button className={`${classes.second__btn}`}>
                <Link
                  href="https://drive.google.com/file/d/1n3_z1hfPbyBRTn_b-ZqdTCm93BHi1TPT/view?usp=sharing"
                  target="_blank"
                >
                  View CV
                </Link>
              </button>
            </div>
          </div>
          <div className={`${classes.hero__image}`}>
            <Image
              alt="Portfolio-Image"
              src={PortfolioImage}
              width="250"
              height="250"
            />
            <div className={`${classes.hero__skills}`}>
              <h6>Skills : </h6>
              <div className={`${classes.skills__icons}`}>
                <FaCss3Alt />
                <FaHtml5 />
                <FaJsSquare />
                <FaReact />
                <FaNode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
