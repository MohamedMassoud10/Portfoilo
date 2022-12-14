import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import handler from "../../api/data/alldata";
export default function Portfolio() {
  const [data, setData] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  console.log(data);
  React.useEffect(() => {
    if (!loaded) {
      fetch("../../api/data/alldata")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoaded(true);
        });
    }
  }, [loaded]);
  return (
    <div id="portfolio">
      <div className={`${classes.container}`}>
        <div className={`${classes.portfolio__content}`}>
          <SectionSubtitle subtitle=" My portfolio" />
          <h4 className="mt-4">Some of my distinguished works</h4>
          <div className={`${classes.portfolio__works}`}>
            {data.map((item) => (
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
