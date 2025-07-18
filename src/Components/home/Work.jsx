"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolioItems = [
  { id: 1, image: "/p1.jpg", link: "#" },
  { id: 2, image: "/p2.jpg", link: "#" },
  { id: 3, image: "/p3.jpg", link: "#" },
  { id: 4, image: "/p4.jpg", link: "#" },
  { id: 5, image: "/p5.png", link: "#" },
  { id: 6, image: "/p6.png", link: "#" },
  { id: 7, image: "/p7.png", link: "#" },
];

export default function OurWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      if (swiperInstance.navigation) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [swiperInstance]);

  return (
    <section id="portfolio" className="py-2 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Work</h2>
          <div className="w-28 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-black mt-2 text-l sm:text-l md:text-xl">Explore our latest projects and creative solutions</p>
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
            navigation={{ prevEl: null, nextEl: null }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
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
            className="pb-2"
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <a href={item.link}>
                    <div className="w-full h-64 overflow-hidden bg-gray-100">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`Portfolio ${item.id}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

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

          <div className="text-center text-gray-600">
            <span className="font-semibold text-gray-900">{activeIndex + 1}</span> /{" "}
            {portfolioItems.length}
          </div>
        </div>
      </div>

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
