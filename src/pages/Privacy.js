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
                Last Updated: 14 July 2026
              </p>

              <p>
                This Privacy Notice explains how Raahi Cabs Services Pvt. Ltd. (&quot;Raahi&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, stores, shares and protects personal information of users of the Raahi platform (the &quot;Platform&quot;).
              </p>

              <h2>1. Information We Collect</h2>
              <ul>
                <li>Name, phone number, email address</li>
                <li>Real-time GPS location during rides</li>
                <li>Payment transaction details</li>
                <li>Device and usage information</li>
                <li>SOS alerts and in-app communications</li>
                <li>Information collected via cookies, SDKs, and analytics tools (including Google Analytics) to understand app usage and improve performance – see Section 10</li>
              </ul>

              <h2>2. How We Use Information</h2>
              <ul>
                <li>Provide ride-matching services</li>
                <li>Process payments</li>
                <li>Improve routing and safety</li>
                <li>Prevent fraud</li>
                <li>Provide customer support</li>
              </ul>

              <h2>3. Location Data</h2>
              <p>
                Location data is used for ride matching, navigation, and safety tracking during active ride usage.
              </p>

              <h2>4. Data Sharing</h2>
              <p>We may share data:</p>
              <ul>
                <li>Between riders and drivers for ride coordination</li>
                <li>With payment providers and cloud service partners</li>
                <li>With authorities when legally required</li>
              </ul>
              <p>We do not sell personal data.</p>
              <p>
                Personal data may be stored or processed on servers located within or outside India, including through cloud infrastructure providers. Where data is transferred outside India, we take reasonable steps to ensure it receives a level of protection consistent with applicable Indian data protection law. We do not transfer personal data to countries restricted under applicable law.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement encryption, secure servers, and access controls. No system is 100% secure.
              </p>

              <h2>6. Data Retention</h2>
              <p>We retain personal data for as long as necessary to provide our services and for the following purposes:</p>
              <ul>
                <li>Account and ride data: for the duration of the user&apos;s active account plus 7 years thereafter, for fraud prevention, dispute resolution, and legal compliance.</li>
                <li>Payment records: as required under applicable financial regulations (typically 7 years).</li>
                <li>SOS / safety incident records: 7 years, given their relevance to safety investigations.</li>
              </ul>
              <p>
                On request, and subject to legal retention obligations, we will delete or anonymize personal data that is no longer required.
              </p>

              <h2>7. User Rights</h2>
              <p>
                Users may request access, correction, or deletion of personal data, subject to legal obligations. Requests may be directed to the Grievance Officer named in Section 11.
              </p>

              <h2>8. Children&apos;s Privacy</h2>
              <p>
                The Platform is intended for use by individuals aged 18 and above. We do not knowingly collect personal data from individuals under 18. If we become aware that a minor has provided personal data, we will take steps to delete it.
              </p>

              <h2>9. Policy Updates</h2>
              <p>
                We may update this Privacy Notice from time to time. For minor or classificatory changes, continued use of the Platform constitutes acceptance. For material changes — such as new categories of data collected or new purposes of processing — we will provide notice through the app and seek fresh consent where required by applicable law.
              </p>

              <h2>10. Third-Party Services</h2>
              <p>The Platform uses the following categories of third-party services, each of which may process data under its own privacy policy:</p>
              <ul>
                <li>Analytics: Google analytics</li>
                <li>Maps / navigation: Google Maps</li>
                <li>Payments: ICICI BANK</li>
                <li>Cloud hosting: AWS</li>
              </ul>
              <p>
                A current list of third-party processors is available on request to contactus@raahionrescue.com.
              </p>

              <h2>11. Grievance Officer</h2>
              <p>
                In accordance with applicable Indian data protection law, the Grievance Officer for Raahi Cabs Services Pvt. Ltd. can be contacted at:
              </p>
              <ul>
                <li>Name: Nimish Pandey</li>
                <li>Designation: CEO</li>
                <li>Email: contactus@raahionrescue.com</li>
                <li>Address: 52/42, LOHIA MARG CIVIL LINES, Allahabad, Allahabad, Allahabad- 211001, Uttar Pradesh</li>
              </ul>
              <p>
                Users may raise complaints regarding the processing of their personal data with the Grievance Officer, who will respond within the timeline prescribed by applicable law.
              </p>

              <p className="privacy-contact">
                Contact: +91 95691 63463<br />
                Email: contactus@raahionrescue.com<br />
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
