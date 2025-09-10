import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Wrench, Thermometer, Settings, ArrowRight, AlertTriangle, Snowflake } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Wrench,
      title: "Plomberie & Installation Sanitaire",
      description: "Installation et réparation de systèmes de plomberie pour particuliers et professionnels. Expertise garantie et matériaux de qualité.",
      features: ["Installation tuyauterie", "Pose de robinetterie", "Réparations"]
    },
    {
      icon: AlertTriangle,
      title: "Dépannage URGENT 7j/7",
      description: "Réactivité maximale face aux urgences plomberie et pannes. Notre équipe sécurise vos équipements et assure une remise en service rapide et fiable.",
      features: ["Fuites", "Intervention rapide", "Sécurisation installations"]
    },
    {
      icon: Thermometer,
      title: "Systèmes Énergétiques",
      description: "Solutions de chauffage éco-responsables et systèmes d'optimisation énergétique pour réduire votre consommation.",
      features: ["Chauffage efficace", "Pompes à chaleur", "Optimisation énergétique"]
    },
    {
      icon: Snowflake,
      title: "Climatisation",
      description: "Installation de systèmes de climatisation pour garantir un air frais et sain toute l'année, adaptés à vos besoins résidentiels ou professionnels.",
      features: ["Installation de climatiseurs split et multisplit", "Conseils personnalisés", "Solutions sur mesure"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-secondary/20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes pour tous vos besoins en plomberie, 
            traitement de l'eau et optimisation énergétique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon as any;
            const isUrgence = service.title.toLowerCase().includes("dépannage");
            return (
              <Card key={index} className="service-card group border-0">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300 ${isUrgence ? 'bg-red-600' : 'bg-gradient-primary'}`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center justify-rifht">
                        <div className={`w-2 h-2 rounded-full mr-2 ${isUrgence ? 'bg-red-600' : 'bg-primary'}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="btn-hero group">
            <Link to="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;