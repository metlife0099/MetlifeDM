// src/components/TawkToToggle.jsx
import React, { useEffect, useState } from 'react';

const ChatToggleButton = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if Tawk.to is loaded
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (window.Tawk_API && window.Tawk_API.showWidget) {
        setIsLoaded(true);
        clearInterval(checkInterval);
      }
    }, 500);

    return () => clearInterval(checkInterval);
  }, []);

  const toggleChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  if (!isLoaded) return null;

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 bg-[#0056b8] text-white p-3 rounded-full shadow-lg hover:bg-[#004494] transition-all z-50"
      aria-label="Live chat"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  );
};

export default ChatToggleButton;