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
      category: 'Branding Excellence',
      gradient: 'from-blue-500 to-cyan-600'
    },
    { 
      src: '/krishna2.png', 
      desc: 'A valued collaborator in ATL and OOH campaigns.',
      category: 'ATL & OOH',
      gradient: 'from-purple-500 to-indigo-600'
    },
    { 
      src: '/krishna3.png', 
      desc: 'Industry leader we supported through integrated marketing solutions.',
      category: 'Integrated Solutions',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      src: '/krishna (3).png', 
      desc: 'Bold ideas executed through digital and TVC media strategies.',
      category: 'Digital & TVC',
      gradient: 'from-red-500 to-pink-600'
    },
    { 
      src: '/krishna (6).png', 
      desc: 'Brought nationwide exposure through strategic media buying.',
      category: 'Media Buying',
      gradient: 'from-orange-500 to-amber-600'
    },
    { 
      src: '/krishna (17).png', 
      desc: 'Successful event activations and in-shop branding experience.',
      category: 'Event Activations',
      gradient: 'from-teal-500 to-cyan-600'
    },
    { 
      src: '/krishna (20).png', 
      desc: 'Elevated with impactful outdoor and transit campaigns.',
      category: 'Outdoor & Transit',
      gradient: 'from-violet-500 to-purple-600'
    },
    { 
      src: '/krishna (21).png', 
      desc: 'Seamless campaign integrations across print and TV.',
      category: 'Print & TV',
      gradient: 'from-rose-500 to-pink-600'
    },
    { 
      src: '/krishna (23).png', 
      desc: 'Voice of brand amplified via radio and cinema ads.',
      category: 'Radio & Cinema',
      gradient: 'from-indigo-500 to-blue-600'
    },
    { 
      src: '/krishna (25).png', 
      desc: 'Known for collaborative digital and retail experiences.',
      category: 'Digital & Retail',
      gradient: 'from-emerald-500 to-green-600'
    },
    { 
      src: '/krishna (26).png', 
      desc: 'Trusted us for full 360° creative marketing campaigns.',
      category: '360° Campaigns',
      gradient: 'from-cyan-500 to-blue-600'
    },
    { 
      src: '/krishna (29).png', 
      desc: 'Celebrated product launches with immersive experiences.',
      category: 'Product Launches',
      gradient: 'from-amber-500 to-orange-600'
    },
    { 
      src: '/krishna (30).png', 
      desc: 'Strengthened presence through bold OOH branding.',
      category: 'OOH Branding',
      gradient: 'from-pink-500 to-rose-600'
    },
  ];

  const stats = [
    { icon: <Building2 className="w-6 h-6" />, number: '200+', label: 'Brands Served', color: 'text-blue-400' },
    { icon: <Award className="w-6 h-6" />, number: '500+', label: 'Campaigns Delivered', color: 'text-purple-400' },
    { icon: <TrendingUp className="w-6 h-6" />, number: '98%', label: 'Client Satisfaction', color: 'text-green-400' },
    { icon: <Star className="w-6 h-6" />, number: '50+', label: 'Industry Awards', color: 'text-amber-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
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
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full border border-indigo-400/30 backdrop-blur-sm">
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold tracking-wider uppercase">Trusted Partners</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Our Clientele
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
            We've had the privilege of working with some of the most impactful and inspiring brands across industries. 
            Our partnerships span diverse verticals and showcase our commitment to delivering results that speak for themselves.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
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
                    <Building2 className="w-16 h-16 text-gray-400" />
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
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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

      {/* Bottom CTA Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl border border-white/20 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Ready to Join Our Success Stories?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's create the next chapter of marketing excellence together. Your brand deserves a partnership that delivers extraordinary results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 sm:px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Become Our Client
              </button>
              <button className="px-8 sm:px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                View Case Studies
              </button>
            </div>
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