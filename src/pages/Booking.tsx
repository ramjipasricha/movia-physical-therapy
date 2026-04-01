import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Clock, DollarSign, FileText, Phone } from "lucide-react";

const Booking = () => {
  const insuranceInfo = [
    "Currently in process of credentialing with Medicare",
    "In process of credentialing with major PPO insurance plans",
    "Cash payment accepted for immediate care",
    "Detailed receipts provided for insurance reimbursement",
    "Flexible payment options available",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6">Schedule Your Appointment</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Book your free consultation or treatment session using the calendar below
          </p>
        </div>
      </section>

      {/* Calendar Booking Section - Placeholder for HealthSpark Integration */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
              <p className="text-muted-foreground">
                Choose a time that works best for you
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="min-h-[400px] flex items-center justify-center bg-background rounded-lg border-2 border-dashed border-border">
                <div className="text-center space-y-4">
                  <Clock className="w-16 h-16 text-muted-foreground/50 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-muted-foreground mb-2">
                      Calendar Integration Coming Soon
                    </p>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      In the meantime, please contact me directly to schedule your appointment
                    </p>
                  </div>
                  <Button asChild size="lg" className="mt-4">
                    <Link to="/contact">Contact to Schedule</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Combined How It Works & Pricing */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-3">Getting Started</h2>
            <p className="text-muted-foreground">
              From your first call to ongoing care—here's what to expect
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Free Consultation Card */}
            <Card className="border-primary/40 hover:border-primary/60 transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-2">Free Consultation</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Start with a complimentary 10-minute phone or video call to discuss your concerns and see if we're a good fit.
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      <span>10 minutes • Free</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Single Session Card */}
            <Card className="border-border/50 hover:border-primary/30 transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-2">Single Session</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Comprehensive assessment and personalized treatment with exercise prescription and progress tracking.
                    </p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-semibold text-foreground">$300</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        <span>55 minutes</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        Initial eval or follow-up
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Package Card */}
            <Card className="border-primary/40 hover:border-primary/60 transition-all hover:shadow-md relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Best Value
                </span>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                     4
                   </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-2">Package of 4 Sessions</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Continuity of care with a comprehensive treatment plan and ongoing progress monitoring.
                    </p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-semibold text-foreground">$1,000</span>
                      <span className="text-sm text-primary font-medium">(Save $200)</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>55 minutes each</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">Insurance & Payment</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {insuranceInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{info}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Currently:</strong> Cash payment is required at time of service. 
                  Detailed receipts (superbills) will be provided for potential insurance reimbursement. 
                  Please check with your insurance provider about out-of-network benefits.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-3">Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            If you need more information before booking, feel free to reach out
          </p>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Ask a Question</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Booking;