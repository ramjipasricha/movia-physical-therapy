import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Activity, Brain, Award, Clock, Star, Quote, Bone, Stethoscope } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import therapySession from "@/assets/therapy-session.jpg";
import heroOcean from "@/assets/hero-ocean.jpg";
import heroDancer from "@/assets/hero-dancer.jpg";

const Home = () => {
  const specialties = [
    {
      icon: <Bone className="w-8 h-8" />,
      title: "Arthritis Care",
      description: "Evidence-based management to reduce pain, improve function, and maintain quality of life",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Orthopedic Injuries",
      description: "Treatment for knee pain, back pain, hip pain, shoulder pain, and sports injuries",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Somatic Physical Therapy",
      description: "Mind-body integration for lasting healing and pain relief",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dance Medicine",
      description: "Specialized care for dancers and performing artists",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Post-Surgical Rehabilitation",
      description: "Expert recovery for knee, hip, shoulder, and spinal surgeries",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Chronic Pain Management",
      description: "Compassionate treatment for complex pain conditions with education always provided",
    },
  ];

  const whyChoose = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Care",
      description: "Trained at Movement Works Physical Therapy with advanced certifications",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Approach",
      description: "You deserve personalized, caring treatment tailored to your needs",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Extended Sessions",
      description: "55-minute appointments ensure comprehensive, unhurried care",
    },
  ];

  const serviceHighlights = [
    "In-home physical therapy available - I come to you",
    "Comprehensive pain education with every session",
    "Treatment for hypermobility and complex conditions",
    "ACL/MCL repairs and meniscal procedures",
    "Lumbar surgery rehabilitation",
    "Free 10-minute consultations",
  ];

  return (
    <div className="min-h-screen">
      {/* Large Hero Section with Ocean Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroDancer})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/30 to-primary/50"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl px-4 relative z-10 text-center">
          <h1 className="text-white mb-6 leading-tight drop-shadow-lg italic">
            "Lasting strength starts from within.<br />Awareness is where it begins."
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Dr. Ramji Pasricha<br />
            Doctor in Physical Therapy<br />
            Helping you move with less pain, recover with purpose, and return to what you love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg shadow-lg">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="text-lg bg-white/20 text-white border-2 border-white hover:bg-white hover:text-primary backdrop-blur-sm shadow-lg"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Patients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from patients who have found relief and recovery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "HIGHLY recommend Dr. Ramji. I came in with sports-related pain that had been bothering me on and off for years—other doctors could never get to the bottom of it. But Ramji listened to everything I had to share, took into consideration other things (e.g., my job, the sports I play, other parts of my day to day life), and came up with a plan tailored precisely to my needs. By the end of the treatment plan, I'm feeling better than ever."
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Ramji doesn't just give you exercises to work on strength and control—she also teaches so much! She helped me better understand my body and gave me practices that I can keep doing after PT for long-term wellness. If you're reading this review, take this as a sign to book with Dr. Ramji!"
                </p>
                <div>
                  <p className="font-semibold">Remy Bennie</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Several months ago I was diagnosed with a compressed disc on my lower back and had significant pain. My doctor recommended physical therapy to strengthen my core, so I went to Movement Works and was assigned to Ramji Pasricha for my treatment. Ramji and her team were FANTASTIC! She was very detailed during our initial consultation, listened carefully and helped to build a plan to help me get stronger. From our initial stretching exercises to an introduction to weight machines and lifting, Ramji and her team significantly helped to build my core enabling me to eventually play pain free golf (and be able to pick up my granddaughter and give her a hug)! Thank you Ramji for everything you did! I would HIGHLY recommend Ramji Pasricha to anyone seeking physical therapy help!"
                </p>
                <div>
                  <p className="font-semibold">Kevin Kirk</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "I have had Dr. Ramji work with me on 2 different occasions. I've recovered quickly both times. She is an amazing therapist that listens and truly cares about her patients. She has a calm demeanor, and I've never felt rushed when she is listening to me describing my ailments. She is an amazing therapist that I know I'll be back to see as my aging body continues to fail me in many areas. Most recently she helped me recover from a knee injury, but broadened the care to teach me about body mechanics and how all the musculature systems work together and a pain in one area can be caused by an ailment elsewhere in the body. I highly recommend her and know that she will help me recover quickly from my future ailments as they appear in life."
                </p>
                <div>
                  <p className="font-semibold">Rob and Janice Valone</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "When early symptoms of a shoulder impingement re-appeared, I sought PT to address the issue before a period of extended travel. Dr. Ramji Pasricha at Movement Works provided me exactly the kind of guidance I needed to reduce the pain and begin strengthening the area. She gradually introduced new exercises in each session, always taking time to explain the purpose of each and to answer my questions. I have continued the exercises since 'graduating' from PT and am happy to say I am now pain-free! Ramji was always supportive and is so pleasant to work with that each session flew by! I can recommend her without hesitation -- she is very knowledgeable and skilled in her work, and I will seek her out if I am ever in need of PT in the future."
                </p>
                <div>
                  <p className="font-semibold">Alaine Weiss</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Read more patient testimonials on Google
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                try {
                  window.open('https://share.google/Xx6Aora5n7RKLm9nB', '_blank', 'noopener,noreferrer');
                } catch (e) {
                  window.location.href = 'https://share.google/Xx6Aora5n7RKLm9nB';
                }
              }}
            >
              View All Google Reviews
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
