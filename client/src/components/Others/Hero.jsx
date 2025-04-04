import React from 'react';

const Hero = ({serviceHero, contactHero, FAQHero}) => {
  const heroContent = serviceHero || contactHero || FAQHero;
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-[80vh] bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-105"
        style={{ backgroundImage: `url(${heroContent?.HeroImage})` }}
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center !px-5 lg:!px-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#5c7c3b] font-bold !mb-4">
          {heroContent?.title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-5xl mx-auto">
          {heroContent?.description}
        </p>
      </div>
    </section>
  );
};

export default Hero;