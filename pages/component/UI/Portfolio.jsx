import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";
export default function Portfolio() {
  const [data, setData] = React.useState();
  console.log(data);
  React.useEffect(() => {
    return () => {
      setData(portfolio);
    };
  });
  return (
    <div id="portfolio">
      <div className={`${classes.container}`}>
        <div className={`${classes.portfolio__content}`}>
          <SectionSubtitle subtitle=" My portfolio" />
          <h4 className="mt-4">Some of my distinguished works</h4>
          <div className={`${classes.portfolio__works}`}>
            {data?.map((item) => (
              <div key={item.id}>
                <PortfolioItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
