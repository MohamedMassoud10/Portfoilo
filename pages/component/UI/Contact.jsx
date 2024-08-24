import React from "react";
import classes from "../../../styles/contact.module.css";
import SectionSubtitle from "./SectionSubtitle";
import Link from "next/link";
import Form from "./Form";
export default function Contact() {
  return (
    <div className="contact" id="contact">
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
                <a href="mailto:mohameddmassoud@gmail.com">
                  <p>mohameddmassoud@gmail.com</p>
                </a>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <a
                  href="https://wa.me/21117590703?text=السلام%20عليكم%20%20انا%20سعيد%20ان%20انا%20بتواصل%20معاك%20بخصوص%20:%0AHey%20i%20am%20happy%20to%20contact%20with%20you%20for%20:"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>+21117590703</p>
                </a>
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
                href="https://www.linkedin.com/in/mohamed-one/"
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
