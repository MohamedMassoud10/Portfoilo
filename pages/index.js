import React, { Fragment } from "react";
import Hero from "./component/UI/Hero";
import Services from "./component/UI/Services";
import "remixicon/fonts/remixicon.css";
import About from "./component/UI/About";
import Header from "../pages/component/Header/Header";
import Footer from "../pages/component/Footer/Footer";
import Portfolio from "./component/UI/Portfolio";
import Contact from "./component/UI/Contact";
import { Helmet } from "react-helmet";
const Home = () => {
  <Helmet>
    <meta
      name="description"
      content="Mohamed Massoud Aspiring Software engineer"
    />
    <meta name="keywords" content="Mohamed Massoud" />
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
