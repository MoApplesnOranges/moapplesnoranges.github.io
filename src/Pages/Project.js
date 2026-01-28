import React from "react";
import "../../index.css";

export default function Projects() {
  const projects = [
    {
      title: "Reel Reviews",
      subtitle: "React and FastAPI",
      description:
        "Movie reviews and ratings similar to IMDB. Users can create accounts, rate movies, leave reviews and search bar included!",
      image: "https://i.imgur.com/P7nxiB1.png",
      link: "https://github.com/MoApplesnOranges/reel-reviews",
    },
    {
      title: "Ping's Art",
      subtitle: "React and Vite",
      description:
        "A gallery of my art. Users can view my art, navigate between different categories, and leave a comment.",
      image: "https://i.imgur.com/wdqOSCp.png",
      link: "https://github.com/MoApplesnOranges/pingsart",
    },
    {
      title: "Car-ify",
      subtitle: "Django & React & Docker",
      description:
        "An e-commerce management app that allows users to handle inventory, customer sales, and appointments.",
      image: "https://i.imgur.com/X6TjfYm.jpeg",
      link: "https://github.com/MoApplesnOranges/car-ify",
    },
    {
      title: "Conference GO",
      subtitle: "Django, microservices, RESTful API",
      description:
        "A conference management app that allows users to create conferences, add locations, gather weather data, and more.",
      image: "https://i.imgur.com/A626ESg.png",
      link: "https://github.com/MoApplesnOranges/Conference_Show",
    },
  ];

  return (
    <section id="projects" className="project-container">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are some of the apps I've built. Check them out and more to
            come!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-full sm:w-1/2 p-4"
            >
              <div className="flex relative project-card">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
