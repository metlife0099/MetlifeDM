import React from 'react'
import { contactHero } from '../assets/Data/HeroData'
import Hero from '../components/Others/Hero'
import ContactForm from '../components/ContactContent/ContactForm'
import ContactCards from '../components/ContactContent/ContactCards'

const Contact = () => {
  return (
    <div>
      <Hero contactHero={contactHero} />
      <ContactCards />
      <ContactForm />
    </div>
  )
}

export default Contact
