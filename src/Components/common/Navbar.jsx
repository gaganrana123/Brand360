import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items - Clientele will have special behavior
  const mainMenuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Clientele", href: "#clientele-container", isSpecial: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about-us" },
  ];

  // Function to handle Contact Us click
  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === "/") {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#footer");
    }
  };

  // Function to handle Clientele click
  const handleClienteleClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === "/") {
      const clienteleContainer = document.getElementById("clientlogos");
      if (clienteleContainer) {
        clienteleContainer.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#clientlogos");
    }
  };

  // Helper function to scroll to footer
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper function to scroll to clientele container
  const scrollToClientele = () => {
    const clienteleContainer = document.getElementById("clientlogos");
    if (clienteleContainer) {
      clienteleContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle hash changes for both footer and clientele
  useEffect(() => {
    if (location.hash === "#footer") {
      setTimeout(scrollToFooter, 50);
    } else if (location.hash === "#clientlogos") {
      setTimeout(scrollToClientele, 50);
    }
  }, [location.hash]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all ${
        scrolled ? "py-3 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="font-bold text-xl hover:scale-105 transition-all duration-300 ease-out"
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
            {/* Centered main menu items */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-6">
                {mainMenuItems.map((item, index) => (
                  item.name === "Clientele" ? (
                    // Special handling for Clientele
                    <button
                      key={index}
                      onClick={handleClienteleClick}
                      className="relative px-4 py-2 text-black transition-all duration-300 group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  ) : (
                    // Regular menu items
                    <Link
                      key={index}
                      to={item.href}
                      className="relative px-4 py-2 text-black transition-all duration-300 group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  )
                ))}
              </div>
            </div>
            
            {/* Contact Us button on the right */}
            <div className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/70 transition-colors text-left">
              <button
                onClick={handleContactClick}
                className="w-full text-left"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar */}
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
              {/* Main menu items */}
              {mainMenuItems.map((item, index) => (
                item.name === "Clientele" ? (
                  // Special handling for Clientele in mobile
                  <button
                    key={index}
                    onClick={handleClienteleClick}
                    className="block w-full px-4 py-3 rounded-xl text-black relative group hover:bg-gray-50 transition-colors text-left"
                  >
                    {item.name}
                    <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></span>
                  </button>
                ) : (
                  // Regular menu items
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-3 rounded-xl text-black relative group hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></span>
                  </Link>
                )
              ))}
              
              {/* Contact Us item */}
              <button
                onClick={handleContactClick}
                className="block w-full px-4 py-3 rounded-xl text-white relative group bg-primary hover:bg-primary/70 transition-colors text-left"
              >
                Contact Us
                <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </button>
            </div>

            {/* Mobile Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
              <p className="text-gray-400 text-xs text-center">
                Brand 360 © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}