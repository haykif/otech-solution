import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, AlertOctagon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-max px-4 md:px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1 group pl-2 md:pl-0">
            <div className="flex items-center space-x-1">
              <img
                src="/assets/otech_logo_little.webp"
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right side (desktop + mobile) */}
          <div className="flex items-center space-x-3">
            {/* CTA Devis (desktop only) */}
            <div className="hidden md:flex">
              <Button asChild variant="default" className="btn-secondary">
                <Link to="/contact">Devis gratuit</Link>
              </Button>
            </div>

            {/* Urgence (always visible, desktop + mobile) */}
            <a
              href="tel:+33767713317"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
              aria-label="Appeler en urgence O TECH au 07 67 71 33 17"
              title="Urgence 7/7 — 07 67 71 33 17"
            >
              <AlertOctagon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Urgence 7/7</span>
              <span className="tabular-nums">07 67 71 33 17</span>
            </a>

            {/* Mobile menu button */}
            <Button
              name="MenuHamburger"
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation (menu) */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild variant="default" className="w-full btn-secondary">
                  <Link to="/contact">Devis gratuit</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
