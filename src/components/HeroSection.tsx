import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-primary text-white relative">
      <div className="container mx-auto px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src="/lovable-uploads/f7aaf314-38ba-4911-bdc8-513a88d7abbb.png" 
              alt="Cauê Klosoviski" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Cauê Klosoviski Stadler de Souza
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-white/90">
            Olá
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
            Estudante de Engenharia de Software apaixonado por criar experiências web incríveis.
            Especializado em React, JavaScript e tecnologias modernas.
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto">
            🔍 Em busca de oportunidades como <strong>Estágio</strong>, <strong>Jovem Aprendiz</strong>, <strong>Junior</strong> ou <strong>Trainee</strong>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 px-8 py-3"
          >
            Ver Projetos
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
          >
            Entrar em Contato
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/cauekssouza" className="text-white/70 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/cauekssouza" className="text-white/70 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:cauekssouza@gmail.com" className="text-white/70 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;