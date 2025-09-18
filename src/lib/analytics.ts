// src/lib/analytics.ts
export function loadGtag() {
  if (document.getElementById("ga-script")) return; // avoid duplicates

  // 1. Load the Google Analytics script dynamically
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-L6ZH8PMFXP";
  script.async = true;
  script.id = "ga-script";
  document.head.appendChild(script);

  // 2. Setup gtag after script loads
  script.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-L6ZH8PMFXP");
  };
}
