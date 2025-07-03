export default function Hero() {
  return (
    <section className=" py-10 lg:py-16 bg-neutral-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-primary rounded-full text-sm font-medium mb-8">
            Brand Three Sixty
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Build an Iconic{" "}
            <span className="text-primary"> Brand Identity</span>
          </h1>

          <p className="text-xl text-text/70 mb-8 max-w-3xl mx-auto">
            We create unforgettable brand experiences through creative
            storytelling and full-scale marketing execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center">
              Digital Marketing
            </button>
            <button className="border-2 border-neutral-1 text-text px-8 py-4 rounded-full text-lg font-semibold hover:bg-neutral-1 transition-colors">
              ATL
            </button>
            <button className="border-2 border-neutral-1 text-text px-8 py-4 rounded-full text-lg font-semibold hover:bg-neutral-1 transition-colors">
              OOH
            </button>
            <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center">
              Media Buying
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
