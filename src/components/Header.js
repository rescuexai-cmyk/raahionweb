import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isInternalPage = location.pathname !== '/';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = [
    { key: 'aboutUs', hasDropdown: false, path: '/about' },
    { key: 'blogs', hasDropdown: false, path: '/blogs' },
    { key: 'career', hasDropdown: false, path: '/career' },
    { key: 'trustSafety', hasDropdown: false, path: '/safety' },
  ];

  return (
    <header className={`header ${isInternalPage ? 'header-internal' : ''}`}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src="/raahi-logo.png" alt="Raahi" className="logo-image" />
          </Link>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <div
              className="nav-backdrop"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="nav-panel">
              <button
                type="button"
                className="nav-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.key} className="nav-item">
                    <Link
                      to={item.path}
                      className="nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav[item.key]}
                    </Link>
                  </li>
                ))}
                <li className="nav-item nav-item-mobile-only">
                  <Link
                    to="/help"
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.contactUs}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="header-right">
          <div className="header-actions">
            <Link to="/help" className="nav-link header-contact-link">{t.nav.contactUs}</Link>
            {!isInternalPage && (
              <div className="language-selector-wrap" ref={langRef}>
                <button type="button" className="language-selector" onClick={() => setLangOpen(!langOpen)} aria-haspopup="listbox" aria-expanded={langOpen}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span>{language === 'en' ? 'EN' : 'हि'}</span>
                </button>
                {langOpen && (
                  <div className="language-dropdown" role="listbox">
                    <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => { setLanguage('en'); setLangOpen(false); }}>English</button>
                    <button type="button" className={language === 'hi' ? 'active' : ''} onClick={() => { setLanguage('hi'); setLangOpen(false); }}>हिंदी</button>
                  </div>
                )}
              </div>
            )}
          </div>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
