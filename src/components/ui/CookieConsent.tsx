import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState({
    functional: false,
    performance: false,
    targeting: false,
    doNotSell: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleManageCookies = () => {
    setShowPreferences(true);
  };

  const handleConfirmChoices = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePrefs));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const togglePref = (key: keyof typeof cookiePrefs) => {
    setCookiePrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      {!showPreferences ? (
        <>
          <button className="cookie-close" onClick={handleClose}>×</button>
          <p><strong>We Rely on Cookies</strong></p>
          <p>
            We use cookies to optimise our communications to you and enhance your 
            experience. By clicking on the Accept All button, you agree to the collection of 
            cookies. You can also adjust your preferences by clicking on Customise. For
            more information, please see our Cookie policy
          </p>
          <div className="flex gap-3">
            <button className="cookie-accept" onClick={handleAccept}>Accept All</button>
            <button className="cookie-accept" onClick={handleClose}>Decline Cookies</button>
            <button className="cookie-manage" onClick={handleManageCookies}>Manage Cookies</button>
          </div>
        </>
      ) : (
        <div>
          <button className="cookie-close" onClick={handleClose}>×</button>
          <p><strong>Manage Consent Preferences</strong></p>
          <div className="cookie-pref">
            <span>Functional Cookies</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={cookiePrefs.functional}
                onChange={() => togglePref('functional')}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="cookie-pref">
            <span>Performance Cookies</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={cookiePrefs.performance}
                onChange={() => togglePref('performance')}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="cookie-pref">
            <span>Targeting Cookies</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={cookiePrefs.targeting}
                onChange={() => togglePref('targeting')}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="cookie-pref">
            <span>Do Not Sell or Share My Personal Information</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={cookiePrefs.doNotSell}
                onChange={() => togglePref('doNotSell')}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex justify-end mt-4">
            <button className="cookie-accept" onClick={handleConfirmChoices}>Confirm My Choices</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
