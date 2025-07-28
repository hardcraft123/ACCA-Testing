import React, { useEffect, useState } from 'react';
import '../../assets/styles/style.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'accepted') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(true); // Stay visible on refresh or navigation
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <p>
        This website uses cookies to ensure you get the best experience.{' '}
        <a href="/cookies-policy" target="_blank" rel="noopener noreferrer">Cookies Policy</a>
      </p>
      <div className="cookie-buttons">
        <button onClick={handleAccept} className="cookie-accept">Accept</button>
        <button onClick={handleDecline} className="cookie-decline">Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
