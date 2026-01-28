import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div>
        <About className="about-home" />
        <img src="https://i.imgur.com/ifkQBVd.jpeg" className="profilepic" />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
