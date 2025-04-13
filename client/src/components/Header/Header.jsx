import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from '../../assets/images/metlifeLogo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopHeader, setShowTopHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const topHeaderRef = useRef(null);

  const location = useLocation();

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "faq", label: "FAQ", path: "/faq" },
    { id: "pricing", label: "Pricing", path: "/pricing" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  const activeLink = navLinks.find((link) => link.path === location.pathname)?.id || "home";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Only hide top header if scrolling down more than its height
      if (currentScrollY > lastScrollY && currentScrollY > (topHeaderRef.current?.offsetHeight || 40)) {
        setShowTopHeader(false);
      } else if (currentScrollY < lastScrollY) {
        setShowTopHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Calculate dynamic top position for main header
  const mainHeaderTop = showTopHeader ? `${topHeaderRef.current?.offsetHeight || 40}px` : 0;

  return (
    <>
      {/* Top Header with ref for height measurement */}
      <div 
        ref={topHeaderRef}
        className={`top-header bg-gray-100 !py-2 transition-all duration-300 w-full ${
          showTopHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50
        }}
      >
        <div className="container !mx-auto !px-4">
          <div className="flex flex-row justify-between items-center gap-2 sm:gap-0 !mx-2">
            {/* Social Media Icons */}
            <div className="flex items-center !space-x-4 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <Link to="#" className="text-gray-600 hover:text-[#023E8A] whitespace-nowrap">
                <FaFacebook size={16} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#023E8A] whitespace-nowrap">
                <FaTwitter size={16} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#023E8A] whitespace-nowrap">
                <FaInstagram size={16} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#023E8A] whitespace-nowrap">
                <FaLinkedin size={16} />
              </Link>
            </div>
            
            {/* Contact Info and Buttons */}
            <div className="flex items-center !space-x-2 sm:!space-x-4 overflow-x-auto w-full sm:w-auto justify-end">
              <div className="hidden sm:flex items-center text-gray-700 whitespace-nowrap text-sm ">
                <FaPhone className="!mr-1 sm:!mr-2" />
                <span className="font-medium">+1 (123) 456-7890</span>
              </div>
              <Link to='tel:+17896548765'>
                <button className="bg-[#023E8A] text-white text-xs sm:text-sm !px-2 sm:!px-3 !py-1 rounded hover:bg-[#03045E] transition-colors whitespace-nowrap">
                  Call Now
                </button>
              </Link>
              <Link to='/contact'>
                <button className="bg-gray-700 text-white text-xs sm:text-sm !px-2 sm:!px-3 !py-1 rounded hover:bg-gray-800 transition-colors whitespace-nowrap">
                  Inquiry
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Positioned below top header */}
      <header
        className={`fixed w-full transition-all duration-300 bg-white shadow-md ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        style={{
          top: mainHeaderTop,
          left: 0,
          right: 0,
          zIndex: 49
        }}
      >
        <div className="container">
          <div className="flex justify-between items-center h-20 !mx-5 lg:mx-auto">
            {/* Logo */}
            <div className='w-16 h-16 flex items-center gap-1'>
              <img src={LOGO} className="w-full h-full rounded-full" alt="" />
              <h3 className="text-3xl font-bold"><span className="text-blue-600 ">Met</span>lifedm </h3>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 !flex-1 justify-center">
              {navLinks.map((link) => (
                <div key={link.id} className="relative">
                  <Link
                    to={link.path}
                    className={`px-3 py-2 font-medium flex items-center space-x-1 !text-md relative ${
                      activeLink === link.id 
                        ? "text-[#023E8A]" 
                        : "text-black hover:text-[#023E8A]"
                    }`}
                  >
                    <span>{link.label}</span>
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
              <Link to='/contact' className="bg-[#023E8A] text-white rounded-md hover:bg-[#03045E] transition-colors cursor-pointer !py-2 !px-4">
                Get Free Quotes
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center justify-center lg:hidden">
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
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
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
    </>
  );
};

export default Header;