// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.png'; 
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#project-description">Project Description</a></li>
          <li><a href="#what-we-do">What We Do</a></li>
          <li><a href="#features">Features</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
