import React from "react";
import styles from "./Footer.module.css";
import { BsHeart } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${styles.footer}`} role="contentinfo">
      <div className={`${styles.container}`}>
        <div className={`${styles.textRight}`}>
          Copyright ©{currentYear} All rights reserved | This template is made with ❤️ by
          Mohamed Massoud
        </div>
      </div>
    </footer>
  );
}
