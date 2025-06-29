import { useState, useEffect } from 'react';
import { CheckCircle, Target, Eye, Zap, Users, BarChart3, Lightbulb, Globe, Award, LayoutGrid } from 'lucide-react';

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-black">
      {/* Hero Section */}
       <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold mb-6">
            Your Brand.<br />
            <span >Our Expertise.</span><br />
            Unlimited Possibilities.
          </h1>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            At Brand Three Sixty, we are more than just a marketing agency—we are your strategic growth partner.
          </p>
        </div>
      </section>
    

      {/* About Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <LayoutGrid className="w-5 h-5 text-black" />
                <span className="text-sm font-semibold tracking-wider uppercase">Who We Are</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900">
                Comprehensive Marketing Expertise
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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

              <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <p className="text-lg font-semibold text-center text-indigo-700">
                  Our mission is simple: to help you <span className="text-indigo-900">build meaningful connections</span>, generate measurable results, and stay ahead in a fast-evolving marketplace.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white shadow-lg rounded-3xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">360°</div>
                    <div className="text-sm text-gray-600">Marketing Solutions</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-xl border border-pink-100">
                    <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Client Support</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-sm text-gray-600">Campaigns Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="text-3xl font-bold text-green-600 mb-2">ROI</div>
                    <div className="text-sm text-gray-600">Focused Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Lightbulb className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold">
              Why Choose Brand Three Sixty?
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              We combine creativity, strategy, and technology to deliver exceptional results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-8 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-indigo-100 text-indigo-600 rounded-xl w-fit group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                {hoveredCard === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
              <div className="absolute top-6 left-6">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="pt-16">
                <h3 className="text-2xl font-bold mb-4 text-indigo-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower brands by delivering innovative, data-driven marketing solutions across digital, ATL, OOH, and media buying channels that create meaningful connections and drive measurable growth.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-pink-50 rounded-3xl border border-pink-100">
              <div className="absolute top-6 left-6">
                <Eye className="w-8 h-8 text-pink-600" />
              </div>
              <div className="pt-16">
                <h3 className="text-2xl font-bold mb-4 text-pink-800">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading marketing partner renowned for transforming brands into market leaders through creativity, strategic excellence, and unmatched client collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-white shadow-lg rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Create Marketing Magic?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us, and let's transform your brand into a market leader with strategies that deliver real results.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}