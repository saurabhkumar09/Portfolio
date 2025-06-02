import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
try {
  emailjs.init({
    publicKey: "c8guU_X7mN3z5hYt4"
  });
  console.log("EmailJS initialized successfully");
} catch (error) {
  console.error("Error initializing EmailJS:", error);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
