import React from 'react';
import './Pages.css';
import '../Contact.css';

const Contact = () => {
  return (
    <div className="page contact-page">
      <section className="page-hero-split">
        <div className="page-hero-split-content">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch — we're here to help. Email us.</p>
        </div>
        <div className="page-hero-split-image">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" alt="Raahi support" />
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="contact-container">
            <div className="contact-main">
            <h2>Reach out</h2>
            <p className="contact-intro">
              Have a question, feedback, or need support? Use the options below. We'll get back soon.
            </p>
            <div className="contact-actions">
              <a href="mailto:contactus@raahionrescue.com" className="contact-card">
                <span className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">contactus@raahionrescue.com</span>
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
