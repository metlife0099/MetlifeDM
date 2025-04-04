import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const servicesLinkRef = useRef(null); // Ref to track the "Services" navlink

  const location = useLocation(); // Get current location

  // Define navLinks before using it
  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "faq", label: "FAQ", path: "/faq" },
    { id: "project", label: "Project", path: "/projects" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  // Determine the active link based on the current path
  const activeLink = navLinks.find((link) => link.path === location.pathname)?.id || "home";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesExpanded(!isServicesExpanded);
  };

  // Close mobile menu when a navlink is clicked
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesExpanded(false); // Also close the services dropdown if open
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 bg-white shadow-md`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-16 !mx-5 lg:mx-auto">
          {/* Logo */}
          <div className={`text-2xl sm:text-3xl font-bold ${
            isScrolled ? "text-black" : "text-[#023E8A]"
          }`}>
            MetLife DM
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 !flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.dropdown && setIsServicesHovered(true)}
                onMouseLeave={() => link.dropdown && setIsServicesHovered(false)}
                ref={link.dropdown ? servicesLinkRef : null} // Attach ref to "Services" navlink
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 font-medium flex items-center space-x-1 !text-md relative ${
                    activeLink === link.id ? "text-[#023E8A]" : isScrolled ? "text-black hover:text-[#023E8A]" : "text-black hover:text-[#023E8A]"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Sliding Underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#023E8A] transform origin-left transition-transform duration-300 ${
                      activeLink === link.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Get Free Quotes Button */}
          <div className="hidden lg:block">
            <button className="bg-[#023E8A] text-white rounded-md hover:bg-[#03045E] transition-colors cursor-pointer !py-2 !px-4">
              Get Free Quotes
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-center lg:hidden ">
            <button onClick={toggleMenu} className="text-[#023E8A] focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4 ">
            <button onClick={toggleMenu} className="text-[#023E8A] focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start h-full !space-y-2 !px-6 !py-3 !mt-[90px] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.id} className="w-full border-b border-gray-200">
                  <Link
                    to={link.path}
                    className={`!px-3 !py-4 text-lg font-medium relative block ${
                      activeLink === link.id
                        ? "text-[#023E8A]"
                        : "text-gray-800 hover:text-[#023E8A]"
                    }`}
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </Link>
              </div>
            ))}
            <button className="bg-[#023E8A] text-white !px-6 !py-3 rounded-md hover:bg-orange-700 transition-colors !mt-6">
              Get Free Quotes
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;