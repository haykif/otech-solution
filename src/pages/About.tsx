import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock, Heart, Shield, Leaf } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Des interventions de qualité avec des matériaux certifiés et une garantie sur tous nos travaux."
    },
    {
      icon: Leaf,
      title: "Éco-responsabilité",
      description: "Solutions durables et respectueuses de l'environnement pour réduire votre impact écologique."
    },
    {
      icon: Heart,
      title: "Proximité",
      description: "À l'écoute de vos besoins, nous privilégions le contact humain et le service personnalisé."
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Une équipe d'experts formés aux dernières technologies et techniques du secteur."
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Clients satisfaits" },
    { icon: Award, number: "15+", label: "Années d'expérience" },
    { icon: CheckCircle, number: "1000+", label: "Projets réalisés" },
    { icon: Clock, number: "24/7", label: "Service d'urgence" },
  ];

  const team = [
    {
      name: "Jean Dupont",
      role: "Fondateur & Directeur",
      experience: "15 ans d'expérience",
      speciality: "Expert en plomberie industrielle",
      description: "Passionné par l'innovation dans le secteur de l'eau et de l'énergie."
    },
    {
      name: "Marie Lambert",
      role: "Responsable Technique",
      experience: "12 ans d'expérience",
      speciality: "Spécialiste traitement de l'eau",
      description: "Experte en solutions de filtration et purification avancées."
    },
    {
      name: "Pierre Moreau",
      role: "Technicien Senior",
      experience: "10 ans d'expérience",
      speciality: "Systèmes énergétiques",
      description: "Spécialisé dans l'installation de pompes à chaleur et systèmes éco-énergétiques."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            À propos d'O TECH Solution
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            15 ans d'expertise au service de votre confort et de vos économies d'énergie
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                Notre Histoire
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fondée en 2009 par Jean Dupont, O TECH Solution est née d'une vision simple : 
                  démocratiser l'accès à des solutions durables de gestion de l'eau et de l'énergie 
                  pour tous.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ce qui a commencé comme une petite entreprise de plomberie locale s'est transformé 
                  en un acteur reconnu de l'optimisation énergétique, sans jamais perdre de vue nos 
                  valeurs fondamentales : proximité, qualité et respect de l'environnement.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aujourd'hui, notre équipe de spécialistes accompagne particuliers et professionnels 
                  dans la transition vers des installations plus efficaces et plus respectueuses de 
                  l'environnement.
                </p>
              </div>
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

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien et notre engagement 
              envers nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="service-card text-center border-0">
                  <CardContent className="p-6">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des professionnels passionnés et expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="testimonial-card text-center group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.experience}
                  </p>
                  <p className="text-sm font-medium text-accent mb-4">
                    {member.speciality}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Accompagner la transition énergétique en proposant des solutions innovantes, 
              durables et accessibles pour la gestion de l'eau et de l'énergie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-sm">
                  Nous investissons dans les dernières technologies pour vous offrir 
                  des solutions toujours plus performantes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Durabilité</h3>
                <p className="text-sm">
                  Chaque installation est pensée pour réduire votre impact environnemental 
                  et vos coûts à long terme.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Accessibilité</h3>
                <p className="text-sm">
                  Des solutions adaptées à tous les budgets avec des financements 
                  et des facilités de paiement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;