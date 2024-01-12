import React from 'react'
import Navbar from './Sections/Navbar/Navbar'
import Hero from './Sections/Hero/Hero'
import Categories from './Sections/Categories/Categories'
import Shop from './Sections/Shop/Shop'
import Deal from './Sections/Deal/Deal'
import Testimonial from './Sections/Testimonial/Testimonial'
import Blog from './Sections/Blog/Blog'
import Footer from './Sections/Footer/Footer'
import WhatsApp from './Sections/WhatsApp/WhatsApp'

const App = () => {
  return (
    <main className='app'>
      <WhatsApp />
      <Navbar/>
      <Hero/>
      <Categories/>
      <Shop/>
      <Deal/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </main>
  )
}

export default App