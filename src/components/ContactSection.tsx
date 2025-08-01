import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cauekssouza@gmail.com",
      href: "mailto:cauekssouza@gmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+51 419921-0636",
      href: "tel:+554199921-0636"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Curitiba, Paraná",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/cauekssouza",
      href: "https://linkedin.com/in/cauekssouza"
    }
  ];

  const interests = [
    "Tecnologia", "Inteligência Artificial", "Músicas", "Filmes e Séries", 
    "Noticiários", "Assuntos diversos", "Games", "Teatro"
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em contato comigo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-6 transition-all hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="font-medium hover:text-accent transition-colors"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {}
            <Card className="mt-8 p-6 bg-accent text-accent-foreground">
              <h4 className="text-lg font-semibold mb-3">Pronto para começar minha carreira!</h4>
              <p className="mb-4 text-accent-foreground/90">
                Estou em busca de oportunidades como Estágio, Jovem Aprendiz, Junior ou Trainee 
                em desenvolvimento web front-end. Vamos criar algo incrível juntos!
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-accent hover:bg-white/90"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </Card>
          </div>

          {/* Interesses */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Outros Interesses</h3>
            <Card className="p-6">
              <p className="text-muted-foreground mb-6">
                Além da programação, tenho diversos interesses que contribuem para uma visão ampla e criativa:
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-muted rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Card>

            {/* Objetivo */}
            <Card className="mt-6 p-6">
              <h4 className="text-lg font-semibold mb-3">Meu Objetivo</h4>
              <p className="text-muted-foreground">
                Procuro oportunidades como Estágio, Jovem Aprendiz, Junior ou Treinamento 
                em programação web, com foco em criação de sites, desenvolvimento de sistemas web, 
                interfaces responsivas e uso de tecnologias modernas como React, JavaScript, PHP, MySQL e frameworks modernos.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;