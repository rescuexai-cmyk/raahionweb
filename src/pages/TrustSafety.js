import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import { useLanguage } from '../context/LanguageContext';

const TrustSafety = () => {
  const { t } = useLanguage();
  const ts = t.trustSafety;
  return (
    <div className="page trust-safety-page">
      <section className="page-hero-split">
        <div className="page-hero-split-content">
          <h1 className="page-title">{ts.pageTitle}</h1>
          <p className="page-subtitle">{ts.pageSubtitle}</p>
        </div>
        <div className="page-hero-split-image">
          <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80" alt="Safe travel with Raahi" />
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>{ts.heading1}</h2>
              <p>{ts.p1a}</p>
              <p>{ts.p1b}</p>

              <h2>{ts.heading2}</h2>
              <p>{ts.p2a}</p>
              <p>{ts.p2b}</p>

              <h2>{ts.heading3}</h2>
              <p>{ts.p3}</p>

              <h2>{ts.heading4}</h2>
              <p>
                {ts.p4}
                <Link to="/help" className="content-link"> {ts.contactLink}</Link>
                {ts.p4suffix}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustSafety;
