import React from 'react';
import './Pages.css';

const Privacy = () => {
  return (
    <div className="page privacy-page">
      <section className="page-hero-split">
        <div className="page-hero-split-content">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">
            How Raahi collects, uses, and protects your personal information.
          </p>
        </div>
        <div className="page-hero-split-image">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" alt="Privacy" />
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="content-grid content-grid-single">
            <div className="content-main">
              <p className="content-meta">RAAHI – TERMS OF USE<br />Last Updated: 8 March 2026</p>
              <p>These Terms of Use (“Terms”) govern your access to and use of the Raahi mobile application, website, technology platform, and related services (collectively, the “Platform”) operated by Raahi Technologies Pvt. Ltd. (“Raahi,” “we,” “us,” or “our”).</p>
              <p>By accessing or using the Platform, you agree to be legally bound by these Terms.</p>

              <h2>1. ELIGIBILITY</h2>
              <p>You must be at least 18 years of age to use the Platform. By creating an account, you confirm that all information provided is accurate and that you have the legal capacity to enter into this agreement.</p>

              <h2>2. NATURE OF SERVICES</h2>
              <p>Raahi is a technology platform that connects riders with independent third-party drivers. Raahi does not own vehicles and is not a transportation carrier.</p>

              <h2>3. ACCOUNT SECURITY</h2>
              <p>You are responsible for maintaining confidentiality of your login credentials and all activity under your account.</p>

              <h2>4. BOOKINGS & RIDES</h2>
              <p>Ride availability depends on driver availability. Estimated fares and times may vary due to traffic, route changes, tolls, and waiting time.</p>

              <h2>5. PAYMENTS</h2>
              <p>Users agree to pay applicable fares, surge pricing (if any), tolls, taxes, cancellation fees, and platform charges. Payments may be processed via UPI, cards, wallets, or cash (if enabled).</p>

              <h2>6. SAFETY FEATURES</h2>
              <p>Raahi may provide SOS, live tracking, and driver verification tools. These tools support safety but do not eliminate transportation risks.</p>

              <h2>7. PROHIBITED CONDUCT</h2>
              <p>Users must not engage in illegal activity, harassment, fraud, system abuse, or vehicle/property damage.</p>

              <h2>8. INTELLECTUAL PROPERTY</h2>
              <p>All Platform content, trademarks, and software belong to Raahi Technologies Pvt. Ltd.</p>

              <h2>9. LIMITATION OF LIABILITY</h2>
              <p>Raahi is not liable for indirect or consequential damages. Maximum liability shall not exceed the total fare paid for the ride in question.</p>

              <h2>10. TERMINATION</h2>
              <p>Raahi may suspend or terminate accounts for violations, fraud, or safety concerns.</p>

              <h2>11. GOVERNING LAW</h2>
              <p>These Terms are governed by the laws of India. Disputes are subject to jurisdiction of courts in Allahabad, Uttar Pradesh.</p>

              <p><strong>Contact:</strong> contactus@raahionrescue.com<br /><strong>Company:</strong> Raahi Technologies Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
