import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Anisha Thapa',
    role: 'Creative Director',
    image: '/team/anisha.jpg',
    linkedin: '#',
    email: 'anisha@example.com',
  },
  {
    name: 'Bishal Rai',
    role: 'Marketing Strategist',
    image: '/team/bishal.jpg',
    linkedin: '#',
    email: 'bishal@example.com',
  },
  {
    name: 'Ritika Sharma',
    role: 'UI/UX Designer',
    image: '/team/ritika.jpg',
    linkedin: '#',
    email: 'ritika@example.com',
  },
  {
    name: 'Sandeep Karki',
    role: 'SEO Specialist',
    image: '/team/sandeep.jpg',
    linkedin: '#',
    email: 'sandeep@example.com',
  },
  {
    name: 'Sandeep Karki',
    role: 'SEO Specialist',
    image: '/team/sandeep.jpg',
    linkedin: '#',
    email: 'sandeep@example.com',
  },
  {
    name: 'Sandeep Karki',
    role: 'SEO Specialist',
    image: '/team/sandeep.jpg',
    linkedin: '#',
    email: 'sandeep@example.com',
  },
  {
    name: 'Sandeep Karki',
    role: 'SEO Specialist',
    image: '/team/sandeep.jpg',
    linkedin: '#',
    email: 'sandeep@example.com',
  },
  {
    name: 'Sandeep Karki',
    role: 'SEO Specialist',
    image: '/team/sandeep.jpg',
    linkedin: '#',
    email: 'sandeep@example.com',
  },
  
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Meet Our Team
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
          We’re a team of creative thinkers, data-driven strategists, and marketing visionaries working together to elevate your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative bg-slate-800/30 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {/* Profile Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>

            {/* Info */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-indigo-300">{member.role}</p>

              {/* Socials */}
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600/70 p-2 rounded-full hover:bg-indigo-700 transition"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="bg-purple-600/70 p-2 rounded-full hover:bg-purple-700 transition"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
