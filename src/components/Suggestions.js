import React from 'react';
import './Suggestions.css';
import { useLanguage } from '../context/LanguageContext';
import iconCabMini from '../assets/icon-cab-mini.png';
import iconAuto from '../assets/icon-auto.png';
import iconCabXL from '../assets/icon-cab-xl.png';
import iconRescue from '../assets/icon-rescue.png';
import iconPremium from '../assets/icon-premium.png';
import iconDriverRental from '../assets/icon-driver-rental.png';

const suggestions = [
  { id: 'rescue', key: 'rescue', isNew: true, badge: null, icon: iconRescue },
  { id: 'premium', key: 'premium', isNew: false, badge: null, icon: iconPremium },
  { id: 'driver-rental', key: 'driverRental', isNew: false, badge: 'Hourly', icon: iconDriverRental },
  { id: 'cab-mini', key: 'cabMini', isNew: false, badge: null, icon: iconCabMini },
  { id: 'auto', key: 'auto', isNew: false, badge: null, icon: iconAuto },
  { id: 'cab-xl', key: 'cabXL', isNew: false, badge: null, icon: iconCabXL },
];

const Suggestions = ({ selectedService, setSelectedService }) => {
  const { t } = useLanguage();
  const handleCardClick = (serviceId) => {
    setSelectedService(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="suggestions" id="suggestions">
      <div className="container">
        <h2 className="suggestions-title">{t.services}</h2>
        <div className="suggestions-grid">
          {suggestions.map((item) => (
            <div 
              key={item.id} 
              className={`suggestion-card ${selectedService === item.id ? 'active' : ''}`}
              onClick={() => handleCardClick(item.id)}
            >
              <div className="suggestion-content">
                <div className="suggestion-header">
                  <h3 className="suggestion-name">{t.suggestions[item.key].title}</h3>
                  {item.isNew && <span className="new-badge">NEW!</span>}
                  {item.badge && <span className="badge-dark">{item.badge}</span>}
                </div>
                <p className="suggestion-desc">{t.suggestions[item.key].description}</p>
              </div>
              <div className="suggestion-illustration">
                <img src={item.icon} alt={t.suggestions[item.key].title} className="suggestion-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suggestions;
