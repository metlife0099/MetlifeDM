import React, { useEffect, useState } from 'react'
import ServicesCont from '../components/ServicesContent/ServicesCont'
import Hero from '../components/Others/Hero'
import { serviceHero } from '../assets/Data/HeroData'
import ServicesDetails from '../components/ServicesContent/ServicesDetails'
import ServicesDetailsMore from '../components/ServicesContent/ServiceDetailsMore'
import TawkToChat from '../components/Others/TawkToChat'
import ChatToggleButton from '../components/Others/ChatToggleButton'

const Services = () => {
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
      <Hero serviceHero={serviceHero} />
      <ServicesCont />
      <ServicesDetails />
      <ServicesDetailsMore />

      {loadChat && (
        <>
          <TawkToChat />
          <ChatToggleButton />
        </>
      )}
    </div>
  )
}

export default Services
