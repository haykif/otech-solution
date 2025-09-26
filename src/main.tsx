import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import App from './App.tsx';
import './index.css';

// Wrapper pour injecter GA globalement
function AnalyticsWrapper() {
  useEffect(() => {
    // Charger le script Google Analytics
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-JXEC2H08JT";
    script.async = true;
    document.head.appendChild(script);

    // Initialiser GA
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-JXEC2H08JT");
  }, []);

  return <App />;
}

// Monter l'app avec le wrapper GA
createRoot(document.getElementById("root")!).render(
  <AnalyticsWrapper />
);
