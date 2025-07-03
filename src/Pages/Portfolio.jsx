import React from "react";
import { Eye, LayoutGrid, Palette } from "lucide-react";

const projects = [
  {
    title: "Kirti Samaroha 2081– Shivam Cement",
    description:
      "From the first brainstorm to the final spotlight — Kirti Samaroha 2081 was an event crafted with purpose and precision. Conceptualized and managed by Brand Three Sixty Pvt. Ltd. for Shivam Cement.",
    image: "/Shivam.png",
    link: "#",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Automobile Campaign – DEEPAL",
    description: "Deepal lit up Chitwan with the power of innovation! The DEEPAL Launch Event was more than a celebration—it was the beginning of an electric revolution. Managed by Brand Three Sixty Pvt. Ltd",
    image: "/Deepal.png",
    link: "#",
    gradient: "from-red-500 to-pink-600",
  },
  {
    title: "Automobile Campaign – Dongfeng Nammi",
    description:
      "The Grand Opening of the state-of-the-art Dongfeng Nammi Showroom in Nagpokhari, brought to you by MAW Vriddhi Motors Pvt. Ltd. This milestone reflects Nammi's promise of delivering unmatched service and a superior customer experience.",
    image: "/Nami.png",
    link: "#",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "Beauty Pageant –  Miss Universe Nepal 2024",
    description:
      "Global Glamour Venture On 11 January 2024, Global Glamour Venture organized a press conference announcing the change of organizers of Miss Universe Nepal. The press conference event managed by Brand Three Sixty.",
    image: "/MUN.png",
    link: "#",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Social Event – नागरिक नायक 2082",
    description:
      "Honoring Heroes, Inspiring Change — नागरिक नायक 2082. Emarkable evening celebrating individuals whose actions have truly made a difference in our society.",
    image: "/Media.png",
    link: "#",
    gradient: "from-orange-500 to-yellow-500",
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 md:py-20">
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

        {/* Projects Grid */}
        <div className="px-4 sm:px-3 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Featured Work
            </h2>
          </div>
          
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-52 w-full flex-shrink-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      {project.description}
                    </p>

                   

                  </div>

                  {/* Animated Dots */}
                  <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></div>
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping delay-150"></div>
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