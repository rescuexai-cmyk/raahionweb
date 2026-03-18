import React from 'react';
import './Pages.css';

const Terms = () => {
  return (
    <div className="page terms-page">
      <section className="page-hero-split">
        <div className="page-hero-split-content">
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-subtitle">
            The rules and guidelines for using Raahi's platform and services.
          </p>
        </div>
        <div className="page-hero-split-image">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" alt="Terms" />
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="content-grid content-grid-single">
            <div className="content-main">
              <p className="content-meta">
                RAAHI – TERMS OF USE<br />
                Last Updated: 9 March 2026
              </p>

              <p>
                These Terms of Use (“Terms”) govern your access to and use of the Raahi mobile application, website, technology platform, and related services (collectively, the “Platform”) operated by Raahi Cabs Services Pvt. Ltd. (“Raahi,” “we,” “us,” or “our”).
              </p>

              <p>
                By accessing or using the Platform, you agree to be legally bound by these Terms.
              </p>

              <h2>1. ELIGIBILITY</h2>
              <p>
                You must be at least 18 years of age to use the Platform. By creating an account, you represent and warrant that all information provided is accurate.
              </p>

              <h2>2. NATURE OF SERVICES</h2>
              <p>
                Raahi is a technology platform that connects riders with independent third-party drivers. Raahi does not own vehicles and is not a transportation carrier.
              </p>

              <h2>3. ACCOUNT SECURITY</h2>
              <p>
                You are responsible for maintaining confidentiality of your login credentials and all activity under your account.
              </p>

              <h2>4. BOOKINGS &amp; RIDES</h2>
              <p>
                Ride availability depends on driver availability. Estimated fares and arrival times may vary due to traffic conditions, route changes, tolls, waiting time, or other factors.
              </p>

              <h2>5. PAYMENTS</h2>
              <p>
                Users agree to pay applicable fares, surge pricing (if any), tolls, taxes, cancellation fees, and platform charges. Payments may be processed via UPI, cards, wallets, or cash (if enabled).
              </p>

              <h2>6. SAFETY FEATURES</h2>
              <p>
                Raahi may provide SOS, live tracking, and driver verification tools. These tools are provided for convenience and support safety but do not guarantee user safety or eliminate transportation risks.
              </p>

              <h2>7. PROHIBITED CONDUCT</h2>
              <p>
                Users must not engage in illegal activity, harassment, fraud, system abuse, or vehicle/property damage.
              </p>

              <h2>8. INTELLECTUAL PROPERTY</h2>
              <p>
                All Platform content, trademarks, and software belong to Raahi Cabs Services Pvt. Ltd.
              </p>

              <h2>9. LIMITATION OF LIABILITY</h2>
              <p>
                Raahi is not liable for indirect or consequential damages. Maximum liability shall not exceed the total fare paid for the ride in question.
              </p>

              <h2>10. TERMINATION</h2>
              <p>
                Raahi may suspend or terminate accounts for violations, fraud, or safety concerns.
              </p>

              <h2>11. MODIFICATION OF TERMS</h2>
              <p>
                Raahi Cabs Services Pvt. Ltd. may modify these Terms at any time. Continued use of the Platform after updates constitutes acceptance of the revised Terms.
              </p>

              <h2>12. GOVERNING LAW</h2>
              <p>
                These Terms are governed by the laws of India. Disputes are subject to jurisdiction of courts in Allahabad, Uttar Pradesh.
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

export default Terms;
