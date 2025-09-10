import { Link } from "react-router-dom";
import { Phone, Mail, MapPin} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center space-x-1">
                <img 
                  src="/assets/otech_logo.webp" 
                  alt="Logo Otech" 
                  className="h-8 w-8 group-hover:opacity-80 transition-opacity duration-300" 
                />
              </div>
              <div className="flex flex-col">
                <span className="logo-text text-xl text-primary group-hover:text-accent transition-colors duration-300">
                  O TECH
                </span>
                <span className="slogan-text text-xs text-muted-foreground -mt-1">
                  Solution
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground italic">
              "Eau maîtrisée, énergie optimisée"
            </p>
            <p className="text-sm text-muted-foreground">
              Expert en plomberie, traitement de l'eau et optimisation énergétique. 
              Solutions durables pour particuliers et professionnels.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</Link>
              
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">À propos</Link>
              
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Nos Services</h3>
            <nav className="space-y-2">
              <p className="text-sm text-muted-foreground">Plomberie & Installation Sanitaire</p>
              <p className="text-sm text-muted-foreground">Dépannage <span className="text-red-500 font-bold">URGENT</span> 7j/7</p>
              <p className="text-sm text-muted-foreground">Systèmes énergétiques</p>
              <p className="text-sm text-muted-foreground">Climatisation</p>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <Link to="tel:0767713317" className="text-sm text-muted-foreground">07 67 71 33 17</Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <Link to="mailto:contact@otech-solution.com" className="text-sm text-muted-foreground">contact@otech-solution.com</Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  1 Rue Raymond Poincaré<br />
                  74300 Cluses
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  3 Rue des Frères Tassil<br />
                  74100 Annemasse
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} O TECH Solution. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/mentions-legales"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                to="/politique-confidentialite"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;