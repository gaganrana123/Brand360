import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Boost your brand with expert digital marketing services—SEO, social media, PPC, content & more. Tailored strategies that drive traffic, leads & sales.",
      icon: "📱",
      services: [
        "Content Management Services",
        "SEO Services",
        "Facebook Advertising Services",
        "PPC Advertising Services",
        "Website Development Services",
      ],
      image: "/DigitalMarketing.jpeg", // Updated path
      category: "marketing",
    },
    {
      id: 2,
      title: "Result-Driven ATL Services",
      description: "Maximize reach with impactful ATL strategies. TV, radio & print ads tailored to elevate your brand and connect with mass audiences.",
      icon: "📊",
      services: [
        "TVC Production Services",
        "Creative Print Ad Services",
        "360° Marketing Campaigns",
        "Radio Advertising Services",
        "Cinema Hall Advertising",
      ],
      image: "/ATL.jpeg", // Updated path
      category: "production",
    },
    {
      id: 3,
      title: "OOH Advertising Services",
      description: "Boost visibility with strategic OOH ads—billboards, transit, and more. We design and place outdoor campaigns that captivate and convert on the move.",
      icon: "💡",
      services: [
        "Fabrication Services",
        "In Shop Branding Services",
        "Outdoor Branding Services",
        "Event Management Services",
      ],
      image: "/OOH.jpg", // Updated path
      category: "marketing",
    },
    {
      id: 4,
      title: "Media Buying Services",
      description: "Maximize ROI with smart media buying. We plan and negotiate ad placements across TV, radio, digital, print & OOH for maximum reach and impact.",
      icon: "🎥",
      services: [
        "Radio Advertising Services",
        "Television Advertising Services",
        "Creative Print Ad Services",
        "Cinema Hall Advertising",
      ],
      image: "/MediaBuying.jpeg", // Updated path
      category: "marketing",
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Creative Media Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            We craft compelling digital experiences that connect brands with their audiences
          </p>
        </div>
      </section>

      <section id="services" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive suite of creative services to help your brand stand out in today's competitive landscape.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'marketing', 'production'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? 'All Services' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-32 ">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

     


    </div>
  )
}

export default ServicePage;