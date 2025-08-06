import { Megaphone, Calendar, Lightbulb, Smartphone, Wrench, BarChart3, ArrowRight } from "lucide-react"

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

export default function WhatWeDo() {
  return (
    <div id="services" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl sm:text-3xl font-extrabold text-gray-900">WHAT WE DO</h2>
          <div className=" w-52 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-cyan-500 mt-2 text-lg sm:text-xl md:text-2xl">Services</p>
          <div className="mt-6 max-w-4xl mx-auto">
            <p className="text-gray-700 text-base leading-relaxed">
              At Brand Three Sixty Pvt. Ltd., we offer a 360-degree approach to branding, marketing, and event
              experiences. Our services are tailored to meet your brand's unique goals — from idea to execution.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-white p-8 rounded-lg">
                <div className="flex items-start space-x-1">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600 " />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 text-l leading-relaxed mb-4">{service.description}</p>
                   
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
