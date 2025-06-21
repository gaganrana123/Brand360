import React, { useState, useEffect } from 'react';
import { Star, Award, Users, TrendingUp, Eye, Heart, Zap, Building2 } from 'lucide-react';

const ClientLogos = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
   
    { 
      src: '/Client1.png', 
      desc: 'The Beautybar',
      gradient: 'from-teal-500 to-cyan-600'
    },
   { 
      src: '/Client2.png', 
      desc: 'The BodyShop',
      gradient: 'from-teal-500 to-cyan-600'
    },
   { 
      src: '/Client3.png', 
      desc: 'UniLab Diagnostic Center',
      gradient: 'from-teal-500 to-cyan-600'
    },
    { 
      src: '/Client4.png', 
      desc: 'Xavier International College',
      gradient: 'from-teal-500 to-cyan-600'
    },
    
  ];



  return (
    <div className="min-h-scree bg-backgroundColor text-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-3000"></div>
      </div>

      {/* Header Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div 
          className="max-w-7xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 ">
            Our Client
          </h1>
          
         

          
        </div>
      </div>

      {/* Clients Grid */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  <img
                    src={client.src}
                    alt={`Client ${index + 1}`}
                    className="relative z-10 max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback for missing images */}
                  <div className="hidden absolute inset-0 items-center justify-center">
                    <Building2 className="w-16 h-16 text-black" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-r ${client.gradient} rounded-full text-xs font-semibold text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {client.category}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${client.gradient} rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300`}></div>
                    <p className="text-sm sm:text-base text-black leading-relaxed">
                      {client.desc}
                    </p>
                  </div>
                  
                  {/* Hover Effect Elements */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Interactive Elements */}
                {hoveredCard === index && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-ping delay-75"></div>
                    <div className="w-2 h-2 bg-white/20 rounded-full animate-ping delay-150"></div>
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

export default ClientLogos;