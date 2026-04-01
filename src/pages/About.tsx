import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import graduationPhoto from "@/assets/ramji-graduation.jpg";
import professionalPhoto from "@/assets/ramji-professional.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col items-center">
            <div className="relative group mb-10 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <img 
                src={professionalPhoto} 
                alt="Dr. Ramji Pasricha - Professional headshot" 
                className="relative w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-background group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="mb-6 text-center animate-fade-in">About Dr. Ramji Pasricha</h1>
            <div className="mb-8 text-center space-y-2 animate-fade-in">
              <p className="text-xl text-muted-foreground">
                <span className="font-semibold text-primary">Doctor in Physical Therapy</span> — Azusa Pacific University
              </p>
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-primary">Bachelor's Degree</span> — University of California, Berkeley
              </p>
              <p className="text-lg text-muted-foreground mt-3">
                Licensed in <span className="font-semibold text-primary">California</span> and <span className="font-semibold text-primary">Hawaii</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-lg animate-scale-in">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">Believer</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">Philomath</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">Coach</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">Storyteller</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">Empathizer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-10">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                  At Movia Physical Therapy, Dr. Ramji combines science and soul to make healing simple, empowering, and lasting.
                </p>
                <p>
                  With advanced training in orthopedic rehabilitation, pain psychology, behavioral myology, and functional movement, Dr. Ramji helps clients overcome pain, improve mobility, and build lifelong strength. Every session integrates education, mindful awareness, and evidence-based movement designed to restore both physical function and nervous system balance.
                </p>
                <p className="pl-6 border-l-4 border-secondary/30">
                  Known for compassionate, patient-centered care, Dr. Ramji focuses on pain education because true healing starts with understanding. Through clear explanations and practical tools, you'll gain insight into your body's signals and learn how to move beyond pain—not just manage it.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default About;