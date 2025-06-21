import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Sparkles, Zap, Target, Globe, MousePointer, Code } from "lucide-react";

const sections = [
  {
    title: "Content Management",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-400/30",
    content: {
      metaTitle: "Content Management Services | Boost Your Brand with Expert Strategy",
      metaDescription: "Our content management services ensure your brand's voice is consistent and engaging. From creation to optimization, we manage and deliver high-quality content tailored to your audience, boosting visibility and driving results.",
      headline: "Strategic Content That Drives Results",
      description: "Content management is the foundation of a successful online presence. Our comprehensive approach creates consistency, improves SEO, engages users, saves time, and provides measurable results that grow your business.",
      services: [
        "Page Setup and Management",
        "Content Optimization",
        "Marketing Strategies",
        "Social Media Integration",
        "Social Advertising",
        "Website Content",
        "Blog Management"
      ],
      benefits: [
        "Expanded audience base and reach",
        "Increased brand awareness and recognition",
        "Better conversion rates and engagement",
        "Cost-effective advertising solutions"
      ],
      whyInvest: [
        "Creates consistency across all platforms",
        "Improves SEO rankings and visibility",
        "Engages users with relevant content",
        "Saves time with strategic planning",
        "Provides measurable, trackable results"
      ]
    }
  },
  {
    title: "Social Media Campaign",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-400/30",
    content: {
      metaTitle: "Social Media Campaigns | Drive Engagement and Growth for Your Brand",
      metaDescription: "Maximize your brand's potential with our expert social media campaigns. We create targeted strategies across platforms to increase engagement, build brand awareness, and drive conversions. Let us elevate your online presence.",
      headline: "Social Campaigns That Connect and Convert",
      description: "Our social media campaigns don't just post content—they build communities. We create targeted strategies across platforms to increase engagement, build brand awareness, and drive meaningful conversions for your business.",
      services: [
        "Understanding your objectives",
        "Brainstorming innovative ideas",
        "Customer engagement strategies",
        "Campaign execution",
        "Leveraging social media tools",
        "Comprehensive analysis"
      ],
      benefits: [
        "Reach a broader, targeted audience",
        "Engage directly with customers",
        "Cost-effective marketing approach",
        "Boost brand awareness and recognition",
        "Drive traffic and conversions",
        "Trackable performance metrics"
      ],
      whyChoose: [
        "Creative yet strategic approach",
        "Data-driven decision making",
        "Customized campaigns tailored to your brand",
        "Cross-platform expertise and optimization"
      ]
    }
  },
  {
    title: "Search Engine Optimization",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-400/30",
    content: {
      metaTitle: "SEO Services | Improve Search Rankings & Drive Organic Traffic",
      metaDescription: "Boost your website's visibility with our expert SEO services. We optimize your site for higher search rankings, improved traffic, and better user engagement, helping you reach your target audience and grow your business.",
      headline: "SEO That Drives Sustainable Growth",
      description: "Our comprehensive SEO approach doesn't just improve rankings—it transforms your online presence. We optimize every aspect of your digital footprint to drive organic traffic, enhance user experience, and deliver long-term results.",
      services: [
        "Business goals alignment",
        "Comprehensive website audit",
        "Strategic keyword research",
        "On-page and technical SEO",
        "Content strategy development",
        "Off-page and local SEO",
        "Monitoring and reporting"
      ],
      benefits: [
        "Increased online visibility and presence",
        "Cost-effective long-term marketing",
        "Enhanced user experience",
        "Higher credibility and trust",
        "Targeted traffic generation",
        "Long-term sustainable results",
        "Competitive market advantage"
      ],
      whyInvest: [
        "Organic traffic has higher conversion rates",
        "SEO provides 24/7 marketing presence",
        "Builds long-term brand authority",
        "Cost-effective compared to paid advertising"
      ]
    }
  },
  {
    title: "Facebook Advertisement",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-400/30",
    content: {
      metaTitle: "Facebook Advertising Services | Targeted Ads to Grow Your Business",
      metaDescription: "Harness the power of Facebook advertising with our expert services. We create targeted ad campaigns to increase brand visibility, drive traffic, and boost conversions.",
      headline: "Facebook Ads That Generate Real Results",
      description: "Leverage Facebook's massive audience with precision-targeted campaigns. Our Facebook advertising expertise combines creative excellence with data-driven strategies to maximize your ROI and drive meaningful business growth.",
      services: [
        "Goal definition and strategy",
        "Advanced audience targeting",
        "Creative ad design and copy",
        "Budget allocation and optimization",
        "Placement optimization",
        "A/B testing and refinement",
        "Retargeting campaigns",
        "Monitoring and reporting"
      ],
      benefits: [
        "Massive reach across demographics",
        "Advanced targeting capabilities",
        "Cost-effective advertising model",
        "Variety of engaging ad formats",
        "Interactive engagement tools",
        "Detailed analytics and insights",
        "Powerful retargeting options"
      ],
      whyChoose: [
        "Access to 2.8+ billion active users",
        "Precise demographic and interest targeting",
        "Multiple ad formats for different goals",
        "Real-time performance optimization"
      ]
    }
  },
  {
    title: "Pay Per Click",
    icon: <MousePointer className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-400/30",
    content: {
      metaTitle: "PPC Advertising Services | Drive Instant Traffic & Maximize ROI",
      metaDescription: "Unlock the power of Pay-Per-Click (PPC) advertising with our expert strategies. We create targeted PPC campaigns that drive immediate traffic and maximize your return on investment.",
      headline: "PPC Campaigns That Deliver Instant Results",
      description: "Get immediate visibility and traffic with our strategic PPC campaigns. We optimize every click to ensure maximum ROI, combining data-driven insights with compelling ad copy to drive conversions from day one.",
      services: [
        "Business goal alignment",
        "Strategic keyword research",
        "Compelling ad copywriting",
        "Smart bid strategy optimization",
        "Landing page optimization",
        "Campaign monitoring and adjustment",
        "A/B testing for performance",
        "Retargeting campaign setup",
        "Transparent reporting and analysis"
      ],
      benefits: [
        "Instant results and visibility",
        "Precise targeted reach",
        "Complete budget control",
        "Data-driven optimization",
        "Enhanced brand visibility",
        "High conversion potential",
        "Advanced retargeting capabilities",
        "Competitive market edge"
      ],
      whyInvest: [
        "Only pay when users click your ads",
        "Immediate traffic and lead generation",
        "Complete control over ad spend",
        "Measurable ROI and performance tracking"
      ]
    }
  },
  {
    title: "Website Development",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/10 to-blue-500/10",
    borderColor: "border-indigo-400/30",
    content: {
      metaTitle: "Website Development Services | Interactive and User Friendly",
      metaDescription: "Enhance your digital presence with interactive and user friendly websites that convert visitors into customers.",
      headline: "Websites That Convert and Captivate",
      description: "Create a powerful digital presence with our custom website development services. We build responsive, SEO-optimized websites that not only look stunning but drive real business results and user engagement.",
      services: [
        "Understanding business goals",
        "Strategy and market research",
        "Custom design and branding",
        "Mobile-first development approach",
        "SEO optimization integration",
        "CMS integration and training",
        "E-commerce solutions",
        "Security implementation",
        "Testing and quality assurance",
        "Content creation support",
        "Launch and ongoing support",
        "Analytics tracking setup",
        "Continuous improvement"
      ],
      benefits: [
        "Strong first impressions that convert",
        "Seamless user experience across devices",
        "Strong brand identity and recognition",
        "SEO-ready for better visibility",
        "Conversion-focused design elements",
        "Mobile responsive for all devices",
        "Secure and protected infrastructure",
        "Competitive advantage in market",
        "Scalable for business growth",
        "Analytics-driven insights"
      ],
      whyInvest: [
        "Your website is your 24/7 salesperson",
        "Mobile traffic accounts for 50%+ of web traffic",
        "Good design increases credibility by 75%",
        "Fast websites improve conversion rates significantly"
      ]
    }
  }
];


const DigitalMarketing = () => {
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20 px-6">
        <div 
          className="text-center mb-20"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-300">
            Digital Marketing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your brand with our comprehensive suite of digital marketing services
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {sections.map((section, index) => (
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
                      ? `linear-gradient(135deg, ${section.bgGradient.includes('pink') ? 'rgba(236, 72, 153, 0.2)' : 
                          section.bgGradient.includes('blue') ? 'rgba(59, 130, 246, 0.2)' :
                          section.bgGradient.includes('emerald') ? 'rgba(16, 185, 129, 0.2)' :
                          section.bgGradient.includes('purple') ? 'rgba(147, 51, 234, 0.2)' :
                          section.bgGradient.includes('orange') ? 'rgba(249, 115, 22, 0.2)' :
                          'rgba(99, 102, 241, 0.2)'}, rgba(15, 23, 42, 0.3))`
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
                              <Zap className="w-4 h-4" />
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

                          {section.content.whyChoose && (
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                Why Choose Us:
                              </h4>
                              <ul className="space-y-2">
                                {section.content.whyChoose.map((reason, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <div className={`w-2 h-2 bg-gradient-to-r ${section.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                                    <span>{reason}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
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
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
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

export default DigitalMarketing;