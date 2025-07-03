"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolioItems = [
  {
    id: 1,
    title: "Kirti Samaroha 2081– Shivam Cement",
    image: "/Shivam.png",
    link: "#",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Automobile – DEEPAL",
    image: "/Deepal.png",
    link: "#",
    gradient: "from-red-500 to-pink-600",
  },
  {
    id: 3,
    title: "Automobile – Dongfeng Nammi",
    image: "/Nami.png",
    link: "#",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Beauty Pageant –  Miss Universe Nepal ",
    image: "/MUN.png",
    link: "#",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    id:5,
    title: "Social Event – नागरिक नायक 2082",
    image: "/Media.png",
    link: "#",
    gradient: "from-orange-500 to-yellow-500",
  },
];

export default function OurWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Update navigation after swiper initialization
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // Check if navigation exists on the swiper instance
      if (swiperInstance.navigation) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [swiperInstance]);

  return (
    <section id="portfolio" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Work</h2>
          <div className=" w-40 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Explore our latest projects and creative solutions
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            navigation={{
              prevEl: null, // Will be set later
              nextEl: null, // Will be set later
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              // Set navigation elements immediately if refs are available
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                if (swiper.navigation) {
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-16"
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className=" bg-neutral-2 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}
                    />
                    <div className="w-full h-48 flex items-center justify-center bg-gray-50">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="max-h-full max-w-full object-scale-down transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <a
                        href={item.link}
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200"
                        aria-label={`View ${item.title} project`}
                      >
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-cyan-50 hover:border-cyan-200 transition-all duration-200 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-cyan-600" />
          </button>

          <button
            ref={nextRef}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-cyan-50 hover:border-cyan-200 transition-all duration-200 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-cyan-600" />
          </button>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-gray-600">
            <span className="font-semibold text-gray-900">
              {activeIndex + 1}
            </span>{" "}
            / {portfolioItems.length}
          </div>
        </div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 1rem;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #06b6d4;
          transform: scale(1.2);
        }

        .swiper-pagination-bullet:hover {
          background: #0891b2;
        }
      `}</style>
    </section>
  );
}
