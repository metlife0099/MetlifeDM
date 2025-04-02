import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHammer,
  FaBuilding,
  FaPaintRoller,
  FaHome,
  FaShieldAlt,
  FaFileContract,
  FaQuestionCircle,
  FaBlog,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white !py-12 !mt-12">
      <div className="container mx-auto !px-4 lg:!px-8">
        {/* Grid for Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 !mb-8">
          {/* First Column: Logo, Description, and Social Media Icons */}
          <div className="!space-y-4">
            <h2>Metlife Dm</h2>
            <p className="text-white">
              Your trusted partner for construction, remodeling, and property management services.
            </p>
            <div className="flex !space-x-4">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#5c7c3b] transition-all transform hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#5c7c3b] transition-all transform hover:scale-110"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#5c7c3b] transition-all transform hover:scale-110"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#5c7c3b] transition-all transform hover:scale-110"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Second Column: Services */}
          <div className="!space-y-4">
            <h3 className="text-xl font-semibold text-[#5c7c3b]">Quick Links</h3>
            <span className="block w-[100px] h-[4px] bg-[#5c7c3b] !my-3"></span>
            <ul className="!space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-[#5c7c3b] transition-all flex items-center !space-x-2"
                >
                  <FaHammer className="w-4 h-4 text-[#5c7c3b]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-[#5c7c3b] transition-all flex items-center !space-x-2"
                >
                  <FaHome className="w-4 h-4 text-[#5c7c3b]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white hover:text-[#5c7c3b] transition-all flex items-center !space-x-2"
                >
                  <FaPaintRoller className="w-4 h-4 text-[#5c7c3b]" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-[#5c7c3b] transition-all flex items-center !space-x-2"
                >
                  <FaBuilding className="w-4 h-4 text-[#5c7c3b]" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column: Important Links */}
          <div className="!space-y-4">
            <h3 className="text-xl font-semibold text-[#5c7c3b]">Important Links</h3>
            <span className="block w-[100px] h-[4px] bg-[#5c7c3b] !my-3"></span>
            <ul className="!space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white hover:text-[#5c7c3b] transition-all flex items-center !space-x-2"
                >
                  <FaShieldAlt className="w-4 h-4 text-[#5c7c3b]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-white hover:text-[#5c7c3b] transition-all flex items-center !space-x-2"
                >
                  <FaFileContract className="w-4 h-4 text-[#5c7c3b]" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white hover:text-[#5c7c3b] transition-all flex items-center !space-x-2"
                >
                  <FaQuestionCircle className="w-4 h-4 text-[#5c7c3b]" />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white hover:text-[#5c7c3b] transition-all flex items-center !space-x-2"
                >
                  <FaBlog className="w-4 h-4 text-[#5c7c3b]" />
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column: Contact Info */}
          <div className="!space-y-4">
            <h3 className="text-xl font-semibold text-[#5c7c3b]">Contact Info</h3>
            <span className="block w-[100px] h-[4px] bg-[#5c7c3b] !my-3"></span>
            <ul className="!space-y-4">
              <li className="flex items-center !space-x-3">
                <FaPhoneAlt className="text-[#5c7c3b] w-5 h-5" />
                <span className="text-white">+17862109819</span>
              </li>
              <li className="flex items-center !space-x-3">
                <FaEnvelope className="text-[#5c7c3b] w-5 h-5" />
                <span className="text-white">letsbuit@ar.miami</span>
              </li>
              <li className="flex items-center !space-x-3">
                <FaMapMarkerAlt className="text-[#5c7c3b] w-5 h-5" />
                <span className="text-white">1717 N bayshore dr , #108 miami FL 33132</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#5c7c3b] !pt-8 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Metlife DM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;