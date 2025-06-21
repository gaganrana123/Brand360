// ServiceHighlight.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceHighlight() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Digital Marketing",
      description:
        "Boost your brand with expert digital marketing services—SEO, social media, PPC, content & more. Tailored strategies that drive traffic, leads & sales.",
      image: "/DigitalMarketing.jpeg",
      features: [
        "Content Management",
        "Social Media Campaigns",
        "SEO",
        "Facebook Advertising",
        "PPC Advertising",
        "Website Development",
      ],
       route: "/servicescomponents/digital-marketing",
    },
    {
      title: "ATL",
      description:
        "Maximize reach with impactful ATL strategies. TV, radio & print ads tailored to elevate your brand and connect with mass audiences.",
      image: "/ATL.jpeg",
      features: ["TVC", "Print Ads", "Campaigns", "Radio Ads", "Cinema Hall"],
       route: "/servicescomponents/atl",
    },
    {
      title: "OOH",
      description:
        "Boost visibility with strategic OOH ads—billboards, transit, and more. We design and place outdoor campaigns that captivate and convert on the move.",
      image: "/OOH.jpg",
      features: [
        "Fabrication",
        "Shop Branding Services",
        "Outdoor Branding Services",
        "Event Management Services",
      ],
      route: "/servicescomponents/ooh",
    },
    {
      title: "Media Buying",
      description:
        "Maximize ROI with smart media buying. We plan and negotiate ad placements across TV, radio, digital, print & OOH for maximum reach and impact.",
      image: "/MediaBuying.jpeg",
      features: ["Radio", "TV", "Print", "Cinema"],
       route: "/servicescomponents/media-buying",
    },
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <style>{`
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

        .service-card {
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out both;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(21, 92, 148, 0.2);
        }

        .service-image {
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        .service-card:active {
          transform: translateY(-5px) scale(0.98);
        }

        .click-indicator {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(21, 92, 148, 0.9);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .click-indicator {
          opacity: 1;
        }
      `}</style>

      <div className="py-16 px-8 bg-backgroundColor">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p
              className="text-xl text-black max-w-3xl mx-auto leading-relaxed"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.4s both",
              }}
            >
              We provide comprehensive 360° solutions to elevate your brand and drive business growth through innovative strategies and creative excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative"
                onClick={() => handleServiceClick(service.route)}
                role="button"
                tabIndex={0}
                aria-label={`Navigate to ${service.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleServiceClick(service.route);
                  }
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="service-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="flex justify-start text-2xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-black mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="service-feature flex items-center"
                        style={{
                          animationDelay: `${
                            index * 0.2 + featureIndex * 0.1 + 0.6
                          }s`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: "#155c94" }}
                        ></div>
                        <span className="text-black font-medium text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info Section */}
          <div className="text-center mt-12">
            <p className="text-black text-sm">
              Click on any service card to explore detailed information and get started.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
