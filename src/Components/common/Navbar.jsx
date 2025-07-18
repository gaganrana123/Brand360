import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainMenuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Trusted Partners", href: "#clientele-container", isSpecial: true },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === "/") {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#footer");
    }
  };

  const handleClienteleClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === "/") {
      document.getElementById("clientlogos")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#clientlogos");
    }
  };

  // NEW FUNCTION: Scroll to top of page when navigating
  const handlePageNavigation = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === href) {
      // Already on the page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to new page and scroll to top after load
      navigate(href);
    }
  };

  // Scroll to top after page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Sticky Wrapper for Info Bar + Navbar */}
      <div className="sticky top-0 z-50">
        {/* Top Info Bar */}
        <div className="bg-primary text-white text-sm py-2 px-4 flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-4 h-4 rounded-full bg-cyan-100"></span>
            <span>Welcome To Brand Three Sixty Pvt. Ltd.</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-sm space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-1">
              <span className="text-cyan-300">📧</span>
              <a href="mailto:brand360pvtltd@gmail.com" className="hover:underline">
                brand360pvtltd@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-cyan-300">📞</span>
              <a href="tel:9705008833" className="hover:underline">9705008833</a>,{" "}
              <a href="tel:9851096610" className="hover:underline">9851096610</a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className={`bg-white transition-all ${scrolled ? "py-3 shadow-md" : "py-4"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="font-bold text-xl hover:scale-105 transition-all duration-300 ease-out"
                onClick={(e) => handlePageNavigation(e, "/")}
              >
                <img
                  src="/bluelogo.png"
                  alt="Brand 360"
                  className={`h-14 drop-shadow-2xl hover:drop-shadow-purple-500/25 transition-all duration-300 ${
                    scrolled ? "h-12" : "h-14"
                  }`}
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center flex-1 justify-between">
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center space-x-6">
                    {mainMenuItems.map((item, index) =>
                      item.name === "Trusted Partners" ? (
                        <button
                          key={index}
                          onClick={handleClienteleClick}
                          className="relative px-4 py-2 text-black transition-all duration-300 group"
                        >
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                        </button>
                      ) : (
                        <Link
                          key={index}
                          to={item.href}
                          className="relative px-4 py-2 text-black transition-all duration-300 group"
                          onClick={(e) => handlePageNavigation(e, item.href)}
                        >
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/70 transition-colors text-left">
                  <button onClick={handleContactClick} className="w-full text-left">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X size={28} className="text-black" />
                ) : (
                  <Menu size={28} className="text-black" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          ref={sidebarRef}
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 relative h-full">
            <button
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 z-50"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} className="text-black" />
            </button>

            <div className="mt-10 space-y-1 overflow-y-auto">
              {mainMenuItems.map((item, index) =>
                item.name === "Trusted Partners" ? (
                  <button
                    key={index}
                    onClick={handleClienteleClick}
                    className="block w-full px-4 py-3 rounded-xl text-black relative group hover:bg-gray-50 transition-colors text-left"
                  >
                    {item.name}
                    <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></span>
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-3 rounded-xl text-black relative group hover:bg-gray-50 transition-colors"
                    onClick={(e) => handlePageNavigation(e, item.href)}
                  >
                    {item.name}
                    <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></span>
                  </Link>
                )
              )}

              <button
                onClick={handleContactClick}
                className="block w-full px-4 py-3 rounded-xl text-white relative group bg-primary hover:bg-primary/70 transition-colors text-left"
              >
                Contact Us
                <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </button>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
              <p className="text-gray-400 text-xs text-center">
                Brand 360 © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}