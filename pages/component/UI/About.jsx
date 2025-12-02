import React from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import img01 from "../../../public/images/icons8-css3-480.png";
import img02 from "../../../public/images/node-js.png";
import img03 from "../../../public/images/icons8-javascript-480.png";
import img04 from "../../../public/images/icons8-react-native-512.png";
import classes from "../../../styles/about.module.css";

const About = () => {
  return (
    <div id="about">
      <div className={`${classes.container}`}>
        <div className={`${classes.about__content}`}>
          <div className={`${classes.left__about__content}`} data-aos="fade-right" data-aos-duration="800">
            <SectionSubtitle subtitle="About me" />
            <h3>I&apos;m here</h3>
            <h3>to help your next project</h3>
            <p className={`${classes.text__justify}`}>
              Full-Stack & Mobile Developer with hands-on experience building production-level applications using React, React Native, Node.js, and SQL/NoSQL databases. Skilled in designing scalable architectures, implementing clean UI/UX, and integrating backend APIs. Seeking opportunities to contribute to high-impact projects and innovative teams.
            </p>

            <div>
              <div>
                <h6>
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6>
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6>
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6>
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div>
              <button className={`${classes.main__btn}`}>
                <Link
                  href="https://github.com/MohamedMassoud10"
                  target="_blank"
                >
                  My Github
                </Link>
              </button>

              <button className={`${classes.second__btn}`}>
                <Link
                  href="https://drive.google.com/file/d/1bvRO8jx0rSRj6tHMLvYkC-lKcfXCIHzX/view?usp=sharing"
                  target="_blank"
                >
                  view CV
                </Link>
              </button>
            </div>
          </div>
          <div className={`${classes.about__img__gallery}`} data-aos="fade-left" data-aos-duration="800">
            <div>
              <div
                className={`${classes.about__img} ${classes.about__img__box}`}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Image src={img01} alt="CSS3 technology icon" />
              </div>

              <div
                className={`${classes.about__img} ${classes.about__img__box}`}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Image src={img02} alt="Node.js technology icon" />
              </div>
            </div>

            <div>
              <div
                className={`${classes.about__img} ${classes.about__img__box}`}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Image src={img03} alt="JavaScript technology icon" />
              </div>

              <div
                className={`${classes.about__img} ${classes.about__img__box}`}
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <Image src={img04} alt="React Native technology icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
