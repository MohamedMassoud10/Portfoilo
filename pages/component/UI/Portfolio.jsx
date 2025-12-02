import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
export default function Portfolio() {
  const [data, setData] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
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
  console.log(data);
  return (
    <div id="portfolio">
      <div className={`${classes.container}`}>
        <div className={`${classes.portfolio__content}`}>
          <SectionSubtitle subtitle=" My portfolio" />
          <h4 className="mt-4">Some of my distinguished works</h4>
          <div className={`${classes.portfolio__works}`}>
            {data.map((item) => (
              <div key={item.id}>
                <PortfolioItem
                  title={item.title}
                  img={item.img}
                  keyword={item.keyword}
                  liveUrl={item.liveUrl}
                  github={item.github}
                  description={item.description}
                  galleryImages={item.galleryImages}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
