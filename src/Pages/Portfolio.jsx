import React from "react";
import { Eye, LayoutGrid, Palette } from "lucide-react";

const projects = [
  {
    title: "Brand Identity – Ripple Tea",
    description:
      "A full identity redesign from packaging to promotion for a local tea brand.",
    image: "/portfolio/ripple-tea.jpg",
    link: "#",
    tags: ["Branding", "Packaging", "Design"],
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "TVC Campaign – Spark Energy Drink",
    description: "Scripted and produced a TV commercial aired nationwide.",
    image: "/portfolio/spark-energy.jpg",
    link: "#",
    tags: ["TVC", "Scriptwriting", "Media"],
    gradient: "from-red-500 to-pink-600",
  },
  {
    title: "Digital Launch – Urban Gym",
    description:
      "Led a digital-first launch with influencer strategy and ad funneling.",
    image: "/portfolio/urban-gym.jpg",
    link: "#",
    tags: ["Digital", "Launch", "Fitness"],
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "Event Activation – Book Fest",
    description:
      "Concept and execution of an immersive book festival event with branded zones.",
    image: "/portfolio/book-fest.jpg",
    link: "#",
    tags: ["Event", "Activation", "Experience"],
    gradient: "from-orange-500 to-yellow-500",
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Explore our selected work across campaigns, branding, digital
              media, and experiences that moved the needle for our clients.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-20 py-16">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Work</h2>
            
          </div>
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Image Container - Fixed Size */}
                  <div className="relative h-48 w-full flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-xs text-gray-600 group-hover:bg-indigo-50 group-hover:border-indigo-100 group-hover:text-indigo-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors group-hover:text-indigo-600"
                    >
                      <Eye className="w-4 h-4" />
                      View Project
                    </a>

                    {/* Hover Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Animated Dots */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping delay-75"></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping delay-150"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Animation Keyframes */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Portfolio;
