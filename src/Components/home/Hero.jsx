"use client";

export default function Hero() {
  return (
    <>
      <style>{`
  /* Global Animation Defaults & Overrides */
  :root {
    --animation-ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --animation-ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
    --animation-ease-in-out-sine: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  /* Fade In Left - More pronounced and smoother initial slide */
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-80px) scale(0.95); /* Increased slide, added slight scale */
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  /* Fade In Right - More pronounced and smoother initial slide */
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(80px) scale(0.95); /* Increased slide, added slight scale */
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  /* Slide Down - Smooth entry from top with subtle bounce */
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    70% {
      opacity: 1;
      transform: translateY(5px); /* Overshoot slightly for bounce */
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Slide Up - Smooth entry from bottom with subtle bounce */
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    70% {
      opacity: 1;
      transform: translateY(-5px); /* Overshoot slightly for bounce */
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Float - More organic, gentle breath-like movement */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
      box-shadow: 0 8px 15px rgba(0,0,0,0.2); /* Added subtle shadow pulse */
    }
    25% {
      transform: translateY(-12px) rotate(-1deg);
      box-shadow: 0 10px 18px rgba(0,0,0,0.25);
    }
    75% {
      transform: translateY(-8px) rotate(1deg);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }
  }

  /* Ping Slow - More controlled, softer pulse with fade */
  @keyframes pingSlow {
    0% {
      transform: scale(0.8); /* Start slightly smaller */
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1); /* Peak slightly larger */
      opacity: 0.2;
    }
    100% {
      transform: scale(1.2); /* End larger, fully faded */
      opacity: 0;
    }
  }

  /* New: Subtle Glow Pulse (for background elements) */
  @keyframes pulseGlow {
    0% {
      transform: scale(1.0);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.0);
      opacity: 0.3;
    }
  }

  /* New: Spin with Perspective (for decorative elements) */
  @keyframes spin3D {
    from {
      transform: rotateY(0deg) rotateX(0deg);
    }
    to {
      transform: rotateY(360deg) rotateX(10deg); /* Added slight X-axis rotation */
    }
  }

  /* New: Breathe (for elements that expand/contract gently) */
  @keyframes breathe {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.03);
      opacity: 0.95;
    }
  }

`}</style>
      <div className="relative min-h-screen bg-white text-black overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between min-h-screen">
          <div
            className="flex-1 flex justify-center lg:justify-start mb-12 lg:mb-0"
            style={{ animation: "fadeInLeft 1.2s ease-out forwards" }}
          >
            <div className="relative group">
              {" "}
              {/* Added group class for hover effects */}
              {/* Subtle, animated background glow */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundColor: "rgba(173, 216, 230, 0.4)",
                  transform: "scale(1.05)",
                  animation: "pulseGlow 3s infinite alternate",
                }}
              ></div>
              <div className="relative rounded-3xl p-7 shadow-2xl border border-gray-700 bg-gradient-to-br from-gray-900/50 to-black/60 backdrop-blur-xl animate-float-subtle overflow-hidden">
                {" "}
                {/* Added overflow-hidden */}
                <img
                  src="/hero2.png"
                  alt="Hero"
                  className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                  style={{ maxWidth: "600px" }}
                />
                {/* Decorative, dynamic elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-spin-slow opacity-80">
                  <span className="text-3xl text-white drop-shadow-lg">✨</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-scale-ping opacity-80">
                  <span className="text-2xl text-white drop-shadow-lg">🚀</span>
                </div>
                {/* Optional: Add a subtle overlay for extra depth */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top right, rgba(0,0,0,0.1), rgba(255,255,255,0.05))",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div
            className="flex-1 text-center lg:text-right lg:pl-12"
            style={{ animation: "fadeInRight 1s ease-out 0.3s both" }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Build an Iconic{" "}
              <span className=" text-primary">Brand Identity</span>
            </h1>

            <p className="text-xl lg:text-2xl text-black mb-8 max-w-2xl mx-auto lg:mx-0">
              We create unforgettable brand experiences through creative
              storytelling and full-scale marketing execution.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              {["Digital Marketing", "ATL", "OOH", "Media Buying"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 border bg-black backdrop-blur"
                    style={{
                      animation: `slideUp 0.8s ease-out ${0.4 + i * 0.2}s both`,
                    }}
                  >
                    <div className="text-white font-semibold flex justify-center">
                      {item}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
