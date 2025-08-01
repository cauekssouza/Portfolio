import { Card } from "@/components/ui/card";
import { Code, GraduationCap, Globe, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e oportunidades de crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Minha Jornada</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Estudante do 6º período de Engenharia de Software na PUCPR, com foco intenso em desenvolvimento front-end e web. 
              Possuo conhecimentos sólidos em HTML5, CSS3, JavaScript, PHP, MySQL, e experiência em programação de interfaces com foco na usabilidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Busco constantemente aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento para criar 
              soluções inovadoras e funcionais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <GraduationCap className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Educação</h4>
              <p className="text-sm text-muted-foreground">6º Período<br />Eng. Software</p>
            </Card>
            <Card className="p-6 text-center">
              <Code className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Tecnologias</h4>
              <p className="text-sm text-muted-foreground">9+ Skills<br />Modernas</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Internacional</h4>
              <p className="text-sm text-muted-foreground">3 Países<br />Visitados</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Liderança</h4>
              <p className="text-sm text-muted-foreground">Representante<br />de Turma</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;