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
      image: "https://i.imgur.com/DS2nXMW.png",
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

  // return (
  //   <section id="projects" className="project-container">
  //     <div className="container text-center lg:px-40 w-full h-full min-h-screen">
  //       <div className="flex flex-col w-full mb-20">
  //         <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
  //           Apps I've Built
  //         </h1>
  //         <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
  //           These are some of the apps I've built. Check them out and more to
  //           come!
  //         </p>
  //       </div>
  //       <div className="flex flex-wrap -m-4">
  //         {projects.map((project) => (
  //           <a
  //             href={project.link}
  //             key={project.image}
  //             className="w-full sm:w-1/2 p-4"
  //           >
  //             <div className="flex relative project-card">
  //               <img
  //                 alt="gallery"
  //                 className="absolute inset-0 w-full h-full object-cover object-center"
  //                 src={project.image}
  //               />
  //               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
  //                 <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
  //                   {project.subtitle}
  //                 </h2>
  //                 <h1 className="title-font text-lg font-medium text-white mb-3">
  //                   {project.title}
  //                 </h1>
  //                 <p className="leading-relaxed">{project.description}</p>
  //               </div>
  //             </div>
  //           </a>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section id="projects" className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack applications built with scalable architecture, clean UI,
            and production-ready deployment practices.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 border border-gray-800
            rounded-2xl overflow-hidden hover:border-indigo-500
            transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover
                group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-indigo-400 mb-2">
                  {project.subtitle}
                </p>

                <h2 className="text-xl font-semibold mb-3">{project.title}</h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 text-sm text-gray-500 group-hover:text-indigo-400 transition">
                  View on GitHub →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
