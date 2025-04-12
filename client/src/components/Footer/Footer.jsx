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
import LOGO from '../../assets/images/metlifeLogo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white !py-12 !mt-12">
      <div className="container mx-auto !px-4 lg:!px-8">
        {/* Grid for Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 !mb-8">
          {/* First Column: Logo, Description, and Social Media Icons */}
          <div className="!space-y-4">
            <div className=''>
              <img src={LOGO} className="w-28 h-28 rounded-full" alt="" />
            </div>
            <p className="text-white">
              Ready to Grow with Metlifedm LLC?
              Based in the U.S., Serving the Nation
            </p>
            <div className="flex !space-x-4">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-all transform hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-all transform hover:scale-110"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-all transform hover:scale-110"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-all transform hover:scale-110"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Second Column: Services */}
          <div className="!space-y-4">
            <h3 className="text-xl font-semibold text-blue-500">Quick Links</h3>
            <span className="block w-[100px] h-[4px] bg-blue-500 !my-3"></span>
            <ul className="!space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-500 transition-all flex items-center !space-x-2"
                >
                  <FaHammer className="w-4 h-4 text-blue-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-blue-500 transition-all flex items-center !space-x-2"
                >
                  <FaHome className="w-4 h-4 text-blue-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white hover:text-blue-500 transition-all flex items-center !space-x-2"
                >
                  <FaPaintRoller className="w-4 h-4 text-blue-500" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-500 transition-all flex items-center !space-x-2"
                >
                  <FaBuilding className="w-4 h-4 text-blue-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column: Important Links */}
          <div className="!space-y-4">
            <h3 className="text-xl font-semibold text-blue-500">Important Links</h3>
            <span className="block w-[100px] h-[4px] bg-blue-500 !my-3"></span>
            <ul className="!space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white hover:text-blue-500 transition-all flex items-center !space-x-2"
                >
                  <FaShieldAlt className="w-4 h-4 text-blue-500" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-white hover:text-blue-500 transition-all flex items-center !space-x-2"
                >
                  <FaFileContract className="w-4 h-4 text-blue-500" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white hover:text-blue-500 transition-all flex items-center !space-x-2"
                >
                  <FaQuestionCircle className="w-4 h-4 text-blue-500" />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white hover:text-blue-500 transition-all flex items-center !space-x-2"
                >
                  <FaBlog className="w-4 h-4 text-blue-500" />
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column: Contact Info */}
          <div className="!space-y-4">
            <h3 className="text-xl font-semibold text-blue-500">Contact Info</h3>
            <span className="block w-[100px] h-[4px] bg-blue-500 !my-3"></span>
            <ul className="!space-y-4">
              <li className="flex items-center !space-x-3">
                <FaPhoneAlt className="text-blue-500 w-5 h-5" />
                <span className="text-white">+17862109819</span>
              </li>
              <li className="flex items-center !space-x-3">
                <FaEnvelope className="text-blue-500 w-5 h-5" />
                <span className="text-white">letsbuit@ar.miami</span>
              </li>
              <li className="flex items-center !space-x-3">
                <FaMapMarkerAlt className="text-blue-500 w-5 h-5" />
                <span className="text-white">1717 N bayshore dr , #108 miami FL 33132</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-500 !pt-8 text-center">
          <p className="text-white">
            &copy; 2025 Metlifedm LLC – Digital Marketing Experts for U.S. Businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;