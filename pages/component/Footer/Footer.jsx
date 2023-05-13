import React from "react";
import styles from "./Footer.module.css";
import { BsHeart } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.textRight}`}>
          Copyright ©2022 All rights reserved | This template is made with{" "}
          <BsHeart /> by Mohamed Massoud
        </div>
      </div>
    </footer>
  );
}
