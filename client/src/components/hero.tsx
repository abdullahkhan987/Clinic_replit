import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const Hero = () => {
  const [, setLocation] = useLocation();

  const handleNavigation = (href: string) => {
    setLocation(href);
  };

  return (
    <section id="home" className="pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6" data-testid="hero-title">
              Discover Your Best Skin
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0" data-testid="hero-subtitle">
              At Ukaash Skin Clinic, we offer personalized treatments to help you achieve a radiant and youthful complexion.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold rounded-full transition-transform transform hover:scale-105"
                onClick={() => handleNavigation("/appointments")}
                data-testid="button-book-consultation"
              >
                Book a Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-400 text-gray-800 hover:bg-gray-200 px-8 py-3 text-lg font-semibold rounded-full transition-transform transform hover:scale-105"
                onClick={() => handleNavigation("/services")}
                data-testid="button-learn-more"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1616394584738-65a414941558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Woman with glowing skin"
              className="rounded-lg shadow-xl w-full h-auto"
              data-testid="hero-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
