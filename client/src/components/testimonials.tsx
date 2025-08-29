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
    <section id="testimonials" className="py-32 animated-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8">
            <span className="text-white font-semibold text-sm">✨ Client Stories</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-white text-shadow" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-2xl text-blue-50 max-w-3xl mx-auto" data-testid="testimonials-subtitle">
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
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full glass-card border border-white/20 hover:border-white/30 relative group" data-testid={`testimonial-card-${index}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/1 rounded-lg"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-white text-lg mb-1" data-testid={`testimonial-name-${index}`}>
                        {testimonial.name}
                      </h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-white/90 text-lg leading-relaxed relative" data-testid={`testimonial-review-${index}`}>
                    <div className="absolute -top-2 -left-2 text-4xl text-white/20 font-serif">"</div>
                    {testimonial.review}
                    <div className="absolute -bottom-4 -right-2 text-4xl text-white/20 font-serif">"</div>
                  </blockquote>
                  
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 border-2 border-white/30 rounded-full"></div>
                  </div>
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
