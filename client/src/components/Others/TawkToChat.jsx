// src/components/TawkTo.jsx
import React, { useEffect } from 'react';
import useTawkTo from '../../hook/useTawkTo';

const TawkToChat = () => {
  // Initialize Tawk.to with your widget ID
  useTawkTo();

  // Optional: Add event listeners and API functions
  useEffect(() => {
    if (!window.Tawk_API) return;

    // Example: Set visitor attributes when available
    const setVisitorInfo = () => {
      window.Tawk_API.setAttributes({
        name: 'MetlifeDM', // Replace with dynamic data
        email: 'metlifedm4u@gmail.com', // Add if you have user email
        // Add any custom attributes
        page: window.location.pathname,
      }, (error) => {
        if (error) console.error('Tawk.to setAttributes error:', error);
      });
    };

    // Run when Tawk.to is loaded
    window.Tawk_API.onLoad = setVisitorInfo;

    // Track page changes
    const handleRouteChange = () => {
      if (window.Tawk_API) {
        window.Tawk_API.setAttributes({
          page: window.location.pathname
        });
      }
    };

    // For single-page apps, listen to route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = null;
      }
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToChat;