import { motion } from "framer-motion";
import { Shield, Star, Award, Users } from "lucide-react";
import { fadeInVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-50 floating-animation"></div>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional dermatologist consultation"
              className="rounded-3xl shadow-2xl w-full h-auto relative z-10 border border-white/20"
              data-testid="about-image"
            />
            {/* Decorative badge */}
            <div className="absolute -top-6 -left-6 glass-card px-6 py-4 rounded-2xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-primary font-bold">Expert Care</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-8">
              <span className="text-primary font-semibold text-sm">✨ About Our Clinic</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 gradient-text leading-tight" data-testid="about-title">
              About Ukaash Skin Clinic
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="about-description">
              At Ukaash Skin Clinic, we combine cutting-edge technology with
              personalized care to deliver exceptional results. Our team of
              certified dermatologists and aesthetic specialists are dedicated to
              helping you achieve your skin goals.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed" data-testid="about-experience">
              With over a decade of experience in advanced skincare treatments,
              we've helped thousands of clients regain confidence through
              healthier, more radiant skin.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2" data-testid="feature-certified">
                    Certified Experts
                  </h3>
                  <p className="text-gray-600">
                    Licensed professionals with years of experience
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2" data-testid="feature-premium">
                    Premium Care
                  </h3>
                  <p className="text-gray-600">
                    Personalized treatments for optimal results
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
