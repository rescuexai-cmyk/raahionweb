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
              <p className="content-meta">
                RAAHI – PRIVACY NOTICE<br />
                Last Updated: 8 March 2026
              </p>

              <p>
                This Privacy Notice explains how Raahi Cabs Services Pvt. Ltd. collects, uses, stores, and protects personal information.
              </p>

              <h2>1. INFORMATION WE COLLECT</h2>
              <ul>
                <li>Name, phone number, email</li>
                <li>Real-time GPS location during rides</li>
                <li>Payment transaction details</li>
                <li>Device and usage information</li>
                <li>SOS alerts and in-app communications</li>
              </ul>

              <h2>2. HOW WE USE INFORMATION</h2>
              <ul>
                <li>Provide ride-matching services</li>
                <li>Process payments</li>
                <li>Improve routing and safety</li>
                <li>Prevent fraud</li>
                <li>Provide customer support</li>
              </ul>

              <h2>3. LOCATION DATA</h2>
              <p>
                Location data is used for ride matching, navigation, and safety tracking during active ride usage.
              </p>

              <h2>4. DATA SHARING</h2>
              <p>We may share data:</p>
              <ul>
                <li>Between riders and drivers for ride coordination</li>
                <li>With payment providers and cloud service partners</li>
                <li>With authorities when legally required</li>
              </ul>
              <p>We do not sell personal data.</p>

              <h2>5. DATA SECURITY</h2>
              <p>
                We implement encryption, secure servers, and access controls. No system is 100% secure.
              </p>

              <h2>6. DATA RETENTION</h2>
              <p>
                Data is retained as long as necessary for operational, legal, and fraud-prevention purposes.
              </p>

              <h2>7. USER RIGHTS</h2>
              <p>
                Users may request access, correction, or deletion of personal data, subject to legal obligations.
              </p>

              <h2>8. CHILDREN'S PRIVACY</h2>
              <p>
                The Platform is not intended for individuals under 18 years of age.
              </p>

              <h2>9. POLICY UPDATES</h2>
              <p>
                Continued use of the Platform indicates acceptance of updates.
              </p>

              <h2>10. THIRD-PARTY SERVICES</h2>
              <p>
                The Platform may rely on third-party services for mapping, payment processing, analytics, and cloud storage. These providers may process data in accordance with their own privacy policies.
              </p>

              <p>
                Contact: contactus@raahionrescue.com<br />
                Company: Raahi Cabs Services Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
