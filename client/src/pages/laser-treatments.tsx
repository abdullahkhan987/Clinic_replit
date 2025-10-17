import { motion } from "framer-motion";
import { ArrowLeft, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const LaserTreatments = () => {
  const benefits = [
    "Permanent hair reduction",
    "Skin resurfacing and renewal",
    "Pigmentation correction",
    "Minimal downtime",
    "FDA-approved technology",
    "Long-lasting results"
  ];

  const process = [
    { step: 1, title: "Assessment", description: "Skin evaluation and treatment planning" },
    { step: 2, title: "Preparation", description: "Skin preparation and protection" },
    { step: 3, title: "Laser Treatment", description: "Precise laser application" },
    { step: 4, title: "Recovery", description: "Post-treatment care instructions" }
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
              Laser Treatments
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              State-of-the-art laser therapy for hair removal, skin resurfacing, and pigmentation correction
            </p>
            <div className="flex items-center justify-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>30-60 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span>Advanced Technology</span>
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
                Precision Laser Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced laser treatments utilize the latest FDA-approved technology to deliver precise, effective results with minimal discomfort and downtime. Perfect for hair removal, skin resurfacing, and treating various skin concerns.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From unwanted hair to age spots, acne scars, and fine lines, our laser treatments provide safe, effective solutions tailored to your skin type and goals.
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Advanced laser treatment equipment"
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
              Treatment Process
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
              Experience Advanced Laser Technology
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover the power of precision laser treatments for lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-primary-foreground px-8 py-4 text-lg font-semibold hover:opacity-90">
                Book Consultation
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

export default LaserTreatments;