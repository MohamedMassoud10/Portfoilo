import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import PortfolioImage from "../../../public/images/potfolio.jpg";
const NAVIGATION_LINKS = [
  {
    path: "#",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];
const Header = () => {
  <Helmet>
    <meta
      name="description"
      content="Mohamed Massoud Aspiring Software engineer"
    />
    <meta name="keywords" content="Mohamed Massoud" />{" "}
    <meta
      property="og:description"
      content={"Mohamed Massoud Aspiring Software engineer"}
    />
    <meta property="og:image" content={PortfolioImage} />
    <meta property="og:url" content={"https://massoud-one.vercel.app"} />
    <meta
      property="og:type"
      content=" I am a self-motivated Full Stack Web Developer with a strong drive
            to learn and explore the latest technologies to create
            high-performance applications. I excel in both independent work
            and team collaborations. Skilled in front-end technologies like
            HTML5, CSS3, SASS, JavaScript, React, React Hooks, Redux, and
            Next.js, as well as back-end development with Node.js, Express.js,
            and MongoDB. I am proficient in building and managing RESTful APIs
            and working with the full MERN stack. With excellent communication
            skills, I ensure top-quality service to meet and exceed customer
            expectations."
    />
  </Helmet>;
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${styles.header__sticky}`);
    } else {
      headerRef.current.classList.remove(`${styles.header__sticky}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${styles.menu__active}`);

  // Function to change colors
  // const changcolor = () => {
  //   const elements = document.querySelectorAll("*");
  //   if (elements) {
  //     elements.forEach((element) => {
  //       element.style.backgroundColor = "red";
  //     });
  //   }
  // };
  return (
    <header className={`${styles.header}`} ref={headerRef}>
      <div className={`${styles.container}`}>
        <nav className={`${styles.nav}`}>
          <div className={`${styles.logo}`}>
            <h1>
              <span>M</span>assoud
            </h1>
          </div>
          <div
            className={`${styles.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${styles.nav__menu}`}>
              {NAVIGATION_LINKS.map((item, index) => (
                <a href={item.path} key={index}>
                  {item.display}
                </a>
              ))}
              <div className={`${styles.right}`}>
                <p className={`${styles.phone}`}>
                  |<BsFillTelephoneFill />
                  <a href="tel:+21117590703">+21117590703</a>
                </p>
              </div>
            </div>
          </div>
          <span className={`${styles.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
