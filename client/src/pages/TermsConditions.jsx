import React, { useEffect } from 'react';
import { FiCheck, FiAlertTriangle, FiLock, FiDollarSign, FiCode, FiShield, FiBook, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  useEffect(() => {
    // Add animation class to sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.terms-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 !pt-44 !pb-12 !px-4 sm:!px-6 lg:!px-8">
      <div className="max-w-4xl !mx-auto">
        {/* Header */}
        <div className="text-center !mb-16 transform transition-all duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-transparent sm:text-5xl !mb-4 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Terms & Conditions
          </h1>
        </div>

        {/* Introduction */}
        <div className="terms-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 !p-3 rounded-lg text-blue-600">
              <FiBook className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-2">Welcome to Metlifedm LLC</h2>
              <p className="text-gray-600">
                By accessing or using our website or engaging our digital marketing services, including but not limited to SEO, Google Ads, social media management, lead generation, and web development (collectively, the "Services"), you ("you" or "User") agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please do not use our Site or Services.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Use of Services */}
        <div className="terms-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 !p-3 rounded-lg text-indigo-600">
              <FiCheck className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-4">1. Use of Services</h2>

              <div className="!mb-4 !pl-6 border-l-4 border-indigo-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full !mr-2"></span>
                  Eligibility
                </h3>
                <p className="text-gray-600 !ml-4">
                  You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services.
                </p>
              </div>

              <div className="!mb-4 !pl-6 border-l-4 border-indigo-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full !mr-2"></span>
                  Permitted Use
                </h3>
                <p className="text-gray-600 !ml-4">
                  You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You may not use our Services to engage in fraudulent, defamatory, or illegal activities.
                </p>
              </div>

              <div className="!pl-6 border-l-4 border-indigo-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full !mr-2"></span>
                  Account Responsibility
                </h3>
                <p className="text-gray-600 !ml-4">
                  If you create an account, you are responsible for maintaining the confidentiality of your login credentials for all activities under your account.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Service Agreements */}
        <div className="terms-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-purple-100 !p-3 rounded-lg text-purple-600">
              <FiCode className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-4">2. Service Agreements</h2>

              <div className="!mb-4 !pl-6 border-l-4 border-purple-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full !mr-2"></span>
                  Customized Services
                </h3>
                <p className="text-gray-600 !ml-4">
                  Our Services are tailored to your needs as outlined in a separate service agreement or contract ("Service Agreement"). The Service Agreement will specify deliverables, timelines, and fees, and it takes precedence over these Terms in case of conflict.
                </p>
              </div>

              <div className="!pl-6 border-l-4 border-purple-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full !mr-2"></span>
                  No Guarantees
                </h3>
                <p className="text-gray-600 !ml-4">
                  While we strive to deliver high-impact results, we cannot guarantee specific outcomes (e.g., search engine rankings or sales) due to factors beyond our control, such as third-party algorithms or market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Payment Terms */}
        <div className="terms-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-green-100 !p-3 rounded-lg text-green-600">
              <FiDollarSign className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-4">3. Payment Terms</h2>

              <div className="!mb-4 !pl-6 border-l-4 border-green-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full !mr-2"></span>
                  Fees
                </h3>
                <p className="text-gray-600 !ml-4">
                  You agree to pay all fees as outlined in the Service Agreement. Payments are due as specified, typically upfront or on a recurring basis (e.g., monthly for ongoing services).
                </p>
              </div>

              <div className="!mb-4 !pl-6 border-l-4 border-green-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full !mr-2"></span>
                  Late Payments
                </h3>
                <p className="text-gray-600 !ml-4">
                  Late payments may incur a fee of 1.5% per month on the outstanding balance or the maximum allowed by Delaware law, whichever is lower.
                </p>
              </div>

              <div className="!pl-6 border-l-4 border-green-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full !mr-2"></span>
                  Taxes
                </h3>
                <p className="text-gray-600 !ml-4">
                  You are responsible for any applicable taxes related to the Services, unless otherwise stated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Intellectual Property */}
        <div className="terms-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-yellow-100 !p-3 rounded-lg text-yellow-600">
              <FiLock className="h-6 w-6" />
            </div>
            <div className="!ml-4">
              <h2 className="text-2xl font-bold text-gray-800 !mb-4">4. Intellectual Property</h2>

              <div className="!mb-4 !pl-6 border-l-4 border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full !mr-2"></span>
                  Our Content
                </h3>
                <p className="text-gray-600 !ml-4">
                  All content on the Site, including text, graphics, logos, and software, is owned by Metlifedm LLC or our licensors and is protected by U.S. and international copyright laws. You may not reproduce or distribute it without our written permission.
                </p>
              </div>

              <div className="!mb-4 !pl-6 border-l-4 border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full !mr-2"></span>
                  Client Content
                </h3>
                <p className="text-gray-600 !ml-4">
                  You grant us a non-exclusive, royalty-free license to use, modify, and display any content you provide (e.g., logos, images, or text) solely to perform the Services. You confirm you have the right to provide such content.
                </p>
              </div>

              <div className="!pl-6 border-l-4 border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full !mr-2"></span>
                  Deliverables
                </h3>
                <p className="text-gray-600 !ml-4">
                  Upon full payment, we assign ownership of deliverables (e.g., website designs or ad creatives) to you, except for any third-party or pre-existing materials, which remain licensed for your use only as specified.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5-12: Combined for brevity */}
        <div className="grid md:grid-cols-2 gap-6 !mb-8">
          {/* Section 5: Confidentiality */}
          <div className="terms-section bg-white rounded-xl shadow-lg !p-6 opacity-0 transition-all duration-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-pink-100 !p-3 rounded-lg text-pink-600">
                <FiShield className="h-6 w-6" />
              </div>
              <div className="!ml-4">
                <h2 className="text-xl font-bold text-gray-800 !mb-2">5. Confidentiality</h2>
                <p className="text-gray-600">
                  We will keep your confidential information private and use it only to provide the Services, unless required by law. You agree to keep any proprietary information we share (e.g., marketing strategies) confidential.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Termination */}
          <div className="terms-section bg-white rounded-xl shadow-lg !p-6 opacity-0 transition-all duration-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 !p-3 rounded-lg text-red-600">
                <FiAlertTriangle className="h-6 w-6" />
              </div>
              <div className="!ml-4">
                <h2 className="text-xl font-bold text-gray-800 !mb-2">6. Termination</h2>
                <p className="text-gray-600">
                  <span className="font-semibold">By You:</span> You may terminate Services as outlined in the Service Agreement, typically with 30 days' written notice.
                  <br /><br />
                  <span className="font-semibold">By Us:</span> We may terminate Services immediately if you breach these Terms, fail to make payments, or engage in illegal activities.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: Limitation of Liability */}
          <div className="terms-section bg-white rounded-xl shadow-lg !p-6 opacity-0 transition-all duration-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 !p-3 rounded-lg text-blue-600">
                <FiAlertTriangle className="h-6 w-6" />
              </div>
              <div className="!ml-4">
                <h2 className="text-xl font-bold text-gray-800 !mb-2">7. Limitation of Liability</h2>
                <p className="text-gray-600">
                  To the maximum extent permitted by Delaware law, Metlifedm LLC will not be liable for indirect, incidental, or consequential damages (e.g., lost profits or data) arising from your use of the Site or Services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Indemnification */}
          <div className="terms-section bg-white rounded-xl shadow-lg !p-6 opacity-0 transition-all duration-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-indigo-100 !p-3 rounded-lg text-indigo-600">
                <FiShield className="h-6 w-6" />
              </div>
              <div className="!ml-4">
                <h2 className="text-xl font-bold text-gray-800 !mb-2">8. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify and hold Metlifedm LLC, its officers, and employees harmless from any claims, damages, or losses arising from your use of the Services, your content, or your breach of these Terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Sections */}
        <div className="terms-section bg-white rounded-xl shadow-lg !p-6 !mb-8 opacity-0 transition-all duration-700">
          <div className="!space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 !mb-2">9. Disclaimers</h2>
              <p className="text-gray-600">
                The Site and Services are provided "as is" without warranties of any kind, express or implied, including fitness for a particular purpose, except as required by Delaware law. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 !mb-2">10. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600">
                These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes will be resolved through negotiation. If unresolved, disputes will be settled in the state or federal courts of Wilmington, Delaware.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 !mb-2">11. Changes to Terms</h2>
              <p className="text-gray-600">
                We may update these Terms at any time by posting the revised version on the Site. Continued use of the Site or Services after changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 !mb-2">12. Miscellaneous</h2>
              <p className="text-gray-600">
                These Terms, along with any Service Agreement and our Privacy Policy, constitute the entire agreement between you and Metlifedm LLC. If any provision is found unenforceable, the remaining provisions will remain in effect.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="terms-section bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-5 text-white opacity-0 transition-all duration-700 !py-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold !mb-4">Contact Us</h2>
            <p className="!mb-6">For questions about these Terms, please contact us:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="mailto:connect@metlifedm.com" className="flex items-center justify-center hover:text-blue-200 transition-colors">
                <FiMail className="!mr-2" /> connect@metlifedm.com
              </Link>
              <Link to="tel:1-800-ENERGY" className="flex items-center justify-center hover:text-blue-200 transition-colors">
                <FiPhone className="!mr-2" /> 1-800-ENERGY
              </Link>
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

export default TermsConditions;