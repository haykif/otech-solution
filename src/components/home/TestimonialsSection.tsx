import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucy Hapetian",
      role: "Particulier",
      location: "Annemasse",
      rating: 5,
      comment: "Service irréprochable! L'équipe d'O TECH Solution a installé notre nouveau système de chauffage rapidement et dans les délais annoncés. Très professionnels et à l’écoute, il nous a donné de bons conseils pour l’utiliser au mieux et a laissé tout propre derrière eux. Franchement, une intervention efficace et rassurante, je recommande!",
      project: "Installation système de chauffage"
    },
    {
      name: "Pierre Dumas",
      role: "Particulier",
      location: "St-Jeoire",
      rating: 4,
      comment: "J’ai fait installer une cabine de douche par O TECH et franchement, impeccable! Le technicien est arrivé à l’heure, super professionnel et très soigneux. La pose est nickel, tout est stable et bien ajusté. Super service, je recommande!",
      project: "Installation cabine de douche"
    },
    {
      name: "Clara Laurent",
      role: "Particulier",
      location: "Thyez",
      rating: 5,
      comment: "Fuite énorme ce matin, panique totale… j’ai appelé O TECH et wow! Arrivée rapide, efficace et super sympa. Problème réglé en un rien de temps, mais bon… maintenant il va falloir tout remplacer mes meubles ont pris cher… 😅 Merci quand même pour le sauvetage express!",
      project: "Dépannage d'urgence"
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