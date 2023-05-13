import React from "react";
import classes from "../../../styles/contact.module.css";
import SectionSubtitle from "./SectionSubtitle";
import Link from "next/link";
import Form from "./Form";
export default function Contact() {
  return (
    <div className="contact">
      <div className={`${classes.container}`}>
        <div className={`${classes.contact__content}`}>
          <div className={`${classes.contact__right}`}>
            {" "}
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              I will be very happy to contact you I am always ready to answer
              messages
            </p>
            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>zagazig sharqia</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>mohameddmassoud@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+21117590703</p>
              </li>
            </ul>
            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/MohamedMassoud10" target="_blank">
                <i className="ri-github-line github"></i>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100009364761197&mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="ri-facebook-line"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohamed-massoud-%E2%9C%AA-3417b6230/"
                target="_blank"
              >
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link
                href="https://twitter.com/its_massoud_11?t=QeRg4eruzfLwlScUePbmQg&s=09"
                target="_blank"
              >
                <i className="ri-twitter-line"></i>
              </Link>
            </div>
          </div>
          <div className={`${classes.contact__left}`}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
