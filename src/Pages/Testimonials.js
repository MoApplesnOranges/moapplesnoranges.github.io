import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Great",
      name: "John",
      company: "JM",
    },
    {
      quote: "Halleuljah",
      name: "Heather",
      company: "HM",
    },
    {
      quote: "Excellent",
      name: "Ethan",
      company: "E-Bird",
    },
    {
      quote: "Fantastic",
      name: "Faith",
      company: "Fan-Base",
    },
  ];

  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 text-white bg-opacity-40 p-8 rounded">
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-white text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
