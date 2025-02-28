import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <div>
        <About className="about-home" />
        <img src="https://i.imgur.com/Do0bvx4.jpeg" className="profilepic" />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
