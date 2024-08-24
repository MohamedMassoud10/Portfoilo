import React, { Fragment } from "react";
import Hero from "./component/UI/Hero";
import Services from "./component/UI/Services";
import "remixicon/fonts/remixicon.css";
import About from "./component/UI/About";
import Header from "../pages/component/Header/Header";
import Footer from "../pages/component/Footer/Footer";
import Portfolio from "./component/UI/Portfolio";
import Contact from "./component/UI/Contact";
import PortfolioImage from "../public/images/potfolio.jpg";
import { Helmet } from "react-helmet";
const Home = () => {
  <Helmet>
    <meta
      name="description"
      content="Mohamed Massoud Aspiring Software engineer"
    />
    <meta name="keywords" content="Mohamed Massoud" />{" "}
    <meta property="og:title" content={title} />
    <meta
      property="og:description"
      content={"Mohamed Massoud Aspiring Software engineer"}
    />
    <meta property="og:image" content={PortfolioImage} />
    <meta property="og:url" content={"https://massoud-one.vercel.app"} />
    <meta
      property="og:type"
      content=" I am a self-motivated Full Stack Web Developer with a strong drive
              to learn and explore the latest technologies to create
              high-performance applications. I excel in both independent work
              and team collaborations. Skilled in front-end technologies like
              HTML5, CSS3, SASS, JavaScript, React, React Hooks, Redux, and
              Next.js, as well as back-end development with Node.js, Express.js,
              and MongoDB. I am proficient in building and managing RESTful APIs
              and working with the full MERN stack. With excellent communication
              skills, I ensure top-quality service to meet and exceed customer
              expectations."
    />
  </Helmet>;
  return (
    <Fragment>
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
