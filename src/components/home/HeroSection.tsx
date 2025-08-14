import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="O TECH Solution - Solutions durables pour l'eau et l'énergie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo and Company Name */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <Droplets className="h-16 w-16 text-white drop-shadow-lg" />
              <Zap className="h-12 w-12 text-energy-foreground drop-shadow-lg" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="logo-text text-6xl md:text-8xl font-bold mb-4 drop-shadow-xl">
            O TECH
            <span className="block text-4xl md:text-6xl mt-2">Solution</span>
          </h1>

          {/* Slogan */}
          <p className="slogan-text text-2xl md:text-3xl font-medium mb-8 drop-shadow-lg">
            Eau maîtrisée, énergie optimisée
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-white/90 leading-relaxed">
            Expert en plomberie et optimisation énergétique, nous proposons des solutions 
            durables et innovantes pour particuliers et professionnels. 
            Maîtrisez votre consommation d'eau et d'énergie avec nos services sur mesure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="btn-hero group">
              <Link to="/services">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Devis gratuit
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-white/80">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Certifié & Assuré</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="h-5 w-5" />
              <span className="text-sm">Solutions Écologiques</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Économies d'Énergie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;