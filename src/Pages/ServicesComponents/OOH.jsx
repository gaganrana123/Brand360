import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Settings, Store, MapPin, Calendar, Sparkles, Zap, Target, Globe, MousePointer } from "lucide-react";

const oohServices = [
  {
    id: 1,
    title: 'Fabrication',
    icon: <Settings className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-400/30",
    content: {
      metaTitle: "Fabrication Services | Custom Solutions for Your Brand's Unique Needs",
      metaDescription: "Our fabrication services offer tailored solutions to bring your brand's vision to life. From custom displays to structural designs, we provide high-quality, innovative fabrication to enhance your brand presence and create lasting impressions.",
      headline: "Precision Fabrication That Brings Visions to Life",
      description: "Transform your brand concepts into tangible reality with our comprehensive fabrication services. We combine advanced techniques with skilled craftsmanship to deliver custom solutions that exceed expectations and create lasting impressions.",
      services: [
        "Understanding Client Needs and Project Scope",
        "Design and Engineering Excellence",
        "Material Selection and Procurement",
        "Precision Manufacturing",
        "Quality Control and Testing",
        "Assembly and Installation",
        "Customer Feedback Integration",
        "Maintenance and After-Sales Support"
      ],
      benefits: [
        "Expert team with proven experience",
        "State-of-the-art facilities and equipment",
        "Complete customization capabilities",
        "Rigorous quality assurance processes",
        "On-time delivery guarantee",
        "Exceptional customer satisfaction rates",
        "Advanced techniques and skilled craftsmanship",
        "Compliance with industry standards"
      ],
      whyInvest: [
        "Tailored solutions for unique brand needs",
        "High-quality materials and construction",
        "Professional engineering and feasibility checks",
        "Ongoing support and maintenance services"
      ]
    }
  },
  {
    id: 2,
    title: 'In-Shop Branding',
    icon: <Store className="w-6 h-6" />,
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-500/10 to-green-500/10",
    borderColor: "border-emerald-400/30",
    content: {
      metaTitle: "In Shop Branding Services | Build a Strong, Distinctive Brand Identity",
      metaDescription: "Transform your brand with our expert in branding services. We help you create a unique, memorable identity that resonates with your audience, builds trust, and differentiates your brand in a competitive market.",
      headline: "In-Store Experiences That Convert Browsers to Buyers",
      description: "Create immersive retail environments that tell your brand story and drive sales. Our in-shop branding solutions optimize every touchpoint to enhance customer experience and maximize brand impact at the point of purchase.",
      services: [
        "Brand Identity Alignment",
        "Visual Merchandising Strategy",
        "Strategic Display Setup",
        "Custom Signage and Graphics",
        "Interactive Elements Integration",
        "Store Layout Optimization",
        "Lighting and Ambience Design",
        "Customer Engagement Systems"
      ],
      benefits: [
        "Increased customer dwell time",
        "Enhanced brand recognition and recall",
        "Improved conversion rates",
        "Optimized customer flow and experience",
        "Strengthened brand differentiation",
        "Higher average transaction values",
        "Seamless brand consistency",
        "Memorable shopping experiences"
      ],
      whyChoose: [
        "Holistic approach to retail branding",
        "Tailored solutions for every space",
        "Customer-centered design philosophy",
        "Technology integration expertise"
      ]
    }
  },
  {
    id: 3,
    title: 'Outdoor Branding',
    icon: <MapPin className="w-6 h-6" />,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    borderColor: "border-orange-400/30",
    content: {
      metaTitle: "Outdoor Branding Services | Bold & Strategic OOH Advertising",
      metaDescription: "Maximize visibility with impactful outdoor ads. From billboards to transit branding, we turn public spaces into powerful brand statements.",
      headline: "Make the City Your Canvas",
      description: "Dominate the outdoor advertising landscape with strategic placements that capture attention and drive brand awareness. Our outdoor branding solutions ensure your message reaches the right audience at the right moment with maximum impact.",
      services: [
        "Billboards & Hoardings",
        "Transit Advertising Solutions",
        "Pole Kiosks & Street Furniture",
        "Building Wraps & Mall Branding",
        "Planning and Permits Management",
        "Performance Tracking and Analytics",
        "Strategic Location Selection",
        "Creative Design and Production"
      ],
      benefits: [
        "24/7 brand visibility and exposure",
        "High-frequency impression delivery",
        "Mass awareness and brand reinforcement",
        "Perfect complement to digital campaigns",
        "Builds trust through real-world presence",
        "Cost-effective reach and frequency",
        "Geographic targeting capabilities",
        "Weather-resistant and durable displays"
      ],
      whyInvest: [
        "Unavoidable visibility in high-traffic areas",
        "Builds brand credibility and trust",
        "Reaches audiences during daily routines",
        "Complements and amplifies other marketing efforts"
      ]
    }
  },
  {
    id: 4,
    title: 'Event Management',
    icon: <Calendar className="w-6 h-6" />,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-400/30",
    content: {
      metaTitle: "Event Management Services | Seamless Planning & Execution for Success",
      metaDescription: "Make your next event unforgettable with our expert event management services. From planning to execution, we handle every detail to ensure a smooth, impactful experience.",
      headline: "Events That Create Lasting Connections",
      description: "Transform your vision into memorable experiences with our comprehensive event management services. We handle every detail from concept to execution, ensuring flawless events that engage audiences and achieve your business objectives.",
      services: [
        "Strategic Event Planning",
        "Venue Selection and Management",
        "Budget Planning and Cost Control",
        "Vendor Coordination and Management",
        "Event Marketing and Promotion",
        "Guest Management and Registration",
        "Technology and AV Integration",
        "On-site Event Coordination",
        "Post-event Analysis and Reporting"
      ],
      benefits: [
        "Enhanced brand awareness and exposure",
        "Strengthened customer relationships",
        "Valuable networking opportunities",
        "Qualified lead generation",
        "Increased customer engagement",
        "Boosted sales and conversions",
        "Memorable brand experiences",
        "Improved employee morale",
        "Competitive market advantage"
      ],
      whyInvest: [
        "Direct face-to-face customer interaction",
        "Immediate feedback and engagement",
        "Builds emotional connections with brand",
        "Creates shareable moments and content"
      ]
    }
  }
];

const OOH = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20 px-6">
        <div 
          className="text-center mb-20"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-violet-200 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-300">
            OOH Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Out-of-home advertising solutions that capture attention and create lasting brand impact
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {oohServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-slate-900/70">
                <button
                  onClick={() => toggleIndex(index)}
                  className={`w-full flex items-center justify-between px-8 py-6 text-xl font-bold rounded-t-3xl transition-all duration-500 group-hover:scale-[1.02] focus:outline-none ${
                    activeIndex === index ? 'rounded-b-none' : 'rounded-b-3xl'
                  }`}
                  style={{
                    background: activeIndex === index 
                      ? `linear-gradient(135deg, ${service.bgGradient.includes('cyan') ? 'rgba(6, 182, 212, 0.2)' : 
                          service.bgGradient.includes('emerald') ? 'rgba(16, 185, 129, 0.2)' :
                          service.bgGradient.includes('orange') ? 'rgba(249, 115, 22, 0.2)' :
                          'rgba(139, 92, 246, 0.2)'}, rgba(15, 23, 42, 0.3))`
                      : 'rgba(15, 23, 42, 0.3)'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <span className="text-white">{service.title}</span>
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
                            <h3 className={`text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                              {service.content.headline}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {service.content.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <Zap className="w-4 h-4" />
                              Our Services:
                            </h4>
                            <ul className="space-y-2">
                              {service.content.services.map((serviceItem, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                  <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                                  <span>{serviceItem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {service.content.whyInvest && (
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Why Invest:
                              </h4>
                              <ul className="space-y-2">
                                {service.content.whyInvest.map((reason, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <div className={`w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
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
                              {service.content.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                  <div className={`w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                  </div>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {service.content.whyChoose && (
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                Why Choose Us:
                              </h4>
                              <ul className="space-y-2">
                                {service.content.whyChoose.map((reason, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                                    <span>{reason}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className={`p-6 bg-gradient-to-r ${service.bgGradient} border ${service.borderColor} rounded-xl backdrop-blur-sm`}>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <MousePointer className="w-4 h-4" />
                              Ready to Get Started?
                            </h4>
                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                              Transform your brand presence with our expert {service.title.toLowerCase()} services.
                            </p>
                            <button className={`px-6 py-3 bg-gradient-to-r ${service.gradient} rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg`}>
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
        <div className="fixed top-20 right-10 w-4 h-4 bg-cyan-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="fixed bottom-20 left-10 w-3 h-3 bg-violet-500/30 rounded-full animate-bounce delay-500"></div>
        <div className="fixed top-1/3 left-20 w-2 h-2 bg-emerald-500/30 rounded-full animate-bounce delay-300"></div>
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

export default OOH;