import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { fadeInVariants, staggerContainer } from "@/lib/animations";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Miller",
      initials: "SM",
      review: "The laser treatment here completely transformed my skin. The staff was incredibly professional and made me feel comfortable throughout the entire process. Highly recommend!",
      gradient: "from-primary to-accent"
    },
    {
      name: "David Johnson",
      initials: "DJ",
      review: "Outstanding service and results! My acne scars are virtually gone after the chemical peel treatments. The team here truly knows what they're doing.",
      gradient: "from-accent to-primary"
    },
    {
      name: "Emily Brown",
      initials: "EB",
      review: "The facial treatments here are amazing! My skin has never looked better. The clinic is beautiful and the staff is so knowledgeable and friendly.",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="testimonials-subtitle">
            Real stories from satisfied clients who transformed their skin with us
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInVariants}
            >
              <Card className="h-full" data-testid={`testimonial-card-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-primary-foreground font-semibold`}>
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-card-foreground" data-testid={`testimonial-name-${index}`}>
                        {testimonial.name}
                      </h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic" data-testid={`testimonial-review-${index}`}>
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
