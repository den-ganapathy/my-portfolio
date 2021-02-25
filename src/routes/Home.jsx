import React, { useState } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const PortfolioDen = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const toggleNavbar = () => {
    setIsNavbar(!isNavbar);
  };

  return (
    <>
      <Header toggleNavbar={toggleNavbar} />
      <div id="1"></div>
      <About />
      <div id="2"></div>
      <Education />
      <div id="3"></div>
      <Project />
      <div id="4"></div>
      <Contact />
      {isNavbar ? <Navbar toggleNavbar={toggleNavbar} /> : ""}
    </>
  );
};

export default PortfolioDen;
