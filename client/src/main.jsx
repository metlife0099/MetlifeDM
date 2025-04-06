import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ChatBot from './components/Others/ChatBot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ChatBot />
  </StrictMode>,
)
