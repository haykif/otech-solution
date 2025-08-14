import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wrench, Droplets, Thermometer, Settings, Check, ArrowRight } from "lucide-react";
import plumbingImage from "@/assets/plumbing-service.jpg";
import waterTreatmentImage from "@/assets/water-treatment.jpg";
import heatingImage from "@/assets/heating-system.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Plomberie & Installation",
      image: plumbingImage,
      description: "Installation et réparation complète de systèmes de plomberie pour particuliers et professionnels. Notre équipe d'experts intervient rapidement avec des matériaux de haute qualité.",
      features: [
        "Installation de sanitaires et robinetterie",
        "Réparation de fuites et canalisations",
        "Mise en conformité des installations",
        "Dépannage d'urgence 24h/24",
        "Raccordement eau chaude/froide",
        "Installation de chauffe-eau"
      ],
      price: "À partir de 80€"
    },
    {
      icon: Droplets,
      title: "Traitement de l'Eau",
      image: waterTreatmentImage,
      description: "Solutions complètes de filtration et purification d'eau. Nous analysons la qualité de votre eau et proposons des systèmes adaptés à vos besoins spécifiques.",
      features: [
        "Analyse gratuite de la qualité de l'eau",
        "Systèmes de filtration sur mesure",
        "Adoucisseurs d'eau performants",
        "Purification par UV et ozonation",
        "Maintenance des équipements",
        "Conseil en optimisation"
      ],
      price: "À partir de 300€"
    },
    {
      icon: Thermometer,
      title: "Systèmes Énergétiques",
      image: heatingImage,
      description: "Installation et optimisation de systèmes de chauffage éco-responsables. Réduisez votre consommation énergétique avec nos solutions innovantes.",
      features: [
        "Pompes à chaleur haute performance",
        "Chaudières à condensation",
        "Radiateurs et planchers chauffants",
        "Systèmes de régulation intelligents",
        "Audit énergétique complet",
        "Optimisation des performances"
      ],
      price: "À partir de 1200€"
    },
    {
      icon: Settings,
      title: "Maintenance Préventive",
      image: maintenanceImage,
      description: "Programmes de maintenance personnalisés pour assurer la longévité et l'efficacité optimale de toutes vos installations eau et énergie.",
      features: [
        "Contrôles périodiques programmés",
        "Diagnostic complet des installations",
        "Nettoyage et entretien spécialisé",
        "Remplacement préventif de pièces",
        "Conseils d'utilisation optimale",
        "Rapport détaillé après intervention"
      ],
      price: "À partir de 150€"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Solutions complètes pour tous vos besoins en plomberie, 
            traitement de l'eau et optimisation énergétique
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-row-dense' : ''}`}>
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-medium group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-primary font-semibold text-lg">
                          {service.price}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-energy flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild size="lg" className="btn-secondary group">
                      <Link to="/contact">
                        Demander un devis
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et obtenir un devis gratuit adapté à votre situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero group">
                <Link to="/contact">
                  Obtenir un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+33123456789">
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;