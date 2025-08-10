import { useState } from 'react'
import './Hero.css'
import heroImage from "./assets/hero-image.svg"
import cactus from "./assets/cactus.png"
import deer from "./assets/deer.png"
import fish from "./assets/fish.png"
import lips from "./assets/lips.png"
import skeleton from "./assets/skeleton.png"
import unicorn from "./assets/unicorn.png"
import pizza from "./assets/pizza.png"


function Hero() {
  return(
    <>
        <div className='hero-container'>
          <div className="center-items">
            <img className="hero-image" src={heroImage} alt="hero-vector-illustration" />
            <h2>YOUR SPACE, YOUR VIBE, TYPE SHIT <br /> EVERYTHING THAT GLITTERS IS ACTUALLY GOLD </h2>

            <img className='sticker cactus' src={cactus} alt="fish sticker"/>
            <img className='sticker deer' src={deer} alt="deer sticker"/>
            <img className='sticker fish' src={fish} alt="fish sticker"/>
            <img className='sticker lips' src={lips} alt="lips sticker"/>
            <img className='sticker pizza' src={pizza} alt="piiza sticker"/>
            <img className='sticker skeleton' src={skeleton} alt="skeleton sticker"/>
            <img className='sticker unicorn' src={unicorn} alt="unicorn sticker"/>

            <button className="hero-button">GET YOURS</button>
          </div>
        </div>
    </>

  )
}

export default Hero
