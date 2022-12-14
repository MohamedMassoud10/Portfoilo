import React from "react";
import classes from "../../../styles/portfolio-item.module.css";
import Link from "next/link";
import Image from "next/image";
export default function PortfolioItem(props) {
  const { title = "", img = "", liveUrl = "", keyword = [] } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className={`${classes.item}`}>
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="207" />
      </div>

      <div className={`${classes.portfolio__live} `}>
        <button className={`${classes.main__btn}`}>
          <Link href={liveUrl}>Launch</Link>
        </button>
        <div className={`${classes.portfolio__live} `}>
          <Link href="/" target="_blank">
            <i class="ri-github-fill"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
