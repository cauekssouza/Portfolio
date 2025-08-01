import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, Code, Users, Lightbulb, Target, TrendingUp } from "lucide-react";

const CVMainContent = () => {
  return (
    <div className="bg-cv-main text-cv-text p-8 min-h-screen">
      {/* Objetivo */}
      <Card className="p-6 mb-8 border-cv-border">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-cv-text">Objetivo</h2>
        </div>
        <p className="text-cv-text-muted leading-relaxed">
          Estou procurando estágio em Engenharia de Software, com disposição para atuar em qualquer área da tecnologia.Tenho facilidade de aprendizado, interesse em novos desafios e desejo aplicar meus conhecimentos contribuindo com aequipe e crescendo profissionalmente.
        </p>
      </Card>

      {}
      <Card className="p-6 mb-8 border-cv-border">
        <div className="flex items-center gap-3 mb-4">
          <Code className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-cv-text">Resumo de Qualificações</h2>
        </div>
        <div className="space-y-4 text-cv-text-muted">
          <p>
            Estudante do 6º período de Engenharia de Software na PUCPR, com foco intenso em desenvolvimento front-end e web. 
            Possuo conhecimentos sólidos em HTML5, CSS3, JavaScript, PHP, MySQL, e experiência em programação de interfaces com foco na usabilidade.
          </p>
          <p>
            Tenho experiência pessoal, organizando com tecnologias, ferramentas diversas e desenvolvimento de interfaces web com foco em 
            alguns desenvolvedores de interfaces web com programação de sistemas com foco nas pessoas.
          </p>
          <p>
            Entro pronto, criativo, organizando e com foco conhecimentos, funcionalidades adequadas para ampliar e aplicar novas tecnologias.
          </p>
        </div>
      </Card>

      {}
      <Card className="p-6 mb-8 border-cv-border">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-cv-text">Soft Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Comunicação", "Colaboração", "Trabalho em Equipe", "Adaptabilidade",
            "Organização", "Proatividade", "Criatividade", "Capacidade de Aprender", "Empatia"
          ].map((skill) => (
            <Badge key={skill} variant="outline" className="justify-center p-2 border-accent text-accent">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>

      {}
      <Card className="p-6 mb-8 border-cv-border">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-cv-text">Cursos Complementares</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-cv-text">Gestão de Configuração em Shareef - Fundação Bradesco - CH: 20h - 2024</h4>
            </div>
            <div>
              <h4 className="font-semibold text-cv-text">Curso de Python Mundo 1 - Curso em Vídeo - CH: 40 HORAS - 2023</h4>
            </div>
            <div>
              <h4 className="font-semibold text-cv-text">Curso de Python Mundo 2 - Curso em Vídeo - CH: 40 HORAS - 2023</h4>
            </div>
            <div>
              <h4 className="font-semibold text-cv-text">Curso de Python Mundo 3 - Curso em Vídeo - CH: 40 HORAS - 2023</h4>
            </div>
            <div>
              <h4 className="font-semibold text-cv-text">Curso de HTML5 e CSS3 - Curso em Vídeo - CH: 40 HORAS - 2023</h4>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-cv-text">Curso Gestão de Projetos e Fundamentos de metodologia Ágeis - Santander Open Academy - CH: 8 horas - 2024</h4>
            </div>
            <div>
              <h4 className="font-semibold text-cv-text">Curso de Java 50MA - Proway Learning - CH: 10 horas - 2024</h4>
            </div>
            <div>
              <h4 className="font-semibold text-cv-text">Curso Full Java BASIC - Proway Learning - CH: 6 horas - 2024</h4>
            </div>
            <div>
              <h4 className="font-semibold text-cv-text">Intro&SQL - Alura - CH: 8 horas - 2024</h4>
            </div>
            <div>
              <h4 className="font-semibold text-cv-text">Spring Boot 3: desenvolver uma API Rest em Java - Alura - CH: 10 horas - 2024</h4>
            </div>
          </div>
        </div>
      </Card>

      {/* Experiência Internacional */}
      <Card className="p-6 mb-8 border-cv-border">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-cv-text">Experiência Internacional</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-cv-text">Estados Unidos - 2024 / Portugal - 2024 / Reino Unido - 2021</h3>
            <p className="text-cv-text-muted">
              As viagens a turismo me proporcionaram a experiência de vivenciar novas 
              culturas, aprender idiomas, compreensão e desenvolver habilidades 
              interpessoais, o que contribui significativamente para o meu crescimento 
              pessoal e profissional.
            </p>
          </div>
        </div>
      </Card>

      {/* Experiência Acadêmica */}
      <Card className="p-6 mb-8 border-cv-border">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-cv-text">Experiência Acadêmica</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-cv-text">Representante de turma - PUCPR - 2023/2024</h3>
            <p className="text-cv-text-muted">
              Auxiliei os estudantes em reuniões com professores e coordenadores de 
              curso, onde representamos as necessidades e melhorias na turma.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-cv-text">Semana Acadêmica Politweek PUCPR - 2024</h3>
            <p className="text-cv-text-muted">
              Participei das seguintes palestras: Apple Developer Academy | Introdução 
              à IA |Carreira de engenheiro de software| CH 7 Horas - 2024
            </p>
          </div>
        </div>
      </Card>

      {}
      <Card className="p-6 border-cv-border">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-cv-text">Outros Interesses</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "Tecnologia", "Inteligência Artificial", "Músicas", "Filmes e Séries", 
            "Noticiários", "Assuntos diversos", "Games", "Teatro"
          ].map((interest) => (
            <Badge key={interest} variant="secondary" className="bg-muted text-muted-foreground">
              {interest}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CVMainContent;