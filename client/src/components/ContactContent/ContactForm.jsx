import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiMail, HiPhone, HiUser, HiServer, HiCheckCircle } from "react-icons/hi";

const ContactForm = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!form.current.name.value || !form.current.email.value) {
      setError('Please fill required fields');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_CONTACT_SERVICE_KEY,
        import.meta.env.VITE_CONTACT_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_CONTACT_PUBLIC_KEY
      );
      
      console.log('Success:', result);
      setIsModalOpen(true);
      form.current.reset();
    } catch (error) {
      console.error('Error details:', error);
      setError(error.text || 'Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="!py-12 !px-4 sm:!px-6 lg:!px-8 bg-gray-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.956153315275!2d-80.21070922481651!3d25.772011777345472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b692e6051e35%3A0xe2f2e7b3fc0ac9c4!2s821%20SW%202nd%20St%20APT%2010%2C%20Miami%2C%20FL%2033130%2C%20USA!5e0!3m2!1sen!2sin!4v1737027518754!5m2!1sen!2sin"
                className="w-full h-full min-h-[400px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="bg-white !p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 !mb-2">Have any questions?</h2>
              <p className="text-lg text-blue-600 !mb-8">
                Fill out the form, and we'll get back to you within 24 hours.
              </p>

              <form ref={form} onSubmit={sendEmail} className="!space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 !mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none">
                        <HiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="block w-full !pl-10 !pr-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pnumber" className="block text-sm font-medium text-gray-700 !mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute !inset-y-0 left-0 !pl-3 flex items-center pointer-events-none">
                        <HiPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="pnumber"
                        name="pnumber"
                        type="tel"
                        className="block w-full !pl-10 !pr-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 555-555-5555"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 !mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none">
                      <HiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full !pl-10 !pr-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="youremail@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 !mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute !inset-y-0 left-0 !pl-3 flex items-center pointer-events-none">
                      <HiServer className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="service"
                      name="service"
                      required
                      className="!pl-10 !pr-4 !py-3 border border-gray-300 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="SEO">SEO</option>
                      <option value="Google Ads & Analytics">Google Ads & Analytics</option>
                      <option value="Pay-Per-Clicks">Pay-Per-Clicks</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Lead Generation Service">Lead Generation Service</option>
                      <option value="Brand Awareness">Brand Awareness</option>
                      <option value="Content creation">Content creation</option>
                      <option value="Weekly plan for SMM">Weekly plan for SMM</option>
                      <option value="Email, WhatsApp and SMS marketing">Email, WhatsApp and SMS marketing</option>
                      <option value="Reputation Management services">Reputation Management services</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center !pr-2 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 !mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    required
                    className="block w-full !px-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center !py-3 !px-4 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin !-ml-1 !mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Submit Form'}
                  </button>
                </div>

                {error && (
                  <div className="rounded-md bg-red-50 !p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="!ml-3">
                        <h3 className="text-sm font-medium text-red-800">{error}</h3>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setIsModalOpen(false)}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <HiCheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Message Sent!</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;