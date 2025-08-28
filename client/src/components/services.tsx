import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Sparkles, 
  Zap, 
  Syringe, 
  Leaf, 
  Microscope, 
  Heart 
} from "lucide-react";
import { fadeInVariants, staggerContainer, cardHoverVariants } from "@/lib/animations";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Advanced Facials",
      description: "Deep cleansing and rejuvenating facial treatments using premium skincare products and techniques.",
      iconBg: "bg-primary/10",
      link: "/services/advanced-facials"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Laser Treatments",
      description: "State-of-the-art laser therapy for hair removal, skin resurfacing, and pigmentation correction.",
      iconBg: "bg-accent/10",
      link: "/services/laser-treatments"
    },
    {
      icon: <Syringe className="h-8 w-8 text-primary" />,
      title: "Aesthetic Injectables",
      description: "Professional botox, dermal fillers, and anti-aging treatments for natural-looking results.",
      iconBg: "bg-primary/10",
      link: "/services/aesthetic-injectables"
    },
    {
      icon: <Leaf className="h-8 w-8 text-accent" />,
      title: "Chemical Peels",
      description: "Customized chemical peels to improve skin texture, reduce acne scars, and achieve radiant skin.",
      iconBg: "bg-accent/10",
      link: "/services/chemical-peels"
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Skin Analysis",
      description: "Comprehensive skin assessment using advanced diagnostic tools to create personalized treatment plans.",
      iconBg: "bg-primary/10",
      link: "/services/skin-analysis"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Wellness Therapy",
      description: "Holistic treatments combining skincare with relaxation therapy for overall well-being.",
      iconBg: "bg-accent/10",
      link: "/services/wellness-therapy"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="services-title">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            Comprehensive aesthetic and skincare treatments tailored to your
            unique needs
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInVariants}
              whileHover="hover"
            >
              <Card className="card-hover h-full" data-testid={`service-card-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button 
                      variant="link" 
                      className="text-primary font-semibold hover:text-accent p-0"
                      data-testid={`service-learn-more-${index}`}
                    >
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
