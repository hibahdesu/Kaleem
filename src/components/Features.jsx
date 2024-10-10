// src/components/Features.jsx
import React from 'react';

const Features = () => {
    return (
        <section className="features">
            <h2>Our Powerful Features</h2>
            <p className="intro">
                Discover how Kaleem can elevate your customer support experience with these innovative features:
            </p>
            <div className="features-grid">
                <div className="feature-card">
                    <h3>🌐 Auto Web Scraping</h3>
                    <p>Effortlessly gather and utilize data from the web.</p>
                </div>
                <div className="feature-card">
                    <h3>💬 Custom Business Tone</h3>
                    <p>Communicate with your customers in your unique voice.</p>
                </div>
                <div className="feature-card">
                    <h3>📊 Live Data Reference</h3>
                    <p>Leverage any data you have for accurate, real-time responses.</p>
                </div>
                <div className="feature-card">
                    <h3>📈 Comprehensive Dashboard</h3>
                    <p>Monitor ticket categories, customer sentiment, and key metrics at a glance.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
