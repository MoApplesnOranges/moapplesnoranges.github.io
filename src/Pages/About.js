import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col text-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col mb-16 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center">
            Hi, I'm Will.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <div className="flex justify-center">
            <NavLink
              to="/contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Hire Me
            </NavLink>
            <NavLink
              to="/projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
