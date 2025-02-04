import React from "react";
import About from "./About";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <div>
        <About className="about-home" />
        <Skills />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
