import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Number from './components/Number/Number'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>       {/* เรียกใช้งาน Navbar ที่เราสร้างไว้ */}
      <Hero/>         {/* เรียกใช้งาน Hero ที่เราสร้างไว้ */}
      <Skills/>       {/* เรียกใช้งาน Skills ที่เราสร้างไว้ */}
      <Services/>     {/* เรียกใช้งาน Services ที่เราสร้างไว้ */} 
      <Portfolio/>    {/* เรียกใช้งาน Portfolio ที่เราสร้างไว้ */}
      <Number />      {/* เรียกใช้งาน Number ที่เราสร้างไว้ */}
      <Testimonials/> {/* เรียกใช้งาน Testimonials ที่เราสร้างไว้ */}
    </>
  )
}

export default App
