import React from "react";

import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import Link from "next/link";
import classes from "../../../styles/hero.module.css";
import PortfolioImage from "../../../public/images/photo_2022-12-10_17-54-09.jpg";
import {
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNode,
  FaHtml5,
} from "react-icons/fa";
export default function Hero() {
  return (
    <section className={`${classes.hero}`}>
      <div className={`${classes.container}`}>
        <div className={`${classes.sectionContent}`}>
          <div className={`${classes.hero__content}`}>
            <SectionSubtitle subtitle="Hello" />
            <h2 className={`${classes.typing}`}>I am Mohamed Massoud</h2>
            <h5>Frontend Developer</h5>
            <p>
              I&apos;am a Self-motivated Front-end Web Developer with a strong
              ambition to learn and discover the newest cutting-edge
              methodologies to build high-performance websites. Capable of
              self-managing in addition to collaborating with others in group
              projects. Skilled in using HTML5, CSS3, JavaScript, React, React
              Hooks, Redux, Redux toolkit and Next.Js . Excellent communication
              skills with clients to establish the best service quality to
              accomplish customer satisfaction .
            </p>
            <div>
              <button className={`${classes.main__btn}`}>
                {" "}
                <Link href="#">Hire me</Link>
              </button>
              <button className={`${classes.second__btn}`}>
                <Link
                  href="https://drive.google.com/file/d/1iFzI_MDyb4KZtPnVXAyQkFRoqZ-emn3h/view?usp=sharing"
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
              width="230"
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
