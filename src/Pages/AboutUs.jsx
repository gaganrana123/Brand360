import { useState, useEffect } from 'react';
import { CheckCircle, Target, Eye, Zap, Users, BarChart3, Lightbulb, Globe } from 'lucide-react';

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Integrated Expertise",
      description: "We seamlessly combine Digital, ATL, OOH, and Media Buying to deliver unified campaigns that maximize your brand's reach and impact."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customized Strategies",
      description: "Every brand is unique. We tailor solutions based on deep research and insights to meet your specific goals and audience needs."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Excellence",
      description: "Our team of creative thinkers and strategists crafts compelling content and eye-catching visuals that truly resonate."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Results",
      description: "We track, analyze, and optimize campaigns continuously to ensure you get the best ROI and measurable growth."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "End-to-End Service",
      description: "From ideation and production to media planning and buying, we manage everything under one roof for seamless execution."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Trusted by diverse clients, we deliver campaigns that not only impress but also convert and build lasting brand loyalty."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-12">
        <div 
          className="max-w-7xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold tracking-wider uppercase">
            Full-Service Marketing Agency
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Your Brand.<br />
            <span className="text-purple-400">Our Expertise.</span><br />
            Unlimited Possibilities.
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            At <span className="font-bold text-purple-400">Brand Three Sixty</span>, we are more than just a marketing agency—we are your strategic growth partner.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Digital Marketing', 'ATL', 'OOH Branding', 'Media Buying'].map((service, idx) => (
              <div 
                key={service}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <span className="font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-6 py-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Who We Are
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  With comprehensive expertise spanning Digital Marketing, ATL (Above The Line), Outdoor (OOH) Branding, and Media Buying, we deliver integrated solutions that amplify your brand's voice and accelerate your business success.
                </p>
                
                <p>
                  Founded on creativity, data-driven strategies, and a passion for innovation, our team brings together the best minds in content creation, media planning, buying, and campaign execution.
                </p>
                
                <p>
                  From crafting captivating digital campaigns and high-impact TVCs to dominating outdoor spaces and negotiating prime media placements, we ensure your message reaches the right people—at the right time, on the right platform.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-400/30 backdrop-blur-sm">
                <p className="text-xl font-semibold text-center">
                  Our mission is simple: to help you <span className="text-purple-400">build meaningful connections</span>, generate measurable results, and stay ahead in a fast-evolving marketplace.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-purple-600/20 rounded-xl">
                    <div className="text-3xl font-bold text-purple-400 mb-2">360°</div>
                    <div className="text-sm text-gray-300">Marketing Solutions</div>
                  </div>
                  <div className="text-center p-4 bg-pink-600/20 rounded-xl">
                    <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Client Support</div>
                  </div>
                  <div className="text-center p-4 bg-blue-600/20 rounded-xl">
                    <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                    <div className="text-sm text-gray-300">Campaigns Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-green-600/20 rounded-xl">
                    <div className="text-3xl font-bold text-green-400 mb-2">ROI</div>
                    <div className="text-sm text-gray-300">Focused Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative px-6 py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose Brand Three Sixty?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine creativity, strategy, and technology to deliver exceptional results that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl w-fit text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative px-6 py-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative p-8 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-3xl border border-purple-400/30 backdrop-blur-sm">
              <div className="absolute top-6 left-6">
                <Target className="w-12 h-12 text-purple-400" />
              </div>
              <div className="pt-16">
                <h3 className="text-3xl font-bold mb-6 text-purple-300">Our Mission</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To empower brands by delivering innovative, data-driven marketing solutions across digital, ATL, OOH, and media buying channels that create meaningful connections and drive measurable growth.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-pink-600/20 to-pink-800/20 rounded-3xl border border-pink-400/30 backdrop-blur-sm">
              <div className="absolute top-6 left-6">
                <Eye className="w-12 h-12 text-pink-400" />
              </div>
              <div className="pt-16">
                <h3 className="text-3xl font-bold mb-6 text-pink-300">Our Vision</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To be the leading marketing partner renowned for transforming brands into market leaders through creativity, strategic excellence, and unmatched client collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Create Marketing Magic?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us, and let's transform your brand into a market leader with strategies that deliver real results.
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}