import React, { useState, useEffect } from 'react';
import { ChevronDown, Radio, Tv, FileText, Film, Target, Sparkles, Globe, MousePointer } from 'lucide-react';

const mediaBuyingServices = [
  {
    id: 1,
    title: 'Radio',
    icon: <Radio className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-400/30",
    content: {
      metaTitle: "Radio Advertising Services | Voice Your Brand with Impact",
      metaDescription: "Reach millions with strategic radio ads. From scripting to voiceovers & media buying, we deliver sound that sells and stories that stick.",
      headline: "Be Heard. Be Remembered. Be Everywhere.",
      description: "At Brand Three Sixty, we bring your brand's voice to life—literally. Our radio advertising services help you connect with audiences through powerful storytelling, catchy jingles, and strategic placement across top stations nationwide.",
      services: [
        "Creative Scripting & Storyboarding",
        "Voiceover, Jingles & Audio Production",
        "Media Planning & Spot Booking",
        "Campaign Integration",
        "Voice Talent Selection",
        "Sound Design & Mixing",
        "Regional Language Production"
      ],
      benefits: [
        "Reaches millions, even in remote areas",
        "Ideal for regional language communication",
        "High repetition builds brand recall",
        "Budget-friendly with fast turnaround",
        "Strong emotional connection through voice",
        "Wide demographic reach across age groups",
        "Effective for local and national campaigns"
      ],
      whyInvest: [
        "Radio maintains 85% weekly reach across demographics",
        "Cost-effective with high frequency potential",
        "Builds brand recall through audio memory",
        "Perfect complement to visual advertising campaigns"
      ]
    }
  },
  {
    id: 2,
    title: 'TV',
    icon: <Tv className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-400/30",
    content: {
      metaTitle: "Television Advertising Services | High-Impact Brand Storytelling",
      metaDescription: "Reach millions with cinematic TV ads. From concept to broadcast, we craft compelling television campaigns that boost visibility and brand trust.",
      headline: "Broadcast Your Brand to Millions",
      description: "At Brand Three Sixty, we harness the power of television to give your brand a stage on one of the most trusted and far-reaching platforms. Create compelling visual narratives that resonate with diverse audiences.",
      services: [
        "Ad Concept & Creative Production",
        "Editing, Voiceovers & Post-Production",
        "Channel Selection & Media Buying",
        "Campaign Integration",
        "Script Development",
        "Casting & Direction",
        "Multi-format Production (15s, 30s, 60s)"
      ],
      benefits: [
        "Massive reach across all age groups and geographies",
        "High trust and credibility among viewers",
        "Strong emotional connection with visual storytelling",
        "Ideal for brand launches, festive campaigns & mass messaging",
        "Premium brand positioning opportunity",
        "Measurable audience engagement",
        "Cross-platform integration potential"
      ],
      whyInvest: [
        "Television reaches 90% of households nationwide",
        "Visual storytelling creates lasting brand memories",
        "Builds credibility and trust through premium placement",
        "Drives immediate response and long-term brand building"
      ]
    }
  },
  {
    id: 3,
    title: 'Print',
    icon: <FileText className="w-6 h-6" />,
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-400/30",
    content: {
      metaTitle: "Creative Print Ad Services | High-Impact Brand Visibility",
      metaDescription: "Stand out with bold, strategic print ads that drive real results. Newspapers, magazines, hoardings & more—crafted to captivate and convert.",
      headline: "Tangible Impact. Timeless Reach. Targeted Results.",
      description: "At Brand Three Sixty, we create print ads that don't just catch eyes—they capture attention and drive action. From newspapers to magazines, billboards to brochures, we craft print campaigns that deliver measurable results.",
      services: [
        "Strategic Concept & Design",
        "High-Impact Creatives",
        "Media Planning & Placement",
        "Integrated Campaigns",
        "Publication Selection",
        "Creative Copywriting",
        "Multi-format Design (Full page, Half page, Inserts)"
      ],
      benefits: [
        "Trusted by audiences for decades",
        "Great for regional & demographic targeting",
        "Ideal for launches, festive sales & brand positioning",
        "Complements TV, digital, and outdoor campaigns",
        "Tangible brand presence users can hold",
        "High attention span during reading",
        "Credible and authoritative medium"
      ],
      whyInvest: [
        "Print readers spend 20+ minutes with publications",
        "Higher recall rates compared to digital ads",
        "Builds brand authority and trustworthiness",
        "Effective for detailed product information sharing"
      ]
    }
  },
  {
    id: 4,
    title: 'Cinema',
    icon: <Film className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-400/30",
    content: {
      metaTitle: "Cinema Hall Advertising | Big Screen, Big Impact Branding",
      metaDescription: "Engage audiences with high-impact cinema ads. From production to placement, we deliver immersive brand experiences on the big screen across theaters.",
      headline: "Big Screen. Bigger Impact. Maximum Attention.",
      description: "At Brand Three Sixty, we take your brand to the biggest screens with the most captive audiences—cinema halls. Create immersive brand experiences that audiences can't skip, ignore, or fast-forward.",
      services: [
        "Ad Concept & Production",
        "Theater Selection & Slot Booking",
        "Geo-Targeted Campaigns",
        "Integrated Campaign Execution",
        "High-Definition Production",
        "Surround Sound Design",
        "Movie Genre Targeting"
      ],
      benefits: [
        "100% audience attention in a distraction-free zone",
        "High-definition audio-visual impact",
        "Perfect for launches, festive ads, and luxury branding",
        "Geo-targeting with mass engagement",
        "Enhances brand prestige and trust",
        "Premium viewing environment",
        "Young, affluent audience demographics"
      ],
      whyInvest: [
        "Captive audience with zero ad-skipping",
        "Premium brand association with entertainment",
        "High-impact sensory experience",
        "Effective for building brand aspiration and desire"
      ]
    }
  }
];

const MediaBuying = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20 px-6">
        <div 
          className="text-center mb-20"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-orange-200 to-emerald-200 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-300">
            Media Buying
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic media placement across all channels for maximum impact and reach
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {mediaBuyingServices.map((section, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${section.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-slate-900/70">
                <button
                  onClick={() => toggleIndex(index)}
                  className={`w-full flex items-center justify-between px-8 py-6 text-xl font-bold rounded-t-3xl transition-all duration-500 group-hover:scale-[1.02] focus:outline-none ${
                    activeIndex === index ? 'rounded-b-none' : 'rounded-b-3xl'
                  }`}
                  style={{
                    background: activeIndex === index 
                      ? `linear-gradient(135deg, ${section.bgGradient.includes('emerald') ? 'rgba(16, 185, 129, 0.2)' : 
                          section.bgGradient.includes('blue') ? 'rgba(59, 130, 246, 0.2)' :
                          section.bgGradient.includes('purple') ? 'rgba(147, 51, 234, 0.2)' :
                          'rgba(249, 115, 22, 0.2)'}, rgba(15, 23, 42, 0.3))`
                      : 'rgba(15, 23, 42, 0.3)'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${section.gradient} shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                      {section.icon}
                    </div>
                    <span className="text-white">{section.title}</span>
                  </div>
                  
                  <div className={`p-2 rounded-full bg-white/10 backdrop-blur-sm transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-white" />
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="overflow-hidden">
                    <div className="px-8 py-8 text-gray-300 leading-relaxed animate-fadeIn">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h3 className={`text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                              {section.content.headline}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {section.content.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <Radio className="w-4 h-4" />
                              Our Services:
                            </h4>
                            <ul className="space-y-2">
                              {section.content.services.map((service, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                  <div className={`w-2 h-2 bg-gradient-to-r ${section.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                                  <span>{service}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {section.content.whyInvest && (
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Why Invest:
                              </h4>
                              <ul className="space-y-2">
                                {section.content.whyInvest.map((reason, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <div className={`w-6 h-6 bg-gradient-to-r ${section.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <span>{reason}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              Key Benefits:
                            </h4>
                            <ul className="space-y-3">
                              {section.content.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                  <div className={`w-6 h-6 bg-gradient-to-r ${section.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                  </div>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className={`p-6 bg-gradient-to-r ${section.bgGradient} border ${section.borderColor} rounded-xl backdrop-blur-sm`}>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <MousePointer className="w-4 h-4" />
                              Ready to Get Started?
                            </h4>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                              Transform your brand presence with our expert {section.title.toLowerCase()} advertising services.
                            </p>
                            <button className={`px-6 py-3 bg-gradient-to-r ${section.gradient} rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg`}>
                              Get Started
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="fixed top-20 right-10 w-4 h-4 bg-orange-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="fixed bottom-20 left-10 w-3 h-3 bg-emerald-500/30 rounded-full animate-bounce delay-500"></div>
        <div className="fixed top-1/3 left-20 w-2 h-2 bg-blue-500/30 rounded-full animate-bounce delay-300"></div>
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

export default MediaBuying;