import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const AboutPreview = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Clients satisfaits" },
    { icon: Award, number: "15+", label: "Années d'expérience" },
    { icon: CheckCircle, number: "1000+", label: "Projets réalisés" },
    { icon: Clock, number: "24/7", label: "Service d'urgence" },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                À propos d'O TECH Solution
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Depuis plus de 15 ans, O TECH Solution accompagne particuliers et professionnels 
                dans la maîtrise de leur consommation d'eau et d'énergie.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre expertise en plomberie traditionnelle s'enrichit constamment d'innovations 
                technologiques pour vous proposer des solutions durables, économiques et 
                respectueuses de l'environnement.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Nos engagements</h3>
              <ul className="space-y-3">
                {[
                  "Intervention rapide et service de qualité",
                  "Solutions éco-responsables et durables",
                  "Transparence des tarifs et devis gratuits",
                  "Suivi personnalisé de chaque projet"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-energy flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild size="lg" className="btn-secondary">
              <Link to="/about">
                En savoir plus sur notre équipe
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-card shadow-soft">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;