import React, { useState, useEffect } from "react";

const ClientLogos = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clients = [
    { src: "/1.png" },
    { src: "/2.png" },
    { src: "/3.png" },
    { src: "/4.png" },
    { src: "/5.png" },
    { src: "/6.png" },
    { src: "/7.png" },
    { src: "/8.png" },
    { src: "/9.png" },
    { src: "/10.png" },
    { src: "/11.png" },
    { src: "/12.png" },
    { src: "/13.png" },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto bg-gray-100 shadow-lg rounded-xl p-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-4xl font-extrabold">OUR CLIENTS</h1>
          <div className=" w-60 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-primary mt-2 text-2xl">Partners</p>
        </div>

        {/* Logo Grid - Increased image size */}
        <div className="max-w-8xl mx-auto px-2 sm:px-2 lg:px-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols- items-center justify-center gap-y-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-40 sm:h-48 md:h-56"
              >
                <img
                  src={client.src}
                  alt={`Client ${index + 1}`}
                  className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;