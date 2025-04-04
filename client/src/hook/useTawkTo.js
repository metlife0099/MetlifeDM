// src/hooks/useTawkTo.js
import { useEffect } from 'react';

const useTawkTo = () => {
  useEffect(() => {
    // Check if already loaded to prevent duplicates
    if (window.Tawk_API && window.Tawk_API.visitor) {
      return;
    }

    // Create script element with YOUR specific widget ID
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/67efbb2aa6bb051910f573c3/1io0768it';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.id = 'tawk-to-script'; // Add ID for easy removal
    
    // Create initial Tawk_API objects
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Add to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const tawkScript = document.getElementById('tawk-to-script');
      if (tawkScript) {
        tawkScript.remove();
      }
      // Reset API objects
      if (window.Tawk_API) {
        delete window.Tawk_API;
      }
      if (window.Tawk_LoadStart) {
        delete window.Tawk_LoadStart;
      }
    };
  }, []);
};

export default useTawkTo;