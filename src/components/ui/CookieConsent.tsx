// src/components/ui/CookieConsent.tsx
import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    // Do NOT set consent, so it will keep showing on refresh
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-black text-white p-4 rounded-lg shadow-lg flex items-start gap-4">
      <div className="flex-1 text-sm">
        This website uses cookies to ensure you get the best experience.{" "}
        <a href="#" className="underline text-blue-400">
          Cookies Policy
        </a>
      </div>
      <button
        onClick={handleAccept}
        className="bg-white text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-200 transition"
      >
        Got it
      </button>

      {/* Close icon */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white text-lg leading-none hover:text-red-500"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
};

export default CookieConsent;
