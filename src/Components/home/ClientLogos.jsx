import React from "react";

const ClientLogos = () => {
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

  const repeatedClients = [...clients, ...clients]; // duplicate for smooth scrolling

  return (
    <div className="py-10 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-primary">OUR CLIENTS</h1>
        <div className="w-40 h-1 bg-cyan-500 mx-auto my-3"></div>
        <p className="text-xl text-text">Partners</p>
      </div>

      {/* Top Row (Left to Right) */}
      <div className="overflow-hidden mb-0">
        <div className="flex gap-16 animate-marquee min-w-[200%]">
          {repeatedClients.map((client, index) => (
            <div
              key={`top-${index}`}
              className="flex justify-center items-center min-w-[200px] h-[160px]"
            >
              <img
                src={client.src}
                alt={`Client ${index + 1}`}
                className="w-60 h-60 object-contain transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row (Right to Left) */}
      <div className="overflow-hidden">
        <div className="flex gap-16 animate-marquee-reverse min-w-[200%]">
          {repeatedClients.map((client, index) => (
            <div
              key={`bottom-${index}`}
              className="flex justify-center items-center min-w-[200px] h-[160px]"
            >
              <img
                src={client.src}
                alt={`Client ${index + 1}`}
                className="w-60 h-60 object-contain transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
