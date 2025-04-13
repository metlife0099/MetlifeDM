import React from "react";
import { FaBolt, FaChartBar, FaMagic, FaRocket } from "react-icons/fa";

const AboutUsContent = () => {
  const features = [
    {
      icon: <FaBolt className="!text-blue-500 !text-4xl" />,
      title: "High-Octane Strategies",
      desc: "Cutting-edge tactics that deliver immediate impact"
    },
    {
      icon: <FaChartBar className="!text-blue-500 !text-4xl" />,
      title: "Data-Driven Results",
      desc: "Metrics-focused campaigns that prove ROI"
    },
    {
      icon: <FaMagic className="!text-blue-500 !text-4xl" />,
      title: "Creative Powerhouse",
      desc: "Bold ideas that break through the noise"
    },
    {
      icon: <FaRocket className="!text-blue-500 !text-4xl" />,
      title: "Rapid Execution",
      desc: "From concept to conversion at lightning speed"
    }
  ];

  return (
    <section className="relative !bg-gradient-to-br !from-gray-50 !to-gray-100 !overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute !inset-0 !opacity-20">
        <div className="absolute !top-0 !left-20 !w-64 !h-64 !bg-blue-300 !rounded-full !mix-blend-multiply !filter !blur-3xl !opacity-40 !animate-blob"></div>
        <div className="absolute !top-0 !right-20 !w-64 !h-64 !bg-purple-300 !rounded-full !mix-blend-multiply !filter !blur-3xl !opacity-40 !animate-blob !animation-delay-2000"></div>
        <div className="absolute !bottom-0 !left-1/2 !w-64 !h-64 !bg-pink-300 !rounded-full !mix-blend-multiply !filter !blur-3xl !opacity-40 !animate-blob !animation-delay-4000"></div>
      </div>

      <div className="relative container !px-4 sm:!px-6 lg:!px-8 !py-20 md:!py-8">
        {/* Slogan */}
        <div className="!text-center !mb-16">
          <h2 className="!text-base !font-semibold !text-blue-500 !tracking-wider !uppercase !mb-4">
            Electrifying Digital Growth
          </h2>
          <h1 className="!text-4xl md:!text-6xl !font-bold !text-gray-900 !mb-6">
            Welcome to <span className="!text-blue-500">Metlifedm LLC</span>
          </h1>
          <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
            Where high energy meets high conversion, and your business growth isn't just a goal—it's our obsession!
          </p>
        </div>

        {/* Main content with animated reveal */}
        <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-16 !items-center !mb-24">
          <div className="!space-y-8">
            <div className="!space-y-6">
              <h3 className="!text-2xl !font-bold !text-gray-900">
                Tired of watching your digital presence flatline while competitors steal the spotlight?
              </h3>
              <p className="!text-lg !text-gray-600 !leading-relaxed">
                Frustrated by marketing efforts that drain your budget but deliver zero buzz, zero leads, and zero results? We get it. The pain is real—wasted time, shrinking ROI, and that sinking feeling of being left behind in a fast-moving digital world.
              </p>
              <p className="!text-lg !text-blue-500 !font-semibold">
                But here's the kicker: it doesn't have to be that way.
              </p>
            </div>
          </div>
          
          <div className="!relative">
            <div className="absolute !-inset-4 !bg-gradient-to-r !from-blue-400 !to-purple-500 !rounded-xl !opacity-25 !filter !blur-lg"></div>
            <div className="!relative !bg-white !rounded-xl !p-8 !h-full !shadow-xl">
              <h3 className="!text-2xl !font-bold !text-gray-900 !mb-6">
              We’re not your typical agency —  <span className="text-blue-600"> We’re Metlifedm</span>.
              </h3>
              <p className="!text-gray-600 !leading-relaxed !mb-6">
                At Metlifedm LLC, we're a team of relentless innovators, data-driven strategists, and creative powerhouses who live for one thing: solving your toughest growth challenges with solutions that hit hard and deliver fast.
              </p>
              <p className="!text-gray-600 !leading-relaxed">
                What keeps us up at night? The thrill of crafting campaigns that don't just get clicks—they spark conversations, ignite curiosity, and drive real, measurable results.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 !gap-8 !mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="!bg-white/80 !backdrop-blur-sm !rounded-xl !p-8 !border !border-gray-200 hover:!border-blue-400 !transition-all !duration-300 hover:!-translate-y-2 !shadow-lg"
            >
              <div className="!mb-6">
                {feature.icon}
              </div>
              <h3 className="!text-xl !font-bold !text-gray-900 !mb-3">{feature.title}</h3>
              <p className="!text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1) !important; }
          33% { transform: translate(30px, -50px) scale(1.1) !important; }
          66% { transform: translate(-20px, 20px) scale(0.9) !important; }
          100% { transform: translate(0px, 0px) scale(1) !important; }
        }
        .animate-blob {
          animation: blob 7s infinite !important;
        }
        .animation-delay-2000 {
          animation-delay: 2s !important;
        }
        .animation-delay-4000 {
          animation-delay: 4s !important;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.20'/%3E%3C/svg%3E") !important;
        }
      `}</style>
    </section>
  );
};

export default AboutUsContent;