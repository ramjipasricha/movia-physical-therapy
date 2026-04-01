import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const conditions = {
    "Lower Body": [
      "Knee pain, ACL/MCL tears, and meniscus injuries",
      "Hip pain, dysfunction, and replacement recovery",
      "Ankle sprains, instability, and fractures",
      "Plantar fasciitis and foot conditions",
      "IT band syndrome and runner's knee",
    ],
    "Upper Body": [
      "Shoulder pain, rotator cuff injuries, and frozen shoulder",
      "Neck pain, cervical disc issues, and headaches",
      "Elbow conditions: tennis elbow and golfer's elbow",
      "Wrist pain, carpal tunnel syndrome, and fractures",
      "Labral tears and shoulder impingement",
    ],
    "Spine & Core": [
      "Lower back pain and lumbar disc conditions",
      "Upper back pain and thoracic mobility",
      "Sciatica and nerve pain management",
      "Post-spinal surgery rehabilitation",
      "Core weakness and stability issues",
    ],
    "Chronic & Systemic": [
      "Arthritis (osteoarthritis and rheumatoid)",
      "Chronic pain and pain management",
      "Sports injuries and overuse syndromes",
      "Tendonitis and bursitis (all joints)",
      "Post-surgical rehabilitation and recovery",
    ],
  };

  const surgeries = [
    "Total knee replacement (TKR)",
    "Total hip replacement (THR)",
    "Total shoulder replacement",
    "ACL reconstruction",
    "MCL repair",
    "Meniscectomy and meniscal repairs",
    "Lumbar spinal surgery",
    "Cervical spinal surgery",
    "Rotator cuff repairs",
    "Labral repairs",
    "Arthroscopic procedures",
  ];

  const specializations = [
    "Dance medicine and performing arts injuries",
    "Somatic therapy and body awareness",
    "Hypermobility and Ehlers-Danlos syndrome",
    "Trauma-informed care",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Gradient */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="mb-6 animate-fade-in">Comprehensive Physical Therapy Treatment Areas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 animate-fade-in">
            Expert care for a wide range of orthopedic conditions, combining
            clinical excellence with compassionate, personalized treatment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full border border-accent/30">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <p className="text-lg font-semibold text-accent">
                Telehealth Sessions Offered
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <p className="text-lg font-semibold text-primary">
                In-Home Visits Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Methods & Specializations */}
      <section className="py-16 px-4 bg-gradient-to-r from-secondary/5 via-secondary/10 to-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Services & Specializations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive treatment approaches tailored to your unique needs and goals
            </p>
          </div>
          
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {/* Orthopedic Conditions */}
                <AccordionItem value="orthopedic">
                  <AccordionTrigger className="text-lg font-semibold">
                    Orthopedic Conditions
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 pt-4">
                    <p className="text-muted-foreground">
                      Comprehensive treatment for a wide range of musculoskeletal conditions affecting all areas of the body.
                    </p>
                    {Object.entries(conditions).map(([category, items]) => (
                      <div key={category} className="space-y-2">
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">{category}</h4>
                        <div className="space-y-2">
                          {items.map((condition, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{condition}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Post-Surgical Rehabilitation */}
                <AccordionItem value="post-surgical">
                  <AccordionTrigger className="text-lg font-semibold">
                    Post-Surgical Rehabilitation
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Expert recovery programs following orthopedic surgeries, helping you regain strength, mobility, 
                      and confidence in your body.
                    </p>
                    <div className="space-y-2">
                      {surgeries.map((surgery, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{surgery}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Strain Counterstrain */}
                <AccordionItem value="scs">
                  <AccordionTrigger className="text-lg font-semibold">
                    Strain Counterstrain
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      A gentle, passive technique that relieves pain and dysfunction by finding positions of comfort 
                      that allow shortened muscles and tissues to release naturally.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Identifies and releases tender points throughout the body
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Reduces muscle spasm and improves joint mobility
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Particularly effective for chronic pain and restricted movement patterns
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Functional Range Conditioning */}
                <AccordionItem value="frc">
                  <AccordionTrigger className="text-lg font-semibold">
                    Functional Range Conditioning (FRC®)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      A comprehensive joint training system based in scientific principles and research, 
                      focusing on improving your body's mobility, joint strength, and control.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Mobility Development</h4>
                          <p className="text-sm text-muted-foreground">
                            Increase active, usable motion to maximize movement potential safely and effectively
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Joint Strength</h4>
                          <p className="text-sm text-muted-foreground">
                            Safeguard your joints so movement can be executed safely while improving overall joint health
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Body Control</h4>
                          <p className="text-sm text-muted-foreground">
                            Improve nervous system function leading to reduced pain and injury, increased joint longevity, 
                            and enhanced ability to move freely
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Somatic Release */}
                <AccordionItem value="somatic">
                  <AccordionTrigger className="text-lg font-semibold">
                    Somatic Release
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      A body-centered approach that addresses stored tension and trauma in the nervous system, 
                      promoting natural healing and improved body awareness.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Releases deeply held tension patterns and restrictions
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Enhances mind-body connection and self-awareness
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Supports trauma-informed care and emotional healing
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Myofascial Activation */}
                <AccordionItem value="myofascial">
                  <AccordionTrigger className="text-lg font-semibold">
                    Myofascial Activation
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Techniques that address the fascial system to release restrictions, improve tissue quality, 
                      and activate proper muscle function for optimal movement patterns.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Releases fascial adhesions and restrictions
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Improves tissue mobility and circulation
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Activates underactive muscles for better movement efficiency
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Sensory Integration */}
                <AccordionItem value="sensory">
                  <AccordionTrigger className="text-lg font-semibold">
                    Sensory Integration
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      A therapeutic approach that enhances how the nervous system processes and responds to sensory 
                      information, improving movement coordination and body awareness.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Improves proprioception and spatial awareness
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Enhances balance, coordination, and motor control
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Supports nervous system regulation and sensory processing
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Dynamic Neuromuscular Stabilization */}
                <AccordionItem value="dns">
                  <AccordionTrigger className="text-lg font-semibold">
                    Dynamic Neuromuscular Stabilization (DNS)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Based on principles of developmental kinesiology, DNS restores the body's genetically programmed 
                      motor patterns from early childhood to improve stability, functionality, and movement quality.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Restores optimal movement patterns through developmental positions
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Improves core stability, breathing patterns, and postural alignment
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Enhances athletic performance and prevents injury through proper joint centration
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Effective for back pain, joint dysfunction, and post-surgical rehabilitation
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Dance Medicine */}
                <AccordionItem value="dance">
                  <AccordionTrigger className="text-lg font-semibold">
                    Dance Medicine
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Specialized care for dancers and performing artists, addressing the unique demands of dance and 
                      performance while optimizing movement quality and preventing injuries.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Performance optimization and injury prevention
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Dance-specific rehabilitation and conditioning
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Movement analysis and technique refinement
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Hypermobility and Ehlers-Danlos Syndrome */}
                <AccordionItem value="hypermobility">
                  <AccordionTrigger className="text-lg font-semibold">
                    Hypermobility and Ehlers-Danlos Syndrome
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Specialized treatment for individuals with hypermobility spectrum disorders and Ehlers-Danlos 
                      syndrome, focusing on joint stability, pain management, and functional strength.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Joint stabilization and proprioceptive training
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Pain management strategies tailored to hypermobility
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Functional strength and endurance building
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Trauma-Informed Care */}
                <AccordionItem value="trauma">
                  <AccordionTrigger className="text-lg font-semibold">
                    Trauma-Informed Care
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      A compassionate approach that recognizes the impact of trauma on the body and nervous system, 
                      creating a safe and supportive environment for healing.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Safe, patient-centered treatment environment
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Nervous system regulation and somatic awareness
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Gentle, empowering approaches to movement and healing
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pain Education Highlight */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-2 border-secondary/30 bg-gradient-to-br from-background to-secondary/5 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/30 text-secondary-foreground">
                  <Zap className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h2 className="mb-4 text-3xl">Pain Education: The Foundation of Every Treatment</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Understanding pain is the first step to overcoming it. Every session includes
                    comprehensive education tailored to your condition:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">How pain works in your nervous system</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Movement, stress, and pain relationships</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Evidence-based pain management strategies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Tools for long-term success and independence</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


    </div>
  );
};

export default Services;