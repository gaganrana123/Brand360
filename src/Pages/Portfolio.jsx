import { Link } from "react-router-dom";
import { projects } from "../data/projectsdata";

const Portfolio = () => {
  return (
    <div className="min-h-fit bg-gradient-to-b from-gray-50 to-gray-100 text-black">
      {/* Hero Content */}
       <section className="relative min-h-[70vh] bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] py-12 lg:py-0">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                {/* Blue accent line */}
                <div className="w-64 h-1 bg-primary"></div>

                {/* Main heading matching the design */}
                <div >
                  <h1 className="text-4xl md:text-4xl lg:text-4xl font-black leading-tight">
                    <div className="text-primary">Our Portfolio</div>
                    <div className="text-black">  Explore our selected work across campaigns and brand experiences.</div>
                     
                  </h1>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="portfolio.png"
                    alt="Advertising and event management team collaboration"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
      
      </section>

      {/* Project Cards */}
       <section className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">Our Work</h2>
          <div className=" w-36 h-1 bg-cyan-500 mx-auto mb-4"></div>
      </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
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
