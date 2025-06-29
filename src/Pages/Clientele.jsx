import React, { useState, useEffect } from 'react';
import { Star, Award, Users, TrendingUp, Eye, Heart, Zap, Building2 } from 'lucide-react';

const Clientele = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
    { 
      src: '/krishna1.png', 
      desc: 'Trusted partnership delivering excellence in branding and execution.',
    },
    { 
      src: '/krishna2.png', 
      desc: 'A valued collaborator in ATL and OOH campaigns.',
    },
    { 
      src: '/krishna3.png', 
      desc: 'Industry leader we supported through integrated marketing solutions.',
    },
    { 
      src: '/krishna (3).png', 
      desc: 'Bold ideas executed through digital and TVC media strategies.',
    },
    { 
      src: '/krishna (6).png', 
      desc: 'Brought nationwide exposure through strategic media buying.',
    },
    { 
      src: '/krishna (17).png', 
      desc: 'Successful event activations and in-shop branding experience.',
    },
    { 
      src: '/krishna (20).png', 
      desc: 'Elevated with impactful outdoor and transit campaigns.',
    },
    { 
      src: '/krishna (21).png', 
      desc: 'Seamless campaign integrations across print and TV.',
    },
    { 
      src: '/krishna (23).png', 
      desc: 'Voice of brand amplified via radio and cinema ads.',
    },
    { 
      src: '/krishna (25).png', 
      desc: 'Known for collaborative digital and retail experiences.',
    },
    { 
      src: '/krishna (26).png', 
      desc: 'Trusted us for full 360° creative marketing campaigns.',
    },
    { 
      src: '/krishna (29).png', 
      desc: 'Celebrated product launches with immersive experiences.',
    },
    { 
      src: '/krishna (30).png', 
      desc: 'Strengthened presence through bold OOH branding.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div 
          className="max-w-7xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
         
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Our Clientele
          </h1>
          
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-5xl mx-auto mb-12 leading-relaxed">
            We've had the privilege of working with some of the most impactful and inspiring brands across industries. 
            Our partnerships span diverse verticals and showcase our commitment to delivering results that speak for themselves.
          </p>
        </div>
      </div>

      {/* Clients Grid */}
     <div className="relative px-4 sm:px-6 lg:px-8 pb-20 py-16">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted Clients</h2>
            
          </div>
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container - Fixed Size */}
                <div className="relative h-48 w-full flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                  <img
                    src={client.src}
                    alt={`Client ${index + 1}`}
                    className="max-h-full max-w-full object-contain p-4 transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback for missing images */}
                  <div className="hidden absolute inset-0 items-center justify-center bg-gray-100">
                    <Building2 className="w-16 h-16 text-gray-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {client.desc}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Interactive Elements */}
                {hoveredCard === index && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping delay-75"></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping delay-150"></div>
                  </div>
                )}
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
  );
};

export default Clientele;