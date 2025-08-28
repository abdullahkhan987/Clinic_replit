import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-primary-foreground"
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
              Transform Your Skin with{" "}
              <span className="text-white">Expert Care</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
              Premium aesthetic treatments and personalized skincare solutions at
              Ukaash Skin Clinic
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-gray-50"
                data-testid="button-book-consultation"
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:pl-12"
            variants={slideInRightVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern aesthetic clinic interior"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
