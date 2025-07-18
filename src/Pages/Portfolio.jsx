import React from "react";

const projects = [
  { src: "/p1.jpg" }, { src: "/p2.jpg" }, { src: "/p3.jpg" }, { src: "/p4.jpg" },
  { src: "/p5.png" }, { src: "/p6.png" }, { src: "/p7.png" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">

           {/* Hero Section */}
        <section className="relative bg-primary text-white py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Explore our selected work across campaigns, branding, digital
              media, and experiences that moved the needle for our clients.
            </p>
          </div>
        </section>

      <div className="px-4 sm:px-3 lg:px-8 py-12 sm:py-16">
                  <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Featured Work
            </h2>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={project.src}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


