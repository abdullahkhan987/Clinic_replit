import { motion } from "framer-motion";
import { Shield, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Doctor consulting with a patient"
              className="rounded-lg shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6" data-testid="about-title">
              About Ukaash Skin Clinic
            </h2>
            <p className="text-lg text-gray-600 mb-6" data-testid="about-description">
              At Ukaash, we are committed to providing top-tier skincare solutions. Our clinic is led by certified professionals who use state-of-the-art technology to ensure you receive the best care possible.
            </p>
            <p className="text-lg text-gray-600 mb-8" data-testid="about-experience">
              With a focus on personalized treatment plans, we have successfully helped countless clients achieve their desired skin outcomes.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900" data-testid="feature-certified">
                    Certified Professionals
                  </h3>
                  <p className="text-gray-600">
                    Our team consists of highly qualified and experienced experts.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900" data-testid="feature-premium">
                    Quality Care
                  </h3>
                  <p className="text-gray-600">
                    We offer tailored treatments to meet your unique needs.
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
