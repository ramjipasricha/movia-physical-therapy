import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email link
    const subject = encodeURIComponent("Physical Therapy Consultation Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:dptramji@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening your email client",
      description: "Your consultation request is ready to send!",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "dptramji@gmail.com",
      link: "mailto:dptramji@gmail.com",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      content: "@doctor.ramji",
      link: "https://instagram.com/doctor.ramji",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Areas",
      content: (
        <>
          <div>In-Person: Los Angeles, Orange, and San Diego Counties</div>
          <div>Telehealth: California and Hawaii</div>
        </>
      ),
      link: null,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "(562) 265-8411",
      link: "tel:5622658411",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6">Contact & Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about treatment or need more information? Send me a message below. To schedule a consultation or appointment, please use the booking calendar.
          </p>
        </div>
      </section>


      {/* Contact Form & Info */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Questions?</CardTitle>
                <p className="text-muted-foreground">
                  Use this form for general questions about treatments, services, or how I can help. For booking appointments, please use the calendar on the Booking page.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Question *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Ask me anything about treatments, insurance, or how I can help..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Question
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted about your inquiry
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-lg">Ready to Book?</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    To schedule your free consultation or book an appointment, visit the Booking page where you can use the integrated calendar system.
                  </p>
                  <Button asChild variant="default" className="w-full">
                    <Link to="/booking">Schedule Appointment</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need a referral to see you?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  California allows direct access to physical therapy, meaning you don't need a doctor's referral to schedule an appointment. However, some insurance plans may require one for reimbursement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long are treatment sessions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All treatment sessions are 55 minutes long, providing ample time for comprehensive, one-on-one care without feeling rushed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What should I bring to my first appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Please bring any relevant medical records, imaging results (X-rays, MRIs), a list of current medications, and wear comfortable clothing that allows easy movement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
