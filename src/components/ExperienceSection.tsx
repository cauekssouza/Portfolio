import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";

const ExperienceSection = () => {
  const courses = [
    { name: "Spring Boot 3: REST API in Java", provider: "Alura", hours: "10h", year: "2024" },
    { name: "Project Management and Agile Methodologies", provider: "Santander Open Academy", hours: "8h", year: "2024" },
    { name: "Harvard Computer Science Course in Brazil", provider: "Fundação Estudar", hours: "70h", year: "2024" },
    { name: "Python World 1, 2 & 3", provider: "Curso em Vídeo", hours: "120h", year: "2023" },
    { name: "JavaScript Course", provider: "Curso em Vídeo", hours: "40h", year: "2023" },
    { name: "Developing Mobile Applications with Android Studio", provider: "Fundação Bradesco", hours: "15h", year: "2025"},
    { name: "Learn TypeScript Course", provider: "Codeacademy", hours: "10h", year: "2025" },
    { name: "React: Developing with JavaScript", provider: "Alura", hours: "14h", year: "2025"},
    { name: "PostgreSQL", provider: "Alura", hours: "8h", year: "2025"},
    { name: "Introduction to Data Science", provider: "Cisco", hours: "6h", year: "2025"}

  ];

  const experiences = [
    {
      title: "Class Representative",
      company: "PUCPR",
      period: "2023 - 2024",
      description: "Assisted students in meetings with professors and coordinators, representing class needs and proposing improvements."
    },
    {
      title: "Politweek Academic Week",
      company: "PUCPR",
      period: "2024",
      description: "Attended lectures on the Apple Developer Academy, Introduction to AI, and Software Engineering Careers."
    }
  ];

  const travels = [
    { country: "United States", year: "2024" },
    { country: "Portugal", year: "2024" },
    { country: "United Kingdom", year: "2021" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground">
            My journey of learning and professional growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold">Academic Experience</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                  <p className="text-accent font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold">Complementary Courses</h3>
            </div>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{course.name}</h4>
                    <Badge variant="outline" className="text-xs">{course.year}</Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{course.provider}</span>
                    <span>{course.hours}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* International Experience */}
        <Card className="mt-12 p-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold">International Experience</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Travels that gave me the experience of immersing myself in new cultures, learning languages, and developing interpersonal skills.
          </p>
          <div className="flex flex-wrap gap-3">
            {travels.map((travel, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2">
                {travel.country} - {travel.year}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;