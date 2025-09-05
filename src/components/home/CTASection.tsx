import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative section-padding bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative container-max text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à optimiser votre installation ?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
            Nous vous accompagnons dans tous vos projets d'eau et d'énergie.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/85 group">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
              <a href="tel:+33767713317">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Devis Gratuit</div>
              <p className="text-sm">Évaluation personnalisée de vos besoins sans engagement</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Intervention Rapide</div>
              <p className="text-sm text-red-500 font-bold">Service d'urgence 7j/7 pour tous vos problèmes</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Garantie Qualité</div>
              <p className="text-sm">Tous nos travaux sont garantis et certifiés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
