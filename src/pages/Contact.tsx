import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Map from "@/components/home/Map";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais. Un email de confirmation vous a été envoyé."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone, 
      title: "Téléphone",
      details: "07 67 71 33 17",
      description: "Service d'urgence 24h/24",
      link: "tel:0767713317"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@otech-solution.com",
      description: "Réponse entre 24h et 48h",
      link: "mailto:contact@otech-solution.com"
    },
    {
      icon: MapPin,
      title: "Adresses",
      details: "Nos bureaux et points d'intervention",
      description: "Cluses et Annemasse",
      links: [
        "https://www.google.com/maps/search/?api=1&query=1%20Rue%20Raymond%20Poincar%C3%A9%2C%2074300%20Cluses",
        "https://www.google.com/maps/search/?api=1&query=3%20Rue%20des%20Fr%C3%A8res%20Tassil%2C%2074100%20Annemasse"
      ],
      labels: [
        "1 Rue Raymond Poincaré, 74300 Cluses",
        "3 Rue des Frères Tassil, 74100 Annemasse"
      ]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Lun-Ven: 8h-18h, Sam: 9h-16h",
      description: "Urgences 7j/7 24h/24",
      link: null
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Besoin d'un devis ou d'une intervention ? Notre équipe est à votre écoute
          </p>
        </div>
      </section>


      {/* Contact Info Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon as any;
              const links = (info as any).links as string[] | undefined;
              const labels = (info as any).labels as string[] | undefined;
              return (
                <Card key={index} className="service-card text-center border-0 group">
                  <CardContent className="p-6">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {links && labels ? (
                      <div className="flex flex-col items-center gap-1">
                        {links.map((href, i) => (
                          <a
                            key={href}
                            href={href}
                            className="text-primary font-medium hover:text-accent transition-colors"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {labels[i]}
                          </a>
                        ))}
                      </div>
                    ) : info.link ? (
                      <a
                        href={(info as any).link}
                        className="text-primary font-medium hover:text-accent transition-colors"
                        target={info.title === 'Email' ? undefined : "_blank"}
                        rel={info.title === 'Email' ? undefined : "noreferrer"}
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-primary font-medium">{info.details}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map Section */}
            <div>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Notre zone d'intervention
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Découvrez notre zone de couverture en Haute-Savoie et les environs
                  </p>
                </CardHeader>
                <CardContent>
                  <Map />
                  <div className="mt-6 space-y-4">
                    <h4 className="font-semibold text-foreground">Zones couvertes :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cluses</li>
                      <li>• Bonneville</li>
                      <li>• Thonon-les-Bains</li>
                      <li>• Annecy</li>
                      <li>• La Roche-sur-Foron</li>
                      <li>• Annemasse</li>
                      <li>• La Clusaz</li>
                      <li>• Samoëns</li>
                      <li>• Sallanches</li>
                      <li>• Chamonix-Mont-Blanc</li>
                      <li>• Megeve</li>
                      <li>• ...</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Demande de devis gratuit
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Remplissez ce formulaire et nous vous recontacterons rapidement 
                    avec une proposition personnalisée.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="01 23 45 67 89"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Type de service</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleInputChange("service", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plomberie">Plomberie & Installation Sanitaire</SelectItem>
                            <SelectItem value="urgence">Dépannage d'urgence</SelectItem>
                            <SelectItem value="energie">Systèmes énergétiques</SelectItem>
                            <SelectItem value="climatisation">Climatisation</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Décrivez votre projet ou votre problème..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-hero group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Envoyer ma demande
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Champs obligatoires. Nous nous engageons à vous répondre sous 24h.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-medium mt-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Questions fréquentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Les devis sont-ils vraiment gratuits ?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Oui, tous nos devis sont gratuits et sans engagement. 
                        Nous nous déplaçons pour évaluer vos besoins.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Quels sont vos délais d'intervention ?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Pour les urgences : intervention sous 2h. 
                        Pour les projets planifiés : sous 48h à 1 semaine.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Proposez-vous des facilités de paiement ?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Oui, nous proposons des solutions de financement 
                        et des facilités de paiement pour tous vos projets.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;