import React from 'react';
import './Pages.css';

const AboutUs = () => {
  return (
    <div className="page about-page">
      <section className="page-hero-split">
        <div className="page-hero-split-content">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Building the future of transportation in India — your saviour on every journey.
          </p>
        </div>
        <div className="page-hero-split-image">
          <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80" alt="Raahi — mobility across India" />
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid content-grid-single">
            <div className="content-main">
              <h2>Our Story</h2>
              <p>
                Raahi was founded with a simple yet powerful vision: to revolutionize 
                the way India moves. In a country where millions of people navigate 
                through traffic every day, we saw an opportunity to make transportation 
                more efficient, accessible, and enjoyable for everyone.
              </p>
              <p>
                Our name "Raahi" means traveler in Hindi, and it perfectly captures 
                our mission — to be a trusted companion on every journey, whether 
                it's a daily commute, an intercity trip, or an emergency rescue 
                from traffic.
              </p>

              <h2>Our Mission</h2>
              <p>
                To create a unified automotive transport ecosystem that empowers 
                drivers, riders, operators, and customers alike. We believe that 
                technology can transform the way people travel, making it safer, 
                more convenient, and more sustainable.
              </p>

              <h2>What Makes Us Different</h2>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Pan-India Coverage</h4>
                    <p>Operating across major cities with plans to expand nationwide</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Safety First</h4>
                    <p>Rigorous driver verification and real-time trip monitoring</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Community Driven</h4>
                    <p>Empowering local drivers and creating employment opportunities</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Innovative Solutions</h4>
                    <p>Unique services like Traffic Rescue that solve real problems</p>
                  </div>
                </div>
              </div>

              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h4>Reliability</h4>
                  <p>We promise to be there when you need us, every single time.</p>
                </div>
                <div className="value-card">
                  <h4>Transparency</h4>
                  <p>Clear pricing, honest communication, no hidden surprises.</p>
                </div>
                <div className="value-card">
                  <h4>Innovation</h4>
                  <p>Constantly improving to serve you better.</p>
                </div>
                <div className="value-card">
                  <h4>Respect</h4>
                  <p>Treating every driver and rider with dignity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
