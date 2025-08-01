import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["JavaScript", "React", "HTML5", "CSS3", "Angular", "Bootstrap", "Tailwind CSS", "Vite", "Typescript"],
      color: "text-blue-500"
    },
    {
      title: "Backend",
      icon: Code2,
      skills: ["Java", "Python", "C#", "PHP", "Spring Boot", "C", "Node.js", "C++", "Flask"],
      color: "text-green-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "SQL", "PostgreSQL", "SQLite", "Firebase"],
      color: "text-purple-500"
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      skills: ["Excel", "Insomnia", "Git", "Github", "Figma", "VSCODE", "Scrum", "Kanban", "Linux", "SharePoint", "Power BI"],
      color: "text-orange-500"
    }
  ];

  const softSkills = [
    "Comunicação", "Colaboração", "Trabalho em Equipe", "Adaptabilidade",
    "Organização", "Proatividade", "Criatividade", "Capacidade de Aprender", "Empatia"
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Habilidades</h2>
          <p className="text-xl text-muted-foreground">
            Tecnologias e competências que domino para criar soluções incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-accent border-accent">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;