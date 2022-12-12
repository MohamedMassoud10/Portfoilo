import React, { Fragment } from "react";
import Hero from "./component/UI/Hero";
import Services from "./component/UI/Services";
import "remixicon/fonts/remixicon.css";
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
    </Fragment>
  );
};

export default Home;
