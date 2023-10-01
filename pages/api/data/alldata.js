export default function handler(req, res) {
  res.status(200).json([
    {
      id: "01",
      title: "Portfolio",
      img: "/images/portfolio.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS", "Next.js"],
      liveUrl: "https://massoud-one.vercel.app/",
      github: "https://github.com/MohamedMassoud10/Portfoilo",
    },
    {
      id: "02",
      title: "E-Commerce Website",
      img: "/images/E-commerce.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS", "React.JS"],
      liveUrl: "https://sneakerssite.onrender.com/",
      github:
        "https://github.com/MohamedMassoud10/E-commerce-with-react-and-redux-toolkit",
    },
    {
      id: "03",
      title: "Landing page",
      img: "/images/landingPage.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS", "React.JS"],
      liveUrl: "https://kasper-16um.onrender.com/",
      github: "https://github.com/MohamedMassoud10/kasper",
    },
    {
      id: "04",
      title: "Quiz Application",
      img: "/images/QuizaApp.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS"],
      liveUrl: "https://quiz-app-using-react.onrender.com/",
      github: "https://github.com/MohamedMassoud10/Quiz-App-using-react.js",
    },
    {
      id: "05",
      title: "Admin Dashboard",
      img: "/images/ADB.jpg",
      category: "MyProjects",
      keyword: ["React.js", "Redux toolkit", "JS"],
      liveUrl: "https://supervision-myz1.onrender.com/",
      github:
        "https://github.com/MohamedMassoud10/Admin-dashboard-website-React.jsg",
    },

    {
      id: "06",
      title: "Note Application",
      img: "/images/noteAP.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS"],
      liveUrl: "https://react-note-app-z720.onrender.com/",
      github: "https://github.com/MohamedMassoud10/React-Note-App",
    },
    {
      id: "07",
      title: "to do list Application",
      img: "/images/toDoList.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS"],
      liveUrl: "https://mohamedmassoud10.github.io/to-do-list",
      github: "https://github.com/MohamedMassoud10/to-do-list",
    },

    {
      id: "08",
      title: "Tic Tac Toe Game",
      img: "/images/tictactoe.png",
      category: "MyProjects",
      keyword: ["HTML", "CSS", "JS"],
      liveUrl: "https://mohamedmassoud10.github.io/tic-tac-toe-game/",
      github: "https://github.com/MohamedMassoud10/tic-tac-toe-game",
    },
  ]);
}
