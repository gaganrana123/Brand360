import React, { useState } from "react";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Boost your brand with expert digital marketing services—SEO, social media, PPC, content & more. Tailored strategies that drive traffic, leads & sales.",
    image: "/DigitalMarketing.jpeg",
  },
  {
    title: "ATL",
    description:
      "Maximize reach with impactful ATL strategies. TV, radio & print ads tailored to elevate your brand and connect with mass audiences.",
    image: "/ATL.jpeg",
  },
  {
    title: "OOH",
    description:
      "Boost visibility with strategic OOH ads—billboards, transit, and more. We design and place outdoor campaigns that captivate and convert on the move.",
    image: "/OOH.jpg",
  },
  {
    title: "Media Buying",
    description:
      "Maximize ROI with smart media buying. We plan and negotiate ad placements across TV, radio, digital, print & OOH for maximum reach and impact.",
    image: "/MediaBuying.jpeg",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="services"
      className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-4xl font-extrabold">WHAT WE DO</h2>
          <div className=" w-60 h-1 bg-cyan-500 mx-auto mb-4"></div>

          <p className="text-cyan-300 mt-2 text-lg sm:text-xl md:text-2xl">
            Services
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          {/* Left: Service List */}
          <div className="w-full lg:w-1/2 space-y-4">
            {services.map((service, index) => (
              <div key={index}>
                <div
                  className={`cursor-pointer px-6 py-5 rounded-lg transition-all duration-300 border border-white/10 hover:border-white backdrop-blur-md ${
                    index === activeIndex
                      ? "bg-white text-black shadow-lg"
                      : "hover:bg-white/10"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-semibold">
                      {service.title}
                    </span>
                    {index === activeIndex && (
                      <p className="mt-2 text-sm sm:text-base text-black/80">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mobile Image - Only shown below active item on mobile */}
                {index === activeIndex && (
                  <div className="lg:hidden mt-4 flex justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full max-w-xs sm:max-w-md rounded-lg shadow-2xl object-cover transition duration-500 ease-in-out"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Image Preview (Desktop only) */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-lg shadow-2xl object-cover transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
