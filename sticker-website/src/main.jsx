import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Highlights from './Highlights.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Hero/>
      <About/>
      <Highlights/>

    </>
    
  </StrictMode>,
)
