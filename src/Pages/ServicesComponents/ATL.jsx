// ATL.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Tv, FileText, Target, Radio, Film, Zap, Play, TrendingUp } from 'lucide-react';

const atlServices = [
  {
    id: 1,
    title: 'TVC',
    icon: <Tv className="w-6 h-6" />,
    subtitle: 'Powerful Storytelling That Connects',
    color: 'from-red-500 to-pink-600',
    bgColor: 'from-red-500/10 to-pink-600/10',
    borderColor: 'border-red-400/30',
    content: {
      metaTitle: 'TVC Production Services | Powerful Ads That Connect',
      metaDescription: 'Engage audiences with cinematic TVCs that tell your brand story. From concept to broadcast, we deliver impact-driven television commercials that convert.',
      headline: 'Powerful Storytelling That Captures Hearts and Markets',
      description: 'At Brand Three Sixty, we craft compelling TV commercials that don\'t just sell—they stick. Our TVC production team combines creative brilliance with strategic messaging to bring your brand story to life on the screen, creating lasting impressions in just 30 seconds.',
      services: [
        'Creative Concept & Scriptwriting',
        'Production & Direction',
        'Post-Production Magic',
        'Media Planning & Buying'
      ],
      benefits: [
        'Reaches millions across demographics',
        'Boosts brand credibility and awareness',
        'Perfect for launches, festivals, and emotional branding',
        'Integrates seamlessly with 360° campaigns'
      ],
      cta: 'Whether you\'re launching a new product, rebranding, or running a national campaign—our TVCs deliver results. Contact us today for a custom TVC proposal.'
    }
  },
  {
    id: 2,
    title: 'Print Ads',
    icon: <FileText className="w-6 h-6" />,
    subtitle: 'Tangible Impact, Timeless Reach',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'from-blue-500/10 to-cyan-600/10',
    borderColor: 'border-blue-400/30',
    content: {
      metaTitle: 'Creative Print Ad Services | High-Impact Brand Visibility',
      metaDescription: 'Stand out with bold, strategic print ads that drive real results. Newspapers, magazines, hoardings & more—crafted to captivate and convert.',
      headline: 'Tangible Impact. Timeless Reach. Targeted Results.',
      description: 'At Brand Three Sixty, we create print ads that don\'t just catch eyes—they capture attention and drive action.',
      services: [
        'Strategic Concept & Design',
        'High-Impact Creatives',
        'Media Planning & Placement',
        'Integrated Campaigns'
      ],
      benefits: [
        'Trusted by audiences for decades',
        'Great for regional & demographic targeting',
        'Ideal for launches, festive sales & brand positioning',
        'Complements TV, digital, and outdoor campaigns'
      ],
      cta: 'Whether it\'s a newspaper ad, magazine spread, or billboard—we create print ads that deliver clarity, creativity, and conversions.'
    }
  },
  {
    id: 3,
    title: 'Campaign',
    icon: <Target className="w-6 h-6" />,
    subtitle: 'Ideas That Ignite, Results That Matter',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'from-purple-500/10 to-indigo-600/10',
    borderColor: 'border-purple-400/30',
    content: {
      metaTitle: '360° Marketing Campaigns | Creative & ROI-Driven Strategy',
      metaDescription: 'Launch impactful campaigns across digital, ATL & print. From big ideas to full execution, we drive results that grow your brand and captivate audiences.',
      headline: 'Ideas That Ignite. Strategies That Deliver. Results That Matter.',
      description: 'At Brand Three Sixty, we don\'t just run campaigns—we build brand movements.',
      services: [
        'Campaign Strategy & Planning',
        'Big Idea & Creative Development',
        'Omnichannel Execution',
        'Performance Tracking & Optimization'
      ],
      campaignTypes: [
        'Product & Brand Launches',
        'Festive & Seasonal Campaigns',
        'Awareness & Advocacy Campaigns',
        'Sales & Promotional Campaigns',
        'Rebranding & Reputation Campaigns'
      ],
      benefits: [
        'Full-service creative, media & production team',
        'Deep industry insights',
        'Proven results across B2B and B2C',
        'Agile, data-driven, ROI-focused execution'
      ],
      cta: 'Let\'s Create a Campaign That Converts.'
    }
  },
  {
    id: 4,
    title: 'Radio Ads',
    icon: <Radio className="w-6 h-6" />,
    subtitle: 'Be Heard, Be Remembered, Be Everywhere',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-500/10 to-emerald-600/10',
    borderColor: 'border-green-400/30',
    content: {
      metaTitle: 'Radio Advertising Services | Voice Your Brand with Impact',
      metaDescription: 'Reach millions with strategic radio ads. From scripting to voiceovers & media buying, we deliver sound that sells and stories that stick.',
      headline: 'Be Heard. Be Remembered. Be Everywhere.',
      description: 'At Brand Three Sixty, we bring your brand\'s voice to life—literally.',
      services: [
        'Creative Scripting & Storyboarding',
        'Voiceover, Jingles & Audio Production',
        'Media Planning & Spot Booking',
        'Campaign Integration'
      ],
      benefits: [
        'Reaches millions, even in remote areas',
        'Ideal for regional language communication',
        'High repetition builds brand recall',
        'Budget-friendly with fast turnaround'
      ],
      cta: 'Let\'s create a radio ad that resonates, recalls, and results.'
    }
  },
  {
    id: 5,
    title: 'Cinema Hall',
    icon: <Film className="w-6 h-6" />,
    subtitle: 'Big Screen, Bigger Impact',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'from-orange-500/10 to-amber-600/10',
    borderColor: 'border-orange-400/30',
    content: {
      metaTitle: 'Cinema Hall Advertising | Big Screen, Big Impact Branding',
      metaDescription: 'Engage audiences with high-impact cinema ads. From production to placement, we deliver immersive brand experiences on the big screen across theaters.',
      headline: 'Big Screen. Bigger Impact. Maximum Attention.',
      description: 'At Brand Three Sixty, we take your brand to the biggest screens with the most captive audiences—cinema halls.',
      services: [
        'Ad Concept & Production',
        'Theater Selection & Slot Booking',
        'Geo-Targeted Campaigns',
        'Integrated Campaign Execution'
      ],
      benefits: [
        '100% audience attention in a distraction-free zone',
        'High-definition audio-visual impact',
        'Perfect for launches, festive ads, and luxury branding',
        'Geo-targeting with mass engagement',
        'Enhances brand prestige and trust'
      ],
      cta: 'Make Your Brand the Star of the Show: Let\'s light up the big screen with your message.'
    }
  }
];

const ATL = () => {
  const [openId, setOpenId] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20 px-6">
        {/* Header Section */}
        <div className="text-center mb-20" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-300">
            ATL Marketing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Reach millions with mass media advertising that builds brand awareness, credibility, and drives large-scale engagement across traditional channels.
          </p>
          <br />
          <div className="flex flex-wrap justify-center gap-4">
            {['Television', 'Print', 'Radio', 'Cinema', 'Outdoor'].map((medium, idx) => (
              <div
                key={medium}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span className="text-sm font-medium">{medium}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto space-y-8">
          {atlServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Hover Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

              {/* Card */}
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-slate-900/70">
                <button
                  onClick={() => toggle(service.id)}
                  className={`w-full flex items-center justify-between px-8 py-6 text-xl font-bold rounded-t-3xl transition-all duration-500 group-hover:scale-[1.02] focus:outline-none ${openId === service.id ? 'rounded-b-none' : 'rounded-b-3xl'}`}
                  style={{
                    background: openId === service.id
                      ? `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(15,23,42,0.3))`
                      : 'rgba(15,23,42,0.3)'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <span className="text-white">{service.title}</span>
                  </div>
                  <div className={`p-2 rounded-full bg-white/10 backdrop-blur-sm transform transition-transform duration-300 ${openId === service.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-white" />
                  </div>
                </button>

                {/* Content */}
                {openId === service.id && (
                  <div className="overflow-hidden">
                    <div className="px-8 py-8 text-gray-300 leading-relaxed animate-fadeIn">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h3 className={`text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                              {service.content.headline}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {service.content.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <Play className="w-4 h-4" />
                              What We Offer:
                            </h4>
                            <ul className="space-y-2">
                              {service.content.services.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                  <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 flex-shrink-0`}></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              Why It Works:
                            </h4>
                            <ul className="space-y-3">
                              {service.content.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                  <div className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                  </div>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {service.content.campaignTypes && (
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Campaign Types:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {service.content.campaignTypes.map((type, idx) => (
                                  <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${service.bgColor} border ${service.borderColor} rounded-full text-xs font-medium`}>
                                    {type}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ATL;

