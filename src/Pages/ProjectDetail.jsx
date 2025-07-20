import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsdata";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-red-600">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative bg-blue-700 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg mt-4">{project.description}</p>
        </div>
      </section>

      {/* Images Gallery */}
      <div className="px-4 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Project image ${idx + 1}`}
              className="w-full h-72 object-cover rounded shadow"
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/portfolio"
            className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
