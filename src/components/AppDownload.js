import React from 'react';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="container">
        <div className="app-download-content">
          <h2 className="app-download-title">Do more in the app</h2>
          
          <div className="app-download-options">
            <div className="download-buttons">
              <a href="#" className="store-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="store-text">
                  <span className="store-label">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
              
              <a href="#" className="store-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="store-text">
                  <span className="store-label">Get it on</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
            </div>
            
            <div className="qr-section">
              <div className="qr-code">
                <svg viewBox="0 0 100 100" width="80" height="80">
                  <rect x="0" y="0" width="100" height="100" fill="#fff"/>
                  <rect x="10" y="10" width="25" height="25" fill="#000"/>
                  <rect x="65" y="10" width="25" height="25" fill="#000"/>
                  <rect x="10" y="65" width="25" height="25" fill="#000"/>
                  <rect x="15" y="15" width="15" height="15" fill="#fff"/>
                  <rect x="70" y="15" width="15" height="15" fill="#fff"/>
                  <rect x="15" y="70" width="15" height="15" fill="#fff"/>
                  <rect x="18" y="18" width="9" height="9" fill="#000"/>
                  <rect x="73" y="18" width="9" height="9" fill="#000"/>
                  <rect x="18" y="73" width="9" height="9" fill="#000"/>
                  <rect x="40" y="10" width="5" height="5" fill="#000"/>
                  <rect x="50" y="10" width="5" height="5" fill="#000"/>
                  <rect x="40" y="20" width="5" height="5" fill="#000"/>
                  <rect x="45" y="25" width="5" height="5" fill="#000"/>
                  <rect x="55" y="20" width="5" height="5" fill="#000"/>
                  <rect x="40" y="40" width="20" height="20" fill="#000"/>
                  <rect x="45" y="45" width="10" height="10" fill="#fff"/>
                  <rect x="48" y="48" width="4" height="4" fill="#000"/>
                  <rect x="10" y="40" width="5" height="5" fill="#000"/>
                  <rect x="20" y="45" width="5" height="5" fill="#000"/>
                  <rect x="25" y="50" width="5" height="5" fill="#000"/>
                  <rect x="65" y="40" width="5" height="5" fill="#000"/>
                  <rect x="75" y="45" width="5" height="5" fill="#000"/>
                  <rect x="80" y="50" width="5" height="5" fill="#000"/>
                  <rect x="65" y="65" width="5" height="5" fill="#000"/>
                  <rect x="75" y="70" width="5" height="5" fill="#000"/>
                  <rect x="70" y="80" width="10" height="5" fill="#000"/>
                  <rect x="85" y="75" width="5" height="10" fill="#000"/>
                </svg>
              </div>
              <div className="qr-text">
                <div className="raahi-badge">
                  <span className="raahi-logo-text">raahi</span>
                </div>
                <span className="qr-label">Scan to download</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
