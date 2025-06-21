"use client"

export default function Hero() {
  const styles = {
    fadeInLeft: {
      animation: "fadeInLeft 1s ease-out",
    },
    fadeInRight: {
      animation: "fadeInRight 1s ease-out 0.3s both",
    },
    slideDown: {
      animation: "slideDown 0.8s ease-out 0.5s both",
    },
    slideUp: {
      animation: "slideUp 0.8s ease-out both",
    },
    slideRight: {
      animation: "slideRight 20s linear infinite",
    },
    float: {
      animation: "float 4s ease-in-out infinite",
    },
    gradient: {
      backgroundSize: "200% 200%",
      animation: "gradient 3s ease infinite",
    },
    bounceSlow: {
      animation: "bounceSlow 3s ease-in-out infinite",
    },
    pingSlow: {
      animation: "pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
  }

  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100vw);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pingSlow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .hero-button {
          transition: all 0.3s ease;
        }

        .hero-button:hover {
          transform: scale(1.05);
        }

        .hero-button-arrow {
          transition: transform 0.3s ease;
        }

        .hero-button:hover .hero-button-arrow {
          transform: translateX(4px);
        }
      `}</style>

      <div
        className="relative min-h-screen bg-gradient-to-br overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #155c94 0%, #1e6ba8 50%, #2980b9 100%)",
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              animation: "pulse 2s infinite",
            }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-2xl"
            style={{
              backgroundColor: "rgba(21, 92, 148, 0.3)",
              ...styles.bounceSlow,
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              ...styles.pingSlow,
            }}
          ></div>

          {/* Geometric patterns */}
          <div className="absolute bottom-0 left-0 w-full h-32" style={{ opacity: 0.2 }}>
            <div className="flex space-x-4" style={styles.slideRight}>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 transform rotate-45"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    animation: `pulse 2s infinite ${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Hero Image Section */}
          <div className="flex-1 flex justify-center lg:justify-start mb-12 lg:mb-0" style={styles.fadeInLeft}>
            <div className="relative">
              {/* Glowing effect behind image */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl"
                style={{
                  background: "linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(21, 92, 148, 0.3))",
                  transform: "scale(1.1)",
                  animation: "pulse 3s infinite",
                }}
              ></div>

              {/* Main image container */}
              <div
                className="relative rounded-3xl p-6 shadow-2xl border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  ...styles.float,
                }}
              >
                <img
                  src="hero2.png"
                  alt="Brand 360 - We Make Your Brand Unforgettable"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  style={{ maxWidth: "600px" }}
                />

                {/* Floating elements around the image */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                  style={{ animation: "bounce 2s infinite" }}
                >
                  <span className="text-2xl" style={{ color: "#155c94" }}>
                    🎯
                  </span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(45deg, #155c94, #2980b9)",
                    animation: "pulse 2s infinite",
                  }}
                >
                  <span className="text-xl">✨</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right lg:pl-12" style={styles.fadeInRight}>
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  color: "rgba(255, 255, 255, 0.9)",
                  ...styles.slideDown,
                }}
              >
                360° Branding Solutions
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
              Transform Your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(45deg, #ffffff, #bfdbfe)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  ...styles.gradient,
                }}
              >
                Brand Identity
              </span>
            </h1>

            <p
              className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              We create unforgettable brand experiences that resonate with your audience and drive business growth
              through innovative design and strategic thinking.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: "🎨", title: "Creative Design", delay: "0.2s" },
                { icon: "📈", title: "Brand Strategy", delay: "0.4s" },
                { icon: "🚀", title: "Digital Growth", delay: "0.6s" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl p-4 border"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    animation: `slideUp 0.8s ease-out ${item.delay} both`,
                  }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white font-semibold">{item.title}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="hero-button px-8 py-4 bg-white font-bold rounded-full shadow-lg"
                style={{ color: "#155c94" }}
              >
                <span className="flex items-center justify-center">
                  Start Your Journey
                  <svg className="ml-2 w-5 h-5 hero-button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button
                className="hero-button px-8 py-4 border-2 border-white text-white font-semibold rounded-full"
                style={{ backdropFilter: "blur(10px)" }}
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ animation: "bounce 2s infinite" }}
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <div
              className="w-1 h-3 rounded-full mt-2"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                animation: "pulse 2s infinite",
              }}
            ></div>
          </div>
          <p className="text-xs mt-2 text-center" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Scroll Down
          </p>
        </div>
      </div>
    </>
  )
}
