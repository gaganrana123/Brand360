import { Link } from "react-router-dom";
import { projects } from "../data/projectsdata";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Header */}
      <section className="bg-primary text-white py-6 md:py-6 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl opacity-90">
            Explore our selected work across campaigns and brand experiences.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={index} to={`/portfolio/${project.slug}`}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-[300px] hover:scale-[1.03] transform">
                {/* Image Section */}
                <div className="h-[180px] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                {/* Text Section */}
                <div className="flex-1 flex items-center justify-center p-4">
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
