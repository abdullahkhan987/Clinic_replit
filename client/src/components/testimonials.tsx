import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      review: "The results from my laser treatment were incredible. The staff was professional and caring.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Mike D.",
      review: "I'm so pleased with my chemical peel. My skin has never felt smoother. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Jessica P.",
      review: "The team at Ukaash is amazing. They customized a facial for my sensitive skin and the results are fantastic.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900" data-testid="testimonials-title">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600" data-testid="testimonials-subtitle">
            Hear what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300" data-testid={`testimonial-card-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900" data-testid={`testimonial-name-${index}`}>
                        {testimonial.name}
                      </h3>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic" data-testid={`testimonial-review-${index}`}>
                    "{testimonial.review}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
