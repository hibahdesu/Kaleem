import React from 'react';
import Header from './components/Header';
import ProjectDescription from './components/ProjectDescription';
import WhatWeDo from './components/WhatWeDo';
import Features from './components/Features';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './styles.css'; // Import your CSS file

const App = () => {
    return (
        <div>
      <Header />
      <HeroSection />
      <section id="project-description">
        <ProjectDescription />
      </section>
      <section id="what-we-do">
        <WhatWeDo />
      </section>
      <section id="features">
        <Features />
      </section>
      <Footer />
    </div>
    );
};

export default App;