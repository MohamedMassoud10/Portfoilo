import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRef, useEffect } from "react";
const NAVIGATION_LINKS = [
  {
    path: "/",
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
  return (
    <header className={`${styles.header}`} ref={headerRef}>
      <div className={`${styles.container}`}>
        <nav className={`${styles.nav}`}>
          <div className={`${styles.logo}`}>
            <h1>
              <span>M</span>assoud
            </h1>
          </div>
          <div className={`${styles.navigation}`}>
            <div className={`${styles.nav__menu}`}>
              {NAVIGATION_LINKS.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
              <div className={`${styles.right}`}>
                <p className={`${styles.phone}`}>
                  |<BsFillTelephoneFill />
                  +21117590703
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
