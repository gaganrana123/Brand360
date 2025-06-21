import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);

  const servicesOptions = [
    { label: "Digital Marketing", href: "/servicescomponents/digital-marketing" },
    { label: "ATL", href: "/servicescomponents/atl" },
    { label: "OOH", href: "/servicescomponents/ooh" },
    { label: "Media Buying", href: "/servicescomponents/media-buying" },
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

  return (
    <nav
      className={`bg-gradient-to-r from-primary via-purple-900 to-primary bg-opacity-95 text-white shadow-2xl border-b border-white/10 sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="font-bold text-xl hover:scale-105 transition-all duration-300 ease-out">
            <img
              src="/logo.png"
              alt="Brand 360"
              className={`h-14 drop-shadow-2xl hover:drop-shadow-purple-500/25 transition-all duration-300 ${scrolled ? "h-12" : "h-14"}`}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <button className="flex items-center px-4 py-2 text-white/90 hover:text-white transition-all duration-300 group">
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </button>

              <div className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${isDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
                {servicesOptions.map((option, index) => (
                  <a key={index} href={option.href} className="block px-6 py-4 text-black hover:text-black hover:bg-gray-100 transition-all duration-300 first:rounded-t-2xl last:rounded-b-2xl relative group">
                    {option.label}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                  </a>
                ))}
              </div>
            </div>

            {["Clientele", "Team", "Portfolio", "About Us"].map((item, i) => (
              <a
                key={i}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
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
              <a href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-black relative group">
                Home
                <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></span>
              </a>

              {/* Services Section Mobile */}
              <div className="px-4 py-3">
                <div className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wider">Services</div>
                <div className="pl-4 space-y-1">
                  {servicesOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-lg text-black relative group"
                    >
                      {option.label}
                      <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-2/3 transition-all duration-300"></span>
                    </a>
                  ))}
                </div>
              </div>

              {["Team", "Portfolio", "About Us"].map((item, i) => (
                <a
                  key={i}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-black relative group"
                >
                  {item}
                  <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
              <p className="text-gray-400 text-xs text-center">Brand 360 © 2025</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
