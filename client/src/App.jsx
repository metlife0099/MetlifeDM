import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import PaymentGateway from './components/Others/PaymentGateway'
import PaymentStatus from './components/Others/PaymentStatus'
import FAQ from './pages/FAQ'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/pay" element={<PaymentGateway />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
