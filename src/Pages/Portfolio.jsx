import React from 'react';
import { Eye } from 'lucide-react';

const projects = [
  {
    title: 'Brand Identity – Ripple Tea',
    description: 'A full identity redesign from packaging to promotion for a local tea brand.',
    image: '/portfolio/ripple-tea.jpg',
    link: '#',
    tags: ['Branding', 'Packaging', 'Design'],
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'TVC Campaign – Spark Energy Drink',
    description: 'Scripted and produced a TV commercial aired nationwide.',
    image: '/portfolio/spark-energy.jpg',
    link: '#',
    tags: ['TVC', 'Scriptwriting', 'Media'],
    gradient: 'from-red-500 to-pink-600',
  },
  {
    title: 'Digital Launch – Urban Gym',
    description: 'Led a digital-first launch with influencer strategy and ad funneling.',
    image: '/portfolio/urban-gym.jpg',
    link: '#',
    tags: ['Digital', 'Launch', 'Fitness'],
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Event Activation – Book Fest',
    description: 'Concept and execution of an immersive book festival event with branded zones.',
    image: '/portfolio/book-fest.jpg',
    link: '#',
    tags: ['Event', 'Activation', 'Experience'],
    gradient: 'from-orange-500 to-yellow-500',
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Our Portfolio
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
          Explore our selected work across campaigns, branding, digital media, and experiences that moved the needle for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800/30 backdrop-blur-sm hover:scale-105 hover:border-white/20 transition-all duration-300"
          >
            {/* Background Image */}
            <div className="h-64 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white transition"
              >
                <Eye className="w-4 h-4" />
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
