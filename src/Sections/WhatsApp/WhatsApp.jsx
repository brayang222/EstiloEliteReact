import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function App() {

  return (
      <FloatingWhatsApp 
      phoneNumber= {3145190205}
      accountName={'Estilo Elite'}
      avatar={'ee3.jpeg'}
      statusMessage='Quieres tener mas estilo? Viniste al lugar correcto!'
      chatMessage='Cuéntanos, ¿En qué podemos ayudarte? 🔥'
      placeholder='Escríbenos!'
      darkMode={true}
      
       />
  )
}