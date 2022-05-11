import React from 'react'
import "./Hero.css";
import Label from '../Label/Label';
const Hero = () => {
  return (
      <div className="hero">
        <div className="hero-container">
        <div className="hero-content">
            <h1 className='main-title'>Cari Cari</h1>
            <p className='sub-title'>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
        </div>
        <Label />
        </div>
      </div>   
  )
}

export default Hero