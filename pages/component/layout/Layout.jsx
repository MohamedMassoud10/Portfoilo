import React from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
