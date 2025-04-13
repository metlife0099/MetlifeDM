import React, { useEffect } from 'react';
import { FiShield, FiDatabase, FiMail, FiPhone, FiHome, FiUser, FiEyeOff, FiGlobe, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Add animation class to sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.privacy-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 !pt-44 !pb-12 !px-4 sm:!px-6 lg:!px-8">
      <div className="!max-w-4xl !mx-auto">
        {/* Header */}
        <div className="text-center !mb-16 transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold sm:text-5xl !mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            Privacy Policy
          </h1>
          <div className="!mt-6 flex justify-center">
            <div className="bg-blue-100 text-blue-600 !px-4 !py-2 rounded-full text-sm font-medium inline-flex items-center">
              <FiShield className="!mr-2" />
              DPDPA Compliant
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 !p-3 rounded-lg text-blue-600">
              <FiShield className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-2">Welcome to Metlifedm LLC</h2>
              <p className="text-gray-600">
                Metlifedm LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our digital marketing services (the "Services"). This policy complies with the Delaware Personal Data Privacy Act (DPDPA), effective January 1, 2025, and other applicable U.S. laws.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Information We Collect */}
        <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 !p-3 rounded-lg text-blue-600">
              <FiDatabase className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-4">1. Information We Collect</h2>
              
              <div className="!mb-4 !pl-6 border-l-4 border-blue-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full !mr-2"></span>
                  Personal Data
                </h3>
                <p className="text-gray-600 !ml-4">
                  We may collect your name, email address, phone number, billing information, and company details when you contact us, sign up for Services, or fill out forms on the Site.
                </p>
              </div>
              
              <div className="!mb-4 !pl-6 border-l-4 border-blue-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full !mr-2"></span>
                  Usage Data
                </h3>
                <p className="text-gray-600 !ml-4">
                  We collect information about your interactions with the Site, such as IP address, browser type, pages visited, and time spent, using cookies and similar technologies.
                </p>
              </div>
              
              <div className="!mb-4 !pl-6 border-l-4 border-blue-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full !mr-2"></span>
                  Client-Provided Data
                </h3>
                <p className="text-gray-600 !ml-4">
                  For Services like ad campaigns, you may provide data (e.g., customer lists or analytics) that we process on your behalf.
                </p>
              </div>
              
              <div className="!pl-6 border-l-4 border-blue-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full !mr-2"></span>
                  Sensitive Data
                </h3>
                <p className="text-gray-600 !ml-4">
                  We do not knowingly collect sensitive data (e.g., health or biometric information) unless required for specific Services and with your explicit consent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-purple-100 !p-3 rounded-lg text-purple-600">
              <FiUser className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-4">2. How We Use Your Information</h2>
              
              <ul className="!space-y-3 text-gray-600 list-disc !pl-6">
                <li>To provide, manage, and improve our Services (e.g., creating ad campaigns or optimizing SEO).</li>
                <li>To communicate with you about your account, updates, or promotions (you can opt out of marketing emails).</li>
                <li>To process payments and fulfill Service Agreements.</li>
                <li>To analyze Site usage and enhance user experience.</li>
                <li>To comply with legal obligations or protect our rights.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: How We Share Your Information */}
        <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 !p-3 rounded-lg text-indigo-600">
              <FiEyeOff className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-4">3. How We Share Your Information</h2>
              
              <div className="!mb-4 !pl-6 border-l-4 border-indigo-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full !mr-2"></span>
                  Service Providers
                </h3>
                <p className="text-gray-600 !ml-4">
                  We share data with trusted vendors (e.g., hosting or payment processors) who assist us, under strict confidentiality agreements.
                </p>
              </div>
              
              <div className="!mb-4 !pl-6 border-l-4 border-indigo-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full !mr-2"></span>
                  Legal Requirements
                </h3>
                <p className="text-gray-600 !ml-4">
                  We may disclose data if required by law, such as in response to a court order.
                </p>
              </div>
              
              <div className="!pl-6 border-l-4 border-indigo-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full !mr-2"></span>
                  Business Transfers
                </h3>
                <p className="text-gray-600 !ml-4">
                  In a merger or acquisition, your data may be transferred as part of our assets.
                </p>
              </div>

              <div className="!mt-4 !p-4 bg-indigo-50 rounded-lg">
                <p className="text-indigo-800 font-medium">
                  We do not sell your personal data to third parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Your Rights Under DPDPA */}
        <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-green-100 !p-3 rounded-lg text-green-600">
              <FiLock className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-4">4. Your Rights Under DPDPA</h2>
              <p className="text-gray-600 !mb-4">
                As a Delaware resident, you have the following rights starting January 1, 2025:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="!p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 flex items-center">
                    <FiUser className="!mr-2" /> Access
                  </h3>
                  <p className="text-gray-600 text-sm !mt-1">
                    Request details about the personal data we hold about you.
                  </p>
                </div>
                
                <div className="!p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 flex items-center">
                    <FiDatabase className="!mr-2" /> Correction
                  </h3>
                  <p className="text-gray-600 text-sm !mt-1">
                    Ask us to correct inaccurate data.
                  </p>
                </div>
                
                <div className="!p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 flex items-center">
                    <FiEyeOff className="!mr-2" /> Deletion
                  </h3>
                  <p className="text-gray-600 text-sm !mt-1">
                    Request deletion of your data, subject to legal retention requirements.
                  </p>
                </div>
                
                <div className="!p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 flex items-center">
                    <FiMail className="!mr-2" /> Portability
                  </h3>
                  <p className="text-gray-600 text-sm !mt-1">
                    Obtain a copy of your data in a usable format.
                  </p>
                </div>
              </div>
              
              <div className="!mt-6 bg-blue-50 !p-4 rounded-lg">
                <p className="text-gray-600">
                  To exercise these rights, contact us at <span className="font-semibold">privacy@metlifedm.com</span>. We'll respond within 45 days, extendable by 45 days if needed, and provide an appeal process if your request is denied.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sections 5-10 in Grid */}
        <div className="grid md:grid-cols-2 gap-6 !mb-8">
          {/* Section 5: Cookies and Tracking */}
          <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 opacity-0 transition-all duration-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-100 !p-3 rounded-lg text-yellow-600">
                <FiShield className="h-6 w-6" />
              </div>
              <div className="!ml-4">
                <h2 className="text-xl font-bold text-gray-800 !mb-2">5. Cookies and Tracking</h2>
                <p className="text-gray-600">
                  We use cookies to improve Site functionality and track usage. You can manage cookie preferences via your browser settings.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Data Security */}
          <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 opacity-0 transition-all duration-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 !p-3 rounded-lg text-red-600">
                <FiLock className="h-6 w-6" />
              </div>
              <div className="!ml-4">
                <h2 className="text-xl font-bold text-gray-800 !mb-2">6. Data Security</h2>
                <p className="text-gray-600">
                  We use reasonable measures (e.g., encryption and secure servers) to protect your data but cannot guarantee absolute security due to the nature of the internet.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: Third-Party Links */}
          <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 opacity-0 transition-all duration-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-purple-100 !p-3 rounded-lg text-purple-600">
                <FiGlobe className="h-6 w-6" />
              </div>
              <div className="!ml-4">
                <h2 className="text-xl font-bold text-gray-800 !mb-2">7. Third-Party Links</h2>
                <p className="text-gray-600">
                  The Site may link to third-party sites (e.g., Google Ads platforms). We are not responsible for their privacy practices. Review their policies before sharing data.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Children's Privacy */}
          <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 opacity-0 transition-all duration-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-pink-100 !p-3 rounded-lg text-pink-600">
                <FiUser className="h-6 w-6" />
              </div>
              <div className="!ml-4">
                <h2 className="text-xl font-bold text-gray-800 !mb-2">8. Children's Privacy</h2>
                <p className="text-gray-600">
                  Our Services are not directed to children under 13. We do not knowingly collect their data. If you believe we have such data, contact us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9: International Users */}
        <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 !p-3 rounded-lg text-blue-600">
              <FiGlobe className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-xl font-bold text-gray-800 !mb-2">9. International Users</h2>
              <p className="text-gray-600">
                Our Site and Services are hosted in the U.S. and governed by U.S. law. If you're outside the U.S., your data may be transferred to the U.S., where privacy laws differ.
              </p>
            </div>
          </div>
        </div>

        {/* Section 10: Changes to This Policy */}
        <div className="privacy-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 !p-3 rounded-lg text-indigo-600">
              <FiShield className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-xl font-bold text-gray-800 !mb-2">10. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy and will post changes on the Site. Continued use after changes means you accept the new policy.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="privacy-section bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg !py-12 !p-5 text-white opacity-0 transition-all duration-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold !mb-4">11. Contact Us</h2>
            <p className="!mb-6">For questions or to exercise your rights:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="mailto:privacy@metlifedm.com" className="flex items-center justify-center hover:text-teal-200 transition-colors">
                <FiMail className="!mr-2" /> privacy@metlifedm.com
              </Link>
              <Link to="tel:1-800-ENERGY" className="flex items-center justify-center hover:text-teal-200 transition-colors">
                <FiPhone className="!mr-2" /> 1-800-ENERGY
              </Link>
            </div>
            <div className="!mt-6">
              <p className="flex items-center justify-center">
                <FiHome className="!mr-2" /> Metlifedm LLC, [insert physical address]
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;