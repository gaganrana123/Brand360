"use client";

import { useState, useEffect } from "react";
import {
  CheckCircle,
  Target,
  Zap,
  BarChart3,
  Lightbulb,
  Globe,
  LayoutGrid,
} from "lucide-react";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Integrated Expertise",
      description:
        "We seamlessly combine Digital, ATL, OOH, and Media Buying to deliver unified campaigns that maximize your brand's reach and impact.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customized Strategies",
      description:
        "Every brand is unique. We tailor solutions based on deep research and insights to meet your specific goals and audience needs.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Excellence",
      description:
        "Our team of creative thinkers and strategists crafts compelling content and eye-catching visuals that truly resonate.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Results",
      description:
        "We track, analyze, and optimize campaigns continuously to ensure you get the best ROI and measurable growth.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "End-to-End Service",
      description:
        "From ideation and production to media planning and buying, we manage everything under one roof for seamless execution.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proven Track Record",
      description:
        "Trusted by diverse clients, we deliver campaigns that not only impress but also convert and build lasting brand loyalty.",
    },
  ];

  return (
    <div className="min-h-fit bg-gradient-to-b from-gray-50 to-gray-100 text-black">
      {/* Hero Section with Split Layout */}
      <section className="relative min-h-[70vh] bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] py-12 lg:py-0">
            {/* Left Container - Text Content */}
            
            <div className="space-y-6 lg:space-y-8">
            {/* Blue accent line */}
                <div className="w-64 h-1 bg-primary"></div>
              <h1 className="text-4xl md:text-4xl lg:text-4xl font-black leading-tight text-black">
                Your Brand.
                <br />
                <span className="text-primary">Our Expertise.</span>
                <br />
                Unlimited Possibilities.
              </h1>
              <div className="space-y-4">
                <div className="bg-primary  text-white px-6 py-4 inline-block text-lg md:text-xl font-bold">
                  At Brand Three Sixty, we are more than just a marketing
                  agency. We are your strategic growth partner.
                </div>
              </div>
            </div>

            {/* Right Container - Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/aboutus.png"
                  alt="Brand Three Sixty - Marketing Excellence"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/about.png"
                    alt="About Brand Three Sixty"
                    className="transition-transform duration-300 ease-in-out hover:scale-105 w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <LayoutGrid className="w-5 h-5 text-black" />
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Comprehensive Marketing Expertise
              </h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  Brand Three Sixty is a dynamic advertising agency specializing
                  in 360 Degree Marketing services.
                </p>
                <p>
                  We take the time to understand your business needs, crafting
                  tailored marketing communications designed to help you achieve
                  your objectives.
                </p>
                <p>
                  From crafting captivating digital campaigns and high-impact
                  TVCs to dominating outdoor spaces and negotiating prime media
                  placements, we ensure your message reaches the right people—at
                  the right time, on the right platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row min-h-[70vh] w-full">
          {/* Left Section - Mission & Vision */}
          <div className="w-full flex-shrink-0 p-8 lg:p-12 bg-gray-50 flex-1">
            <div className="space-y-8 max-w-xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Mission:
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mission is to deliver engaging advertisements, innovative
                  campaigns, inclusive marketing strategies, and outstanding
                  results that empower our clients to grow their businesses and
                  achieve their marketing objectives.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Vision:
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our goal is to generate business value and establish a strong
                  presence in the advertising market through continuous
                  innovation, in-depth research, and exceptional delivery.
                </p>
              </div>
            </div>
          </div>
          {/* Right Section - Photo */}
          <div className="relative flex-1 flex items-center justify-center">
            <img
              src="/mission.png"
              alt="Our Mission & Vision"
              className="w-3/4 transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Lightbulb className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl font-bold">
              Why Choose Brand Three Sixty?
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              We combine creativity, strategy, and technology to deliver
              exceptional results that drive your business forward.
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure your project's success from
              concept to completion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Discover",
                description:
                  "We dive deep to understand your goals and audience",
              },
              {
                step: 2,
                title: "Strategize",
                description:
                  "We develop a customized plan to achieve your objectives",
              },
              {
                step: 3,
                title: "Create",
                description: "Our creative team brings your vision to life",
              },
              {
                step: 4,
                title: "Launch",
                description: "We deploy and optimize for maximum impact",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
