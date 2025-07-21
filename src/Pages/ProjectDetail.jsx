import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsdata";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-red-600 font-semibold">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">
      {/* Image Gallery Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Project image ${idx + 1}`}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Project Title & Description */}
        <div className="mt-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg leading-relaxed whitespace-pre-line">{project.description}</p>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-block px-6 py-3 rounded-xl text-white relative group bg-primary hover:bg-primary/70 transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
