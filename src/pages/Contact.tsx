import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
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

    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: "+33 1 23 45 67 89",
      description: "Service d'urgence 24h/24",
      link: "tel:+33123456789"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@otech-solution.fr",
      description: "Réponse sous 24h",
      link: "mailto:contact@otech-solution.fr"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "123 Avenue de l'Innovation, 75001 Paris",
      description: "Zone d'intervention : Île-de-France",
      link: "https://maps.google.com"
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
        <div className="container-max text-center">
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
              const IconComponent = info.icon;
              return (
                <Card key={index} className="service-card text-center border-0 group">
                  <CardContent className="p-6">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary font-medium hover:text-accent transition-colors"
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
                          placeholder="+33 1 23 45 67 89"
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
                            <SelectItem value="plomberie">Plomberie & Installation</SelectItem>
                            <SelectItem value="traitement-eau">Traitement de l'eau</SelectItem>
                            <SelectItem value="energie">Systèmes énergétiques</SelectItem>
                            <SelectItem value="maintenance">Maintenance préventive</SelectItem>
                            <SelectItem value="urgence">Dépannage d'urgence</SelectItem>
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

                    <Button type="submit" size="lg" className="w-full btn-hero group">
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer ma demande
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Champs obligatoires. Nous nous engageons à vous répondre sous 24h.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Zone d'intervention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground mb-2">
                        Île-de-France
                      </p>
                      <p className="text-muted-foreground">
                        Paris et banlieue dans un rayon de 50km
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <h4 className="font-semibold text-foreground">Zones couvertes :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Paris (tous arrondissements)</li>
                      <li>• Hauts-de-Seine (92)</li>
                      <li>• Seine-Saint-Denis (93)</li>
                      <li>• Val-de-Marne (94)</li>
                      <li>• Seine-et-Marne (77) - partie ouest</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-medium">
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