import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, Zap, Syringe, Leaf } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-10 w-10 text-blue-600" />,
      title: "Advanced Facials",
      description: "Rejuvenating facial treatments using premium products.",
      link: "/services/advanced-facials"
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Laser Treatments",
      description: "Effective laser therapy for various skin concerns.",
      link: "/services/laser-treatments"
    },
    {
      icon: <Syringe className="h-10 w-10 text-blue-600" />,
      title: "Aesthetic Injectables",
      description: "Professional injectables for natural-looking results.",
      link: "/services/aesthetic-injectables"
    },
    {
      icon: <Leaf className="h-10 w-10 text-blue-600" />,
      title: "Chemical Peels",
      description: "Customized peels to improve skin texture and tone.",
      link: "/services/chemical-peels"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900" data-testid="services-title">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600" data-testid="services-subtitle">
            Expertly curated treatments to meet your skincare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300" data-testid={`service-card-${index}`}>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button variant="link" className="text-blue-600 font-semibold" data-testid={`service-learn-more-${index}`}>
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
