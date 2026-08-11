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
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=70&fm=webp"
            alt="Privacy"
            width={800}
            height={533}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="content-grid content-grid-single">
            <div className="content-main">
              <p className="content-meta">
                RAAHI – PRIVACY NOTICE<br />
                Last Updated: 30 July 2026
              </p>

              <p>
                This Privacy Notice explains how Raahi Cabs Services Pvt. Ltd.
                (&quot;Raahi&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, shares,
                and protects personal information of riders, drivers, and other
                users of the Raahi mobile applications, website, and related
                services (collectively, the &quot;Platform&quot;).
              </p>
              <p>
                By creating an account, using the Platform, or continuing after
                we notify you of material updates, you acknowledge this Privacy
                Notice. If you do not agree, please do not use the Platform.
              </p>

              <h2>1. Who We Are</h2>
              <p>
                Raahi is a technology platform that connects riders with
                independent third-party drivers and related mobility /
                assistance services. Raahi does not own the vehicles used for
                most rides and is not a transportation carrier.
              </p>
              <p>
                <strong>Entity:</strong> Raahi Cabs Services Pvt. Ltd.<br />
                <strong>Registered address:</strong> 52/42, Lohia Marg, Civil
                Lines, Allahabad – 211001, Uttar Pradesh, India<br />
                <strong>Email:</strong> contactus@raahionrescue.com<br />
                <strong>Phone:</strong> +91 95691 63463
              </p>

              <h2>2. Information We Collect</h2>
              <p>Depending on how you use the Platform, we may collect:</p>

              <h3>2.1 Account and profile information</h3>
              <ul>
                <li>Name, phone number, and email address</li>
                <li>Profile photo (if you upload one)</li>
                <li>Role on the Platform (rider, driver, or both)</li>
                <li>Preferences such as language and notification settings</li>
              </ul>

              <h3>2.2 Authentication and verification information</h3>
              <ul>
                <li>
                  Phone number used to create or sign in to your account
                </li>
                <li>
                  One-time passwords (OTPs) sent by SMS or in-app channels for
                  login and verification (we process the verification result;
                  we do not store OTP contents longer than needed to complete
                  authentication)
                </li>
                <li>
                  If you choose <strong>Continue with Truecaller</strong>:
                  information Truecaller shares with us after you consent in
                  the Truecaller flow (typically verified phone number, and
                  optionally name, email, and profile image). See Section 5.
                </li>
                <li>
                  If you sign in with Apple or other supported social /
                  identity providers: identifiers and profile fields those
                  providers share with your consent
                </li>
              </ul>

              <h3>2.3 Location information</h3>
              <ul>
                <li>
                  Precise or approximate GPS location while you use
                  map-based features, search for rides, or track an active
                  trip
                </li>
                <li>
                  For drivers (and where permitted for riders during an active
                  trip): location while the app is in the background or when a
                  foreground service is running, so matching, navigation, and
                  safety tracking can continue
                </li>
                <li>Pickup, drop-off, and route points associated with trips</li>
              </ul>

              <h3>2.4 Trip, service, and safety information</h3>
              <ul>
                <li>Trip requests, fares, status, ratings, and feedback</li>
                <li>In-app chat or support messages related to a trip</li>
                <li>SOS / emergency alerts and related incident details</li>
                <li>
                  Lost-and-found or similar service requests you submit
                </li>
              </ul>

              <h3>2.5 Driver onboarding and document information</h3>
              <ul>
                <li>
                  Driving licence, vehicle documents, and other KYC /
                  onboarding images or files you upload
                </li>
                <li>
                  Photos captured via camera or selected from your gallery for
                  verification
                </li>
                <li>
                  Vehicle details (registration, type, colour, and similar
                  attributes you provide)
                </li>
              </ul>

              <h3>2.6 Payment information</h3>
              <ul>
                <li>
                  Transaction amounts, timestamps, status, and payment method
                  type (for example UPI, card, wallet, or cash where enabled)
                </li>
                <li>
                  Payment references returned by our payment partners. Card /
                  UPI credentials are handled by licensed payment providers;
                  Raahi does not store full card numbers or UPI PINs
                </li>
              </ul>

              <h3>2.7 Device, app, and usage information</h3>
              <ul>
                <li>
                  Device model, OS version, app version, language, and time
                  zone
                </li>
                <li>
                  IP address, approximate network information, crash logs, and
                  performance diagnostics
                </li>
                <li>
                  Push notification tokens (for example Firebase Cloud
                  Messaging tokens)
                </li>
                <li>
                  App interaction and analytics events used to improve
                  reliability and features
                </li>
              </ul>

              <h3>2.8 Information from cookies and similar technologies</h3>
              <p>
                On our website, we and our partners may use cookies, pixels, or
                similar technologies (including Google Analytics) to understand
                traffic, improve the site, and measure performance. You can
                control cookies through your browser settings. Some features
                may not work correctly if cookies are disabled.
              </p>

              <h2>3. Device Permissions We May Request</h2>
              <p>
                The Raahi app may ask for the following device permissions.
                Permissions are requested in context, and you can change them
                later in system settings. Denying a permission may limit related
                features.
              </p>
              <ul>
                <li>
                  <strong>Location (approximate / precise / background where
                  applicable):</strong> to show maps, find nearby drivers,
                  match trips, navigate, and support safety tracking
                </li>
                <li>
                  <strong>Notifications:</strong> to send ride updates, safety
                  alerts, and service messages
                </li>
                <li>
                  <strong>Camera and photos / files:</strong> to capture or
                  upload profile photos and driver / vehicle documents
                </li>
                <li>
                  <strong>Phone state (limited, where required by a login
                  partner on Android):</strong> only as needed to support
                  optional identity / login integrations such as Truecaller;
                  we do not use this to read your SMS inbox or full call
                  history as a product feature
                </li>
                <li>
                  <strong>Internet / network access, vibration, boot
                  completion, and foreground services:</strong> for core app
                  operation, alerts, and continuing an active trip session
                </li>
              </ul>
              <p>
                <strong>What we do not do:</strong> Raahi is a mobility
                platform, not a default phone, SMS, or dialer app. We do not
                request access to your SMS messages or call logs to operate
                core ride features, and we do not sell personal data obtained
                through device permissions.
              </p>

              <h2>4. How We Use Information</h2>
              <p>We use personal information to:</p>
              <ul>
                <li>Create and manage accounts and authenticate users</li>
                <li>Match riders with drivers and fulfil trip / service requests</li>
                <li>Show maps, estimates, live tracking, and navigation aids</li>
                <li>Process payments, refunds, invoices, and receipts</li>
                <li>
                  Verify driver identity and documents for safety and
                  compliance
                </li>
                <li>
                  Operate safety features such as SOS, live tracking, and
                  support follow-up
                </li>
                <li>
                  Send transactional notifications (trip status, OTPs, account
                  alerts). Marketing messages, if any, are sent only where
                  permitted and with an opt-out where required
                </li>
                <li>Detect, prevent, and investigate fraud or abuse</li>
                <li>Improve product quality, routing, and customer support</li>
                <li>Comply with law, respond to lawful requests, and enforce our Terms</li>
              </ul>

              <h2>5. Truecaller and Other Login Partners</h2>
              <p>
                Raahi may offer optional sign-in or number verification through
                Truecaller and other identity partners.
              </p>
              <ul>
                <li>
                  Truecaller login is optional. You may instead use Raahi&apos;s
                  standard phone + OTP (or other available) login methods.
                </li>
                <li>
                  When you tap Continue with Truecaller, Truecaller&apos;s own
                  interface and privacy practices apply to that consent step.
                  After you approve, Truecaller may share with Raahi a verified
                  mobile number and limited profile details (such as name,
                  email, or avatar, if available).
                </li>
                <li>
                  We use that information only to create or sign you into your
                  Raahi account, reduce duplicate / fraudulent accounts, and
                  pre-fill profile fields you can later edit.
                </li>
                <li>
                  Raahi does not receive your Truecaller contacts, SMS content,
                  or call history through this login.
                </li>
                <li>
                  Truecaller processes data under its own privacy policy. Please
                  review Truecaller&apos;s terms and privacy notice before using
                  that option.
                </li>
              </ul>

              <h2>6. Location Data</h2>
              <p>
                Location is central to ride matching and safety. We collect
                location when you grant permission and when features that need
                it are in use (for example opening the map, requesting a ride,
                or driving online).
              </p>
              <ul>
                <li>
                  Riders: location helps show nearby vehicles, set pickup
                  points, and share trip progress.
                </li>
                <li>
                  Drivers: location is used while you are online or on a trip,
                  including background collection where required to keep trip
                  tracking accurate.
                </li>
                <li>
                  You can disable location in system settings; map-based and
                  trip features may then be unavailable.
                </li>
              </ul>

              <h2>7. How We Share Information</h2>
              <p>We may share personal information with:</p>
              <ul>
                <li>
                  <strong>Other users as needed for a trip:</strong> for
                  example, a rider may see a driver&apos;s name, photo, vehicle
                  details, and live location during a trip; a driver may see
                  pickup / drop details and limited rider contact information
                  needed to complete the trip
                </li>
                <li>
                  <strong>Service providers:</strong> cloud hosting, maps,
                  analytics, messaging / push, payments, customer support, and
                  fraud-prevention vendors who process data on our instructions
                </li>
                <li>
                  <strong>Identity / login partners:</strong> such as
                  Truecaller, only when you choose that login method
                </li>
                <li>
                  <strong>Authorities and safety partners:</strong> when
                  required by law, court order, or to protect rights, safety,
                  or property (including responding to SOS / emergency
                  situations)
                </li>
                <li>
                  <strong>Business transfers:</strong> in connection with a
                  merger, acquisition, financing, or sale of assets, subject to
                  appropriate safeguards
                </li>
              </ul>
              <p>
                We do <strong>not</strong> sell personal information. We do not
                share SMS or call-log contents for advertising, because we do
                not collect those as product data.
              </p>

              <h2>8. International Transfers and Storage</h2>
              <p>
                Personal data may be stored or processed on servers in India or
                in other countries through our cloud and service partners (for
                example AWS). Where data is transferred outside India, we take
                reasonable steps so that it receives a level of protection
                consistent with applicable Indian law. We do not transfer
                personal data to countries restricted under applicable law where
                such restrictions apply to us.
              </p>

              <h2>9. Data Retention</h2>
              <p>
                We keep personal data only as long as needed for the purposes
                described in this Notice, including:
              </p>
              <ul>
                <li>
                  Account and trip records: for the life of the account and
                  typically up to 7 years afterward for disputes, fraud
                  prevention, safety, and legal compliance
                </li>
                <li>
                  Payment records: as required under applicable financial /
                  tax rules (typically up to 7 years)
                </li>
                <li>
                  SOS / safety incident records: typically up to 7 years
                </li>
                <li>
                  Driver KYC / document data: for as long as you remain a
                  driver on the Platform and for a reasonable period afterward
                  for compliance and audit
                </li>
                <li>
                  Analytics and logs: for shorter operational periods unless
                  needed for security investigations
                </li>
              </ul>
              <p>
                When data is no longer required, we delete or anonymize it,
                subject to legal retention duties.
              </p>

              <h2>10. Security</h2>
              <p>
                We use administrative, technical, and organizational measures
                appropriate to the sensitivity of the data, including encrypted
                transit where supported, access controls, and secure cloud
                infrastructure. No method of transmission or storage is
                completely secure. Please protect your device and do not share
                OTPs or passwords with anyone.
              </p>

              <h2>11. Your Rights and Choices</h2>
              <p>Subject to applicable law, you may:</p>
              <ul>
                <li>Access or correct profile information in the app</li>
                <li>
                  Request a copy, correction, or deletion of personal data
                </li>
                <li>
                  Withdraw consent for optional processing (for example
                  marketing, or optional login partners) without affecting
                  processing based on other lawful grounds
                </li>
                <li>
                  Control device permissions and notification settings in your
                  OS settings
                </li>
                <li>
                  Stop using Truecaller login and use phone + OTP instead
                </li>
              </ul>
              <p>
                Requests may be sent to the Grievance Officer in Section 14. We
                may need to verify your identity and may retain certain data
                where the law requires it (for example completed trip or payment
                records).
              </p>

              <h2>12. Children&apos;s Privacy</h2>
              <p>
                The Platform is intended for users aged 18 and above. We do not
                knowingly collect personal data from anyone under 18. If we
                learn that a minor has provided personal data, we will take
                steps to delete it.
              </p>

              <h2>13. Third-Party Services</h2>
              <p>
                The Platform relies on third-party services that process data
                under their own policies, including (as applicable):
              </p>
              <ul>
                <li>Maps / places: Google Maps and related Google APIs</li>
                <li>Push notifications &amp; app infrastructure: Firebase / Google</li>
                <li>Analytics: Google Analytics</li>
                <li>Optional login / verification: Truecaller</li>
                <li>Payments: ICICI Bank and other payment / UPI partners</li>
                <li>Cloud hosting: Amazon Web Services (AWS)</li>
                <li>
                  Apple Sign In or other identity providers, when you choose
                  them
                </li>
              </ul>
              <p>
                Links to third-party sites or apps are not controlled by Raahi.
                Their privacy practices are governed by their own notices. A
                current list of major processors is available on request at
                contactus@raahionrescue.com.
              </p>

              <h2>14. Grievance Officer</h2>
              <p>
                In accordance with applicable Indian law (including the
                Information Technology Act, 2000 and applicable rules, and
                other data protection requirements as they apply), you may
                contact:
              </p>
              <ul>
                <li>Name: Nimish Pandey</li>
                <li>Designation: CEO / Grievance Officer</li>
                <li>Email: contactus@raahionrescue.com</li>
                <li>
                  Address: 52/42, Lohia Marg, Civil Lines, Allahabad – 211001,
                  Uttar Pradesh, India
                </li>
              </ul>
              <p>
                We will acknowledge and respond to privacy complaints within
                the timelines prescribed by applicable law.
              </p>

              <h2>15. Changes to This Notice</h2>
              <p>
                We may update this Privacy Notice from time to time. The
                &quot;Last Updated&quot; date at the top will change when we do. For
                material changes (for example new categories of data or new
                primary purposes), we will provide notice in the app or by
                other reasonable means and obtain fresh consent where required.
                Continued use after non-material updates constitutes acceptance
                of the revised Notice.
              </p>

              <h2>16. Contact</h2>
              <p className="privacy-contact">
                Contact: +91 95691 63463<br />
                Email: contactus@raahionrescue.com<br />
                Website: https://www.raahionrescue.com/privacy<br />
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
