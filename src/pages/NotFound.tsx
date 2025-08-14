import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Page non trouvée</p>
        <p className="text-muted-foreground mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
