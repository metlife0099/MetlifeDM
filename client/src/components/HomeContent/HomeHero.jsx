import React, { useState, useEffect, useCallback, useRef } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image1 from '../../assets/images/banner1.webp';
import Image2 from '../../assets/images/banner2.webp';
import Image3 from '../../assets/images/banner3.webp';
import { Link } from "react-router-dom";

const SLIDE_INTERVAL = 5000;

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const images = [
    {
      src: Image1,
      slogan: "Digital Marketing That Drives Results",
      heading2: "Grow Your Business with Our Proven Digital Strategies",
      description: "From SEO to social media marketing, we create campaigns that increase visibility, engagement, and conversions for your business.",
      buttonText: "Explore Services",
      buttonLink: "/services"
    },
    {
      src: Image2,
      slogan: "Comprehensive Digital Solutions",
      heading2: "All-In-One Digital Marketing Services with Custom Packages",
      description: "Our tailored packages include Web Dev, SEO, PPC, content marketing, and social media management - all designed to maximize your online presence.",
      buttonText: "View Pricing",
      buttonLink: "/pricing"
    },
    {
      src: Image3,
      slogan: "Data-Driven Marketing Success",
      heading2: "Measurable Results with Advanced Analytics",
      description: "We don't just create campaigns - we track, analyze, and optimize every aspect to ensure maximum ROI for your marketing dollars.",
      buttonText: "Get Started",
      buttonLink: "/contact"
    },
  ];

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  }, [images.length]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleSlideChange = useCallback((index) => {
    setIsAutoPlaying(false);
    goToSlide(index);
    // Restart autoplay after slide change
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setTimeout(() => setIsAutoPlaying(true), SLIDE_INTERVAL);
  }, [goToSlide]);

  const handleArrowClick = useCallback((direction) => {
    setIsAutoPlaying(false);
    if (direction === 'prev') {
      goToPreviousSlide();
    } else {
      goToNextSlide();
    }
    // Restart autoplay after manual navigation
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setTimeout(() => setIsAutoPlaying(true), SLIDE_INTERVAL);
  }, [goToNextSlide, goToPreviousSlide]);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(goToNextSlide, SLIDE_INTERVAL);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isAutoPlaying, goToNextSlide]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative !pt-5">
      <div className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden relative">
        <div
          className="relative w-full h-full !mt-0 md:!mt-10 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative overflow-hidden"
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Content Overlay with better mobile padding */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <div className="text-center px-4 sm:px-6 max-w-[90%] sm:max-w-[700px]">
                  <p className="text-sm sm:text-lg md:text-xl font-bold text-white !mb-2 text-textColor">
                    {image.slogan}
                  </p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 !mb-3 sm:!mb-5">
                    {image.heading2}
                  </h1>
                  <p className="!mb-6 sm:!mb-8 text-xs sm:text-sm md:text-base text-white">
                    {image.description}
                  </p>
                  <Link
                    to={image.buttonLink}
                    className="inline-block bg-transparent border-2 border-solid border-white hover:bg-green-300 hover:text-white transition-all font-bold rounded-xl py-2 px-4 sm:py-2 sm:px-5 text-white text-sm sm:text-base"
                  >
                    {image.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - larger tap targets for mobile */}
      <button
        onClick={() => handleArrowClick('prev')}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 cursor-pointer text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        aria-label="Previous slide"
      >
        <MdOutlineKeyboardArrowLeft size={24} className="sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={() => handleArrowClick('next')}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 cursor-pointer text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        aria-label="Next slide"
      >
        <MdOutlineKeyboardArrowRight size={24} className="sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators - larger for mobile */}
      <div className="flex justify-center items-center absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 focus:outline-none ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHero;