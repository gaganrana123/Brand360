import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import {
  FaBullhorn,
  FaCalendarAlt,
  FaLightbulb,
  FaChartLine,
  FaTools,
  FaTv,
} from 'react-icons/fa';

const coreServices = [
  {
    icon: <FaBullhorn className="text-blue-600 text-3xl" />,
    title: "Advertising & Creative Services",
    description:
      "We craft impactful campaigns that connect with audiences across TV, print, digital, and outdoor platforms.",
    details:
      "From concept development to final execution, our team creates advertisements that not only capture attention but also inspire action. We specialize in storytelling, scriptwriting, visual design, and integrated campaign planning to ensure a cohesive brand message across every channel.",
  },
  {
    icon: <FaCalendarAlt className="text-blue-600 text-3xl" />,
    title: "Event Management",
    description:
      "We plan and execute corporate events, activations, concerts, and conferences with precision.",
    details:
      "Our end-to-end event management covers everything from budgeting and ideation to stage design, artist coordination, and logistics. We turn your vision into an experience—memorable, seamless, and on-brand for your audience.",
  },
  {
    icon: <FaLightbulb className="text-blue-600 text-3xl" />,
    title: "Brand Strategy & Identity",
    description:
      "Crafting your brand’s unique identity through research, design, and positioning.",
    details:
      "We dive deep into market research and competitor analysis to create a compelling brand strategy. Our services include logo design, brand voice creation, tone guidelines, and identity systems that ensure your brand remains consistent and memorable.",
  },
  {
    icon: <FaChartLine className="text-blue-600 text-3xl" />,
    title: "Digital Marketing",
    description:
      "Enhance your online presence with social media, SEO, paid ads, and influencer outreach.",
    details:
      "Our digital marketing strategies are results-driven and customized to your brand goals. We focus on increasing engagement, conversions, and brand loyalty through content creation, campaign management, community building, analytics, and trend-aware tactics.",
  },
  {
    icon: <FaTools className="text-blue-600 text-3xl" />,
    title: "Production & Fabrication",
    description:
      "We build exhibition booths, stage sets, promotional items, and branded assets that stand out.",
    details:
      "From large-scale installations to custom signage, we turn design into reality. Our production services include fabrication for events, expos, store branding, pop-up shops, and more—ensuring your brand is represented beautifully in the physical world.",
  },
  {
    icon: <FaTv className="text-blue-600 text-3xl" />,
    title: "Media Planning & Buying",
    description:
      "Strategic ad placements across digital, TV, print, and outdoor platforms to maximize ROI.",
    details:
      "Our media experts analyze your audience behavior and media trends to place your ads where they matter most. We negotiate the best rates, optimize timing, and ensure cross-platform consistency for high-impact reach and engagement.",
  },
];

const ServicePage = () => {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-4 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover" />
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">What We Do</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            At Brand Three Sixty Pvt. Ltd., we offer a 360° approach to branding, marketing, and events—tailored from idea to execution.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the range of services we offer, each designed to elevate your brand presence through creativity, strategy, and flawless execution.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <button onClick={() => toggleService(index)} className="flex flex-col items-center text-center w-full focus:outline-none">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <span className="mt-4 text-blue-600 text-sm font-medium">
                    {openIndex === index ? 'Hide Details ▲' : 'Learn More ▼'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out mt-4 text-left text-gray-700 text-sm leading-relaxed ${
                  openIndex === index ? 'max-h-[300px]' : 'max-h-0'
                }`}>
                  <p className="pt-4 border-t border-gray-200">{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
