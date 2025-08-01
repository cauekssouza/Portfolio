import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Calendar, GraduationCap } from "lucide-react";

const CVSidebar = () => {
  return (
    <div className="bg-cv-sidebar text-cv-sidebar-foreground p-8 min-h-screen">
      {}
      <div className="mb-8">
        <div className="w-24 h-24 bg-accent rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-accent-foreground">
          CK
        </div>
        <h1 className="text-2xl font-bold mb-2">Cauê Klosoviski Stadler de Souza</h1>
        <p className="text-lg opacity-90">Acadêmico de Engenharia de Software</p>
      </div>

      {/* Contact */}
      <Card className="bg-transparent border-cv-sidebar-foreground/20 p-4 mb-6">
        <h2 className="text-xl font-bold mb-4 text-cv-sidebar-foreground">Contato</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">www.linkedin.com/in/cauekssouza</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+55 419921-0636</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4" />
            <span className="text-sm">cauekssouza@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Bairro Seminário, Curitiba - Paraná</span>
          </div>
        </div>
      </Card>

      {/* Formação Acadêmica */}
      <Card className="bg-transparent border-cv-sidebar-foreground/20 p-4 mb-6">
        <h2 className="text-xl font-bold mb-4 text-cv-sidebar-foreground">Formação Acadêmica</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-cv-sidebar-foreground">Pontifícia Universidade Católica do Paraná - PUCPR</h3>
            <p className="text-sm opacity-90">Bacharelado em Engenharia de Software</p>
            <div className="flex items-center gap-2 mt-1">
              <Calendar className="w-3 h-3" />
              <span className="text-xs opacity-80">6º Período - Noturno</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-3 h-3" />
              <span className="text-xs opacity-80">Previsão de Conclusão: dezembro/2026</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Conhecimentos Técnicos */}
      <Card className="bg-transparent border-cv-sidebar-foreground/20 p-4 mb-6">
        <h2 className="text-xl font-bold mb-4 text-cv-sidebar-foreground">Conhecimentos Técnicos - Hard Skills</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium mb-2">Linguagens & Tecnologias:</p>
            <div className="flex flex-wrap gap-1">
              {["Excel", "Java", "Python", "JavaScript", "C#", "PHP", "MySQL", "Postman", "Angular"].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs bg-accent text-accent-foreground">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-sm space-y-1">
            <p>• Excel - Avançado</p>
            <p>• Java - Intermediário</p>
            <p>• Python - Intermediário</p>
            <p>• JavaScript - Intermediário</p>
            <p>• C#, C, PHP - Básico</p>
            <p>• MySQL - Intermediário</p>
            <p>• Insomnia - Básico</p>
            <p>• Angular - Básico</p>
          </div>
        </div>
      </Card>

      {}
      <Card className="bg-transparent border-cv-sidebar-foreground/20 p-4">
        <h2 className="text-xl font-bold mb-4 text-cv-sidebar-foreground">Idiomas</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Inglês</span>
            <Badge variant="secondary" className="bg-accent text-accent-foreground">Avançado</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CVSidebar;