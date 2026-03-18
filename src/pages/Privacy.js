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

              <p>1. INFORMATION WE COLLECT</p>
              <p>
                - Name, phone number, email<br />
                - Real-time GPS location during rides<br />
                - Payment transaction details<br />
                - Device and usage information<br />
                - SOS alerts and in-app communications
              </p>

              <p>2. HOW WE USE INFORMATION</p>
              <p>
                - Provide ride-matching services<br />
                - Process payments<br />
                - Improve routing and safety<br />
                - Prevent fraud<br />
                - Provide customer support
              </p>

              <p>
                3. LOCATION DATA Location data is used for ride matching, navigation, and safety tracking during active ride usage.
              </p>

              <p>
                4. DATA SHARING We may share data:
              </p>
              <p>
                - Between riders and drivers for ride coordination<br />
                - With payment providers and cloud service partners<br />
                - With authorities when legally required
              </p>
              <p>We do not sell personal data.</p>

              <p>
                5. DATA SECURITY We implement encryption, secure servers, and access controls. No system is 100% secure.
              </p>

              <p>
                6. DATA RETENTION Data is retained as long as necessary for operational, legal, and fraud-prevention purposes.
              </p>

              <p>
                7. USER RIGHTS Users may request access, correction, or deletion of personal data, subject to legal obligations.
              </p>

              <p>
                8. CHILDREN’S PRIVACY The Platform is not intended for individuals under 18 years of age.
              </p>

              <p>
                9. POLICY UPDATES Continued use of the Platform indicates acceptance of updates.
              </p>

              <p>
                10. The Platform may rely on third-party services for mapping, payment processing, analytics, and cloud storage. These providers may process data in accordance with their own privacy policies.
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
