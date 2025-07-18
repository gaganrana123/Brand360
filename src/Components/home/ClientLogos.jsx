import React from "react";

const ClientLogos = () => {
  const clientsleft = [
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
  ];
   const clientsright = [
  
    { src: "/13.png" },
    { src: "/14.png" },
    { src: "/15.png" },
    { src: "/16.png" },
    { src: "/17.png" },
    { src: "/18.png" },
    { src: "/19.png" },
    { src: "/20.png" },
    { src: "/21.png" },
    { src: "/22.png" },
    { src: "/23.png" },
    { src: "/24.png" },
  ];

  const repeatedClientstop = [...clientsleft] 
  const repeatedClientsbuttom = [...clientsright]
  return (
    <div className="py-10 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-2">
        <h1 className="text-4xl sm:text-3xl font-extrabold text-gray-900">OUR TRUSTED PARTNER</h1>
        <div className=" w-80 h-1 bg-cyan-500 mx-auto my-3"></div>
      
      </div>

      {/* Top Row */}
      <div className="overflow-hidden mb-6">
        <div className="flex gap-2 animate-marquee min-w-[200%]">
          {repeatedClientstop.map((client, index) => (
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

      {/* Bottom Row */}
      <div className="overflow-hidden">
        <div className="flex gap-2 animate-marquee-reverse min-w-[200%]">
          {repeatedClientsbuttom.map((client, index) => (
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
