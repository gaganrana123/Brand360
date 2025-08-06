export default function Hero() {
  return (
    <div className=" min-h-fit bg-gradient-to-b from-gray-50 to-gray-100 text-black">
      {/* Hero Content */}
      <section className="relative min-h-[70vh] bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                {/* Blue accent line */}
                <div className="w-64 h-1 bg-primary"></div>

                {/* Main heading matching the design */}
                <div >
                  <h1 className="text-4xl md:text-4xl lg:text-4xl font-black leading-tight">
                    <div className="text-black">We are a</div>
                    <div className="text-primary">Full-service advertising</div>
                      <span className="text-primary"> & event management</span>{" "}
                      <div>
                      <span className="text-primary">agency</span>{" "}
                      <span className="text-black">based in Lalitpur</span>
                    </div>
                  </h1>
                </div>

                {/* Blue banner for tagline */}
                <div className="bg-primary  text-white px-6 py-4 inline-block">
                  <p className="text-lg md:text-xl font-bold">WE MAKE YOUR BRAND UNFORGETTABLE!</p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="hero.png"
                    alt="Advertising and event management team collaboration"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
