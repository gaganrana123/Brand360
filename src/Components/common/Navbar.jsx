import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Clientele", href: "/clientele" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about-us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`bg-gradient-to-r from-blue-900/80 to-purple-800/80 backdrop-blur-md text-white shadow-lg border-b border-white/10 sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-xl hover:scale-105 transition-all duration-300 ease-out">
            <img
              src="/logo.png"
              alt="Brand 360"
              className={`h-14 drop-shadow-2xl hover:drop-shadow-purple-500/25 transition-all duration-300 ${scrolled ? "h-12" : "h-14"}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsOpen(false)}></div>

        {/* Sidebar */}
        <div ref={sidebarRef} className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 relative h-full">
            <button className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 z-50" onClick={() => setIsOpen(false)}>
              <X size={24} className="text-black" />
            </button>

            <div className="mt-10 space-y-1 overflow-y-auto">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block px-4 py-3 rounded-xl text-black relative group hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
              <p className="text-gray-400 text-xs text-center">Brand 360 © {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}