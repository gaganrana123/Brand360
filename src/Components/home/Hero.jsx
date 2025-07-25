import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-neutral-900 text-white overflow-hidden">
      {/* Background Image (Blurred + Dark Overlay) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cover.png"
          alt="Background"
          className="w-full h-full object-cover object-top brightness-75"
        />
        
      </div>

      {/* Hero Content */}
      <section id="about-hero">
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-20 lg:py-32 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-5 py-2 bg-white/50 backdrop-blur-sm text-primary rounded-full text-sm font-semibold mb-6">
          Brand Three Sixty Pvt. Ltd.
        </div>

      </div>
      </section>
    </section>
  );
}
