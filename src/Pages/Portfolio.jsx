import { Link } from "react-router-dom";
import { projects } from "../data/projectsdata";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="relative bg-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our selected work across campaigns and brand experiences.
          </p>
        </div>
      </section>

      <div className="px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={index} to={`/portfolio/${project.slug}`}> {/* ✅ fixed path */}
              <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
