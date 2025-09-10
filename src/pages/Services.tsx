import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Thermometer, Check, ArrowRight, AlertTriangle, Snowflake } from "lucide-react";
import tapisBleu from "@/assets/tapis_bleu.webp";
import chaufferieGeant from "@/assets/chaufferie_geant.webp";
import cabineMagenta from "@/assets/cabine-magenta.webp";
import soudure from "@/assets/soudure.webp";
import img0093 from "@/assets/caroussel_image/IMG_0093.webp";
import img0094 from "@/assets/caroussel_image/IMG_0094.webp";
import img0096 from "@/assets/caroussel_image/IMG_0096.webp";
import img0099 from "@/assets/caroussel_image/IMG_0099.webp";
import img2512 from "@/assets/caroussel_image/IMG_2512.webp";
import img2513 from "@/assets/caroussel_image/IMG_2513.webp";
import img2514 from "@/assets/caroussel_image/IMG_2514.webp";
import img2516 from "@/assets/caroussel_image/IMG_2516.webp";
import img2517 from "@/assets/caroussel_image/IMG_2517.webp";
import img2518 from "@/assets/caroussel_image/IMG_2518.webp";
import img2519 from "@/assets/caroussel_image/IMG_2519.webp";
import img2521 from "@/assets/caroussel_image/IMG_2521.webp";
import img2522 from "@/assets/caroussel_image/IMG_2522.webp";
import img2580 from "@/assets/caroussel_image/IMG_2580.webp";
import img3026 from "@/assets/caroussel_image/IMG_3026.webp";
import img3027 from "@/assets/caroussel_image/IMG_3027.webp";
import img3028 from "@/assets/caroussel_image/IMG_3028.webp";
import img3029 from "@/assets/caroussel_image/IMG_3029.webp";
import img3030 from "@/assets/caroussel_image/IMG_3030.webp";
import img3099 from "@/assets/caroussel_image/IMG_3099.webp";
import img3533 from "@/assets/caroussel_image/IMG_3533.webp";
import img3538 from "@/assets/caroussel_image/IMG_3538.webp";
import img5155 from "@/assets/caroussel_image/IMG_5155.webp";
import img5156 from "@/assets/caroussel_image/IMG_5156.webp";
import img5157 from "@/assets/caroussel_image/IMG_5157.webp";
import img5158 from "@/assets/caroussel_image/IMG_5158.webp";
import img5160 from "@/assets/caroussel_image/IMG_5160.webp";
import img5181 from "@/assets/caroussel_image/IMG_5181.webp";
import img6950 from "@/assets/caroussel_image/IMG_6950.webp";
import img6951 from "@/assets/caroussel_image/IMG_6951.webp";
import img6995 from "@/assets/caroussel_image/IMG_6995.webp";
import img6997 from "@/assets/caroussel_image/IMG_6997.webp";
import img6999 from "@/assets/caroussel_image/IMG_6999.webp";
import img7002 from "@/assets/caroussel_image/IMG_7002.webp";
import img7976 from "@/assets/caroussel_image/IMG_7976.webp";
import img8552 from "@/assets/caroussel_image/IMG_8552.webp";
import img8553 from "@/assets/caroussel_image/IMG_8553.webp";
import img8730 from "@/assets/caroussel_image/IMG_8730.webp";
import ImageCarousel from "@/components/ui/ImageCarousel";

// Images pour le carrousel (hors logo, soudure, hero-image)
const carrouselImagesRaw = [
  cabineMagenta,
  chaufferieGeant,
  tapisBleu,
  img0093,
  img0094,
  img0096,
  img0099,
  img2512,
  img2513,
  img2514,
  img2516,
  img2517,
  img2518,
  img2519,
  img2521,
  img2522,
  img2580,
  img3026,
  img3027,
  img3028,
  img3029,
  img3030,
  img3099,
  img3533,
  img3538,
  img5155,
  img5156,
  img5157,
  img5158,
  img5160,
  img5181,
  img6950,
  img6951,
  img6995,
  img6997,
  img6999,
  img7002,
  img7976,
  img8552,
  img8553,
  img8730,
];

// Mélange le tableau à chaque chargement
function shuffleArray(array: any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const carrouselImages = shuffleArray(carrouselImagesRaw);

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Plomberie & Installation",
      image: tapisBleu,
      description: "Installation et réparation complète de systèmes de plomberie pour particuliers et professionnels. Notre équipe d'experts intervient rapidement avec des matériaux de haute qualité.",
      features: [
        "Installation de sanitaires et robinetterie",
        "Réparation de fuites et canalisations",
        "Mise en conformité des installations",
        "Adoucisseurs d'eau performants",
        "Raccordement eau chaude/froide",
        "Installation de chauffe-eau"
      ],
      price: "À partir de 80€"
    },
    {
      icon: AlertTriangle,
      title: "Dépannage d'urgence 7j/7",
      image: soudure, // image de secours si besoin
      description: "Intervention express pour pannes et fuites critiques: détection, sécurisation et remise en service. Nous intervenons 7j/7 pour limiter les dégâts et rétablir la situation.",
      features: [
        "Recherche et réparation de fuites",
        "Dégorgement et débouchage canalisations",
        "Sécurisation des installations",
        "Remplacement express de pièces",
        "Mise hors d'eau / hors gel",
        "Intervention sous 2h selon zone"
      ],
      price: "À partir de 90€"
    },
    {
      icon: Thermometer,
      title: "Systèmes Énergétiques",
      image: chaufferieGeant,
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
      icon: Snowflake,
      title: "Climatisation",
      image: cabineMagenta, // Remplacer par une image de clim si disponible
      description: "Installation de systèmes de climatisation pour un confort optimal toute l'année, chez les particuliers et professionnels. Solutions sur mesure adaptées à vos besoins.",
      features: [
        "Installation de climatiseurs split et multisplit",
        "Conseils personnalisés",
        "Solutions sur mesure"
      ],
      price: "À partir de 350€"
    }
  ];



  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative container-max text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Solutions complètes pour tous vos besoins en plomberie, 
              traitement de l'eau et optimisation énergétique
            </p>
          </div>
        </div>
      </section>




      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              const isUrgence = service.title.toLowerCase().includes("dépannage");
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
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isUrgence ? 'bg-red-600' : 'bg-gradient-primary'}`}>
                        <IconComponent className={`h-8 w-8 ${isUrgence ? 'text-white' : 'text-white'}`} />
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

                    <Button asChild size="lg" className={`${isUrgence ? 'bg-red-600 hover:bg-red-700 text-white' : 'btn-secondary'} group`}>
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
          {/* Carrousel juste après la section services, sous la climatisation */}
          <div className="my-12">
            <ImageCarousel images={carrouselImages} altPrefix="Climatisation" />
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