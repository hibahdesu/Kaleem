// src/components/HeroSection.jsx
import React from 'react';
import heroImage from '../assets/Chat bot-amico.png'; // Update the path to your image

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Kaleem</h1>
        <p>
            Custom AI Support, Designed for Your Business
        </p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
