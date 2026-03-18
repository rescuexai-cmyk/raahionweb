import React, { useState } from 'react';
import './SupportChatbot.css';

const SupportChatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {chatOpen && (
        <div className="chatbot-panel global-chatbot">
          <div className="chatbot-header">
            <span>Raahi Support</span>
            <button type="button" className="chatbot-close" onClick={() => setChatOpen(false)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div className="chatbot-body">
            <div className="chatbot-message bot">Hi! How can we help? Ask about rides, bookings, or type below.</div>
            <div className="chatbot-input-wrap">
              <input type="text" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} className="chatbot-input" />
              <button type="button" className="chatbot-send">Send</button>
            </div>
          </div>
        </div>
      )}
      <button type="button" className="chatbot-fab global-chatbot-fab" onClick={() => setChatOpen(!chatOpen)} aria-label="Open support chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </button>
    </>
  );
};

export default SupportChatbot;
