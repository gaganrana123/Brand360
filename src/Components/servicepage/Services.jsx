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
      " We craft compelling campaigns and creatives that resonate with your audience across all platforms – TV, print, digital, and outdoor.",
    details:
      "We craft compelling campaigns and creatives that truly resonate with your audience across all platforms. Whether it's TV, print, digital, or outdoor, we ensure your message is impactful and effectively reaches your target audience wherever they are.",
  },
  {
    icon: <FaCalendarAlt className="text-blue-600 text-3xl" />,
    title: "Event Management",
    description:
      "From corporate events to brand activations, concerts to conferences – we handle everything from conceptualization to flawless on-ground execution.",
    details:
      "From corporate events to brand activations, concerts to conferences, we handle everything. We manage your event seamlessly, from initial conceptualization through to flawless on-ground execution, ensuring a successful experience.",
  },
  {
    icon: <FaLightbulb className="text-blue-600 text-3xl" />,
    title: "Brand Strategy & Identity",
    description:
      "We build brands from the ground up – naming, logo design, brand voice, positioning, and visual identity that make your brand stand out.",
    details:
      "We build brands from the ground up, covering naming, logo design, brand voice, positioning, and visual identity to ensure your brand truly stands out.",
  },
  {
    icon: <FaChartLine className="text-blue-600 text-3xl" />,
    title: "Digital Marketing",
    description:
      "Social media strategy, content creation, paid campaigns, influencer marketing – we help brands stay relevant and impactful in the digital age.",
    details:
      "We help brands thrive in the digital age through comprehensive social media strategy, engaging content creation, targeted paid campaigns, and effective influencer marketing, ensuring your brand remains both relevant and impactful.",
  },
  {
    icon: <FaTools className="text-blue-600 text-3xl" />,
    title: "Production & Fabrication",
    description:
      "Stunning stage setups, exhibition stalls, and promotional materials – we ensure every touchpoint looks professional and on-brand.",
    details:
      "We create stunning stage setups, impactful exhibition stalls, and compelling promotional materials, ensuring every visual touchpoint is professional and perfectly aligns with your brand.",
  },
  {
    icon: <FaTv className="text-blue-600 text-3xl" />,
    title: "Media Planning & Buying",
    description:
      "Maximize your reach and return with our strategic media placement across traditional and digital channels.",
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
