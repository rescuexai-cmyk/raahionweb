import React, { useState } from 'react';
import './FAQ.css';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(null);
  const faqItems = t.faq.items;

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq section">
      <div className="container">
        <h2 className="faq-title">{t.faq.title}</h2>
        
        <div className="faq-list">
          {faqItems.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openId === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openId === index}
              >
                <span>{faq.question}</span>
                <svg 
                  className="faq-icon" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
