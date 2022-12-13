import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
export default function Portfolio() {
  const portfolio = [
    {
      id: "06",
      title: "Portfolio",
      img: "/images/portfolio.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS", "Next.js"],
      liveUrl: "https://massoud-one.vercel.app/",
      gitHibURL: "https://github.com/MohamedMassoud10/Portfoilo",
    },
    {
      id: "01",
      title: "E-Commerce Website",
      img: "/images/E-commerce.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS", "React.JS"],
      liveUrl: "https://sneakerssite.onrender.com/",
      gitHibURL:
        "https://github.com/MohamedMassoud10/E-commerce-with-react-and-redux-toolkit",
    },

    {
      id: "02",
      title: "Landing page",
      img: "/images/landingPage.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS", "React.JS"],
      liveUrl: "https://kasper-16um.onrender.com/",
      gitHibURL: "https://github.com/MohamedMassoud10/kasper",
    },

    {
      id: "04",
      title: "Quiz Application",
      img: "/images/QuizaApp.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS"],
      liveUrl: "https://quiz-app-using-react.onrender.com/",
      gitHibURL: "https://github.com/MohamedMassoud10/Quiz-App-using-react.js",
    },

    {
      id: "03",
      title: "Note Application",
      img: "/images/NoteAPP.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS"],
      liveUrl: "https://react-note-app-z720.onrender.com/",
      gitHibURL: "https://github.com/MohamedMassoud10/React-Note-App",
    },
    {
      id: "05",
      title: "to do list Application",
      img: "/images/ToDOListAPP.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS"],
      liveUrl: "https://mohamedmassoud10.github.io/to-do-list",
      gitHibURL: "https://github.com/MohamedMassoud10/to-do-list",
    },

    {
      id: "06",
      title: "Tic Tac Toe Game",
      img: "/images/tictactoe.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS"],
      liveUrl: "https://mohamedmassoud10.github.io/tic-tac-toe-game/",
      gitHibURL: "https://github.com/MohamedMassoud10/tic-tac-toe-game",
    },
  ];
  return (
    <div id="portfolio">
      <div className={`${classes.container}`}>
        <div className={`${classes.portfolio__content}`}>
          <SectionSubtitle subtitle=" My portfolio" />
          <h4 className="mt-4">Some of my distinguished works</h4>
          <div className={`${classes.portfolio__works}`}>
            {portfolio.map((item) => (
              <div>
                <PortfolioItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
