import React from 'react';
import './Features.css';
import { useLanguage } from '../context/LanguageContext';
import section1 from '../assets/section-1.png';
import section2 from '../assets/section-2.png';
import section3 from '../assets/section-3.png';

const featureConfig = [
  { id: 1, key: 'section1', image: section1, imageAlt: 'Raahi taxi in the city', reversed: false, bgColor: 'cream' },
  { id: 2, key: 'section2', image: section2, imageAlt: 'Raahi auto-rickshaw', reversed: true, bgColor: 'white' },
  { id: 3, key: 'section3', image: section3, imageAlt: 'Raahi fleet on the road', reversed: false, bgColor: 'cream' },
];

const Features = () => {
  const { t } = useLanguage();
  return (
    <section className="features">
      {featureConfig.map((feature) => {
        const content = t.features[feature.key];
        return (
          <div
            key={feature.id}
            className={`feature-block ${feature.reversed ? 'reversed' : ''} bg-${feature.bgColor}`}
          >
            <div className="container">
              <div className="feature-content">
                <div className="feature-text">
                  <p className="feature-subtitle-label">{content.subtitle}</p>
                  <h2 className="feature-title">{content.title}</h2>
                  <p className="feature-body">{content.body}</p>
                  <a href="#" className="get-app-btn">{t.getTheApp}</a>
                </div>
                <div className="feature-image-wrap">
                  <img src={feature.image} alt={feature.imageAlt} className="feature-image-single" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
