import { Card } from "@/components/ui/card";
import { Code, GraduationCap, Globe, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Developer passionate about technology, always looking for new challenges and opportunities for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Software Engineering at PUCPR, with a strong focus on front-end and web development. 
              I have solid knowledge of HTML5, CSS3, JavaScript, PHP, and MySQL, as well as experience building user interfaces focused on usability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I constantly seek to learn new technologies and apply software development best practices to create 
              innovative and functional solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <GraduationCap className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Education</h4>
              <p className="text-sm text-muted-foreground">6th Semester<br />Software Eng.</p>
            </Card>
            <Card className="p-6 text-center">
              <Code className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Technologies</h4>
              <p className="text-sm text-muted-foreground">9+ Modern<br />Skills</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-1">International</h4>
              <p className="text-sm text-muted-foreground">3 Countries<br />Visited</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-1">Leadership</h4>
              <p className="text-sm text-muted-foreground">Class<br />Representative</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
