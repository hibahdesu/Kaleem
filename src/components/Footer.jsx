// src/components/Footer.jsx
import React from 'react';
import projectImage from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <img src={projectImage} alt="Kaleem Project" />
                </div>
                <div className="footer-links">
                    <a href="#project-description">Project Description</a>
                    <a href="#what-we-do">What We Do</a>
                    <a href="#features">Features</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kaleem. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
