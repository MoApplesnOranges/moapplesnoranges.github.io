// import React, { useState } from "react";
// import About from "./About";
// import Skills from "./Skills";

// const Home = () => {
//   return (
//     <div className="flex flex-col flex-shrink-0 shrink-0 object-contain items-center justify-start min-h-screen bg-gray-900">
//       <div>
//         <About className="about-home" />
//         <img
//           src="https://i.imgur.com/ifkQBVd.jpeg"
//           className="w-[300px] h-[400px] mx-auto block object-contain"
//         />
//         f
//         <Skills className="w-full" />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import About from "./About";
import Skills from "./Skills";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <img
          src="https://i.imgur.com/D2cx9H6.jpeg"
          className="w-[30wh] h-[40vh]"
        />
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
          Hi, I'm <span className="text-indigo-500">Will Mo</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8">
          Full-Stack Software Engineer building scalable web applications with
          React, Django, FastAPI, and AWS.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <NavLink
            to="/projects"
            className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition"
          >
            View Projects
          </NavLink>
          <a
            href="https://github.com/moapplesnoranges"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-6 py-3 rounded-xl
  hover:bg-gray-800 transition flex items-center gap-3
  hover:scale-105 duration-200"
          >
            <FaGithub className="text-gray-300" size={22} />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "React",
            "Django",
            "JavaScript",
            "Python",
            "FastAPI",
            "Microservices",
            "AWS",
            "PostgreSQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:border-indigo-500 hover:scale-105 transition-all duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I specialize in building production-ready applications using modern
            backend architectures and scalable cloud deployments. My focus is
            writing clean, maintainable systems that solve real business
            problems.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Let's Build Something Great
        </h2>

        <NavLink
          to="/contact"
          className="bg-indigo-600 px-8 py-4 rounded-xl text-lg hover:bg-indigo-500 transition"
        >
          Get In Touch
        </NavLink>
      </section>
    </div>
  );
};

export default Home;
