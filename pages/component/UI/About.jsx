import React from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import img01 from "../../../public/images/icons8-css3-480.png";
import img02 from "../../../public/images/photo_2022-12-10_17-54-09.jpg";
import img03 from "../../../public/images/icons8-javascript-480.png";
import img04 from "../../../public/images/icons8-react-native-512.png";
import classes from "../../../styles/about.module.css";

const About = () => {
  return (
    <div id="about">
      <div className={`${classes.container}`}>
        <div className={`${classes.about__content}`}>
          <div className={`${classes.left__about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3>I&apos;m here</h3>
            <h3>to help your next project</h3>
            <p>Mohamed</p>

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
                  My Portfolio
                </Link>
              </button>

              <button className={`${classes.second__btn}`}>
                <Link href="#">Download CV</Link>
              </button>
            </div>
          </div>
          <div className={`${classes.about__img__gallery}`}>
            <div>
              <div
                className={`${classes.about__img} ${classes.about__img__box}`}
              >
                <Image src={img01} alt="about-img" />
              </div>

              <div
                className={`${classes.about__img} ${classes.about__img__box}`}
              >
                <Image src={img02} alt="about-img" />
              </div>
            </div>

            <div>
              <div
                className={`${classes.about__img} ${classes.about__img__box}`}
              >
                <Image src={img03} alt="about-img" />
              </div>

              <div
                className={`${classes.about__img} ${classes.about__img__box}`}
              >
                <Image src={img04} alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
