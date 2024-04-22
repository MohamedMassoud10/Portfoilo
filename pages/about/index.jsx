import React from "react";
import About from "../component/UI/About";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Portfolio from "../component/UI/Portfolio";

export default function index() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}
