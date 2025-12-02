import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRef, useEffect } from "react";

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
    path: "#services",
    display: "Services",
  },
  {
    path: "#experience",
    display: "Experience",
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
                <a href={item.path} key={index} aria-label={`Navigate to ${item.display} section`}>
                  {item.display}
                </a>
              ))}
              <div className={`${styles.right}`}>
                <p className={`${styles.phone}`}>
                  |<BsFillTelephoneFill aria-hidden="true" />
                  <a href="tel:+201117590703" aria-label="Call Mohamed Massoud">+201117590703</a>
                </p>
              </div>
            </div>
          </div>
          <span className={`${styles.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu} aria-label="Toggle navigation menu"></i>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
