import React from "react";
import Banner from "./othercomponent/Banner";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Ourgallery from "./Ourgallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service /> 
      <Contact />
      <Ourgallery/>
    </div>
  );
};

export default Home;
