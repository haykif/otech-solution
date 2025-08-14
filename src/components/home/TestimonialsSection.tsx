import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Particulier",
      location: "Paris 16ème",
      rating: 5,
      comment: "Service impeccable ! L'équipe d'O TECH a installé notre nouveau système de chauffage en respectant les délais. Très professionnels et de bons conseils.",
      project: "Installation système de chauffage"
    },
    {
      name: "Pierre Martin",
      role: "Gérant de restaurant",
      location: "Lyon",
      rating: 5,
      comment: "Intervention rapide pour une fuite d'eau dans notre cuisine professionnelle. Réparation efficace et tarifs transparents. Je recommande vivement !",
      project: "Réparation d'urgence"
    },
    {
      name: "Sophie Laurent",
      role: "Copropriétaire",
      location: "Marseille",
      rating: 5,
      comment: "Installation d'un système de traitement d'eau pour notre résidence. Excellent travail, équipe compétente et suivi irréprochable du projet.",
      project: "Traitement de l'eau"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Témoignages Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité. 
            Découvrez leurs retours d'expérience avec O TECH Solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card group hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-energy text-energy" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;