import { motion } from "framer-motion";
import { ArrowLeft, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { fadeInVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";

const WellnessTherapy = () => {
  const benefits = [
    "Stress reduction and relaxation",
    "Improved mental well-being",
    "Enhanced skin health",
    "Better sleep quality",
    "Increased energy levels",
    "Holistic healing approach"
  ];

  const process = [
    { step: 1, title: "Assessment", description: "Wellness and lifestyle evaluation" },
    { step: 2, title: "Customization", description: "Personalized therapy selection" },
    { step: 3, title: "Treatment", description: "Holistic wellness therapy session" },
    { step: 4, title: "Integration", description: "Ongoing wellness support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Ukaash</h1>
            <Button className="gradient-bg text-primary-foreground hover:opacity-90">
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-primary-foreground"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Wellness Therapy
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Holistic treatments combining skincare with relaxation therapy for overall well-being
            </p>
            <div className="flex items-center justify-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>60-90 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span>Holistic Approach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              variants={slideInLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Complete Wellness Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our wellness therapy approach recognizes that beautiful skin comes from within. We combine advanced skincare treatments with relaxation techniques to address both your physical and mental well-being.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From aromatherapy facials to stress-reducing massage techniques, our wellness therapies are designed to rejuvenate your skin while calming your mind and restoring your overall sense of balance.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideInRightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Relaxing wellness therapy session"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Treatment Process */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Wellness Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center bg-muted rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Begin Your Wellness Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the perfect harmony of skincare and wellness therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-primary-foreground px-8 py-4 text-lg font-semibold hover:opacity-90">
                Book Session
              </Button>
              <Link href="/#contact">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WellnessTherapy;