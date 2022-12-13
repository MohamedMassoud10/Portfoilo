import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
const Header = () => {
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
      path: "/component/UI/Portfolio",
      display: "Portfolio",
    },
    {
      path: "#contact",
      display: "Contact",
    },
  ];
  return (
    <header className={`${styles.header}`}>
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
