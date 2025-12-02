import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const [data, setData] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);
  
  React.useEffect(() => {
    if (!loaded) {
      setLoading(true);
      setError(null);
      fetch("/api/data/alldata")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch portfolio data");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoaded(true);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [loaded]);
  
  const displayedProjects = showAll ? data : data.slice(0, 6);
  const hasMoreProjects = data.length > 6;
  
  return (
    <div id="portfolio">
      <div className={`${classes.container}`}>
        <div className={`${classes.portfolio__content}`}>
          <SectionSubtitle subtitle=" My portfolio" />
          
          {loading && (
            <div className={classes.loading__container}>
              <div className={classes.loading__spinner}></div>
              <p>Loading portfolio...</p>
            </div>
          )}
          
          {error && (
            <div className={classes.error__container}>
              <p>Error loading portfolio: {error}</p>
              <button 
                onClick={() => {
                  setLoaded(false);
                  setError(null);
                }}
                className={classes.retry__btn}
              >
                Retry
              </button>
            </div>
          )}
          
          {!loading && !error && (
            <>
              <div className={`${classes.portfolio__works}`}>
                {displayedProjects.map((item) => (
                  <div key={item.id} data-aos="fade-up" data-aos-duration="600">
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
              {hasMoreProjects && (
                <div className={classes.showMoreContainer}>
                  <button
                    className={classes.showMoreBtn}
                    onClick={() => setShowAll(!showAll)}
                    aria-label={showAll ? "Show fewer projects" : "Show more projects"}
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
