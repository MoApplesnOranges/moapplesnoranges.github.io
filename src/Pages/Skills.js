import React from "react";

export default function Skills() {
  const skills = [
    {
      title: "React",
    },
    {
      title: "Django",
    },
    {
      title: "Javascript",
    },
    {
      title: "Python",
    },
    {
      title: "FastAPI",
    },
    {
      title: "Microservices",
    },
    {
      title: "AWS",
    },
    {
      title: "POSTGRESQL",
    },
  ];

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
