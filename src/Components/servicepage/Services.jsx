"use client"

import { useState } from "react"
import { ChevronRight, Smartphone, BarChart3, Lightbulb, Megaphone, Calendar,   Wrench  } from "lucide-react"

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center">
            <service.icon className="w-8 h-8 text-cyan-500" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">{service.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
          <button className="inline-flex items-center text-cyan-500 font-medium text-sm hover:text-cyan-600 transition-colors">
            Read More
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState("all")

  const services = [
  {
    title: "Advertising & Creative Services",
    description:
      "We craft compelling campaigns and creatives that resonate with your audience across all platforms – TV, print, digital, and outdoor.",
    icon: Megaphone,
  },
  {
    title: "Event Management",
    description:
      "From corporate events to brand activations, concerts to conferences – we handle everything from conceptualization to flawless on-ground execution.",
    icon: Calendar,
  },
  {
    title: "Brand Strategy & Identity",
    description:
      "We build brands from the ground up – naming, logo design, brand voice, positioning, and visual identity that make your brand stand out.",
    icon: Lightbulb,
  },
  {
    title: "Digital Marketing",
    description:
      "Social media strategy, content creation, paid campaigns, influencer marketing – we help brands stay relevant and impactful in the digital age.",
    icon: Smartphone,
  },
  {
    title: "Production & Fabrication",
    description:
      "Stunning stage setups, exhibition stalls, and promotional materials – we ensure every touchpoint looks professional and on-brand.",
    icon: Wrench,
  },
  {
    title: "Media Planning & Buying",
    description:
      "Maximize your reach and return with our strategic media placement across traditional and digital channels.",
    icon: BarChart3,
  },
]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Creative Media Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            We craft compelling digital experiences that connect brands with their audiences
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive suite of creative services to help your brand stand out in today's competitive
              landscape.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "marketing", "production"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "all" ? "All Services" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicePage
