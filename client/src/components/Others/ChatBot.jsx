import React, { useEffect, useState } from 'react'
import TawkToChat from './TawkToChat'
import ChatToggleButton from './ChatToggleButton'

const ChatBot = () => {
  const [loadChat, setLoadChat] = useState(false);
  
    // Example: Load after 3 seconds or when user interacts
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoadChat(true);
      }, 3000);
  
      const handleInteraction = () => {
        setLoadChat(true);
        window.removeEventListener('click', handleInteraction);
      };
  
      window.addEventListener('click', handleInteraction);
  
      return () => {
        clearTimeout(timer);
        window.removeEventListener('click', handleInteraction);
      };
    }, []);

  return (
    <div>
      {loadChat && (
        <>
          <TawkToChat />
          <ChatToggleButton />
        </>
      )}
    </div>
  )
}

export default ChatBot
