import { motion } from "framer-motion";
import { Shield, Star, Award, Users } from "lucide-react";
import { fadeInVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional dermatologist consultation"
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </motion.div>
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text" data-testid="about-title">
              About Ukaash Skin Clinic
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="about-description">
              At Ukaash Skin Clinic, we combine cutting-edge technology with
              personalized care to deliver exceptional results. Our team of
              certified dermatologists and aesthetic specialists are dedicated to
              helping you achieve your skin goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8" data-testid="about-experience">
              With over a decade of experience in advanced skincare treatments,
              we've helped thousands of clients regain confidence through
              healthier, more radiant skin.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground" data-testid="feature-certified">
                    Certified Experts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Licensed professionals
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground" data-testid="feature-premium">
                    Premium Care
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized treatments
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
