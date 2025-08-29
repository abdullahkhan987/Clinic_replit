import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center animated-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl floating-animation"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-white"
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
              <span className="text-sm font-medium">✨ Premium Skincare Excellence</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8 text-shadow" data-testid="hero-title">
              Transform Your Skin with{" "}
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Expert Care</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-blue-50 leading-relaxed max-w-2xl" data-testid="hero-subtitle">
              Premium aesthetic treatments and personalized skincare solutions that reveal your most radiant self at Ukaash Skin Clinic
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-white/90 backdrop-blur-sm text-primary px-10 py-6 text-lg font-semibold hover:bg-white hover:scale-105 transition-all duration-300 neon-glow"
                data-testid="button-book-consultation"
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-white/30 text-white px-10 py-6 text-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-blue-100 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-blue-100 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-blue-100 text-sm">Expert Treatments</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:pl-12 relative"
            variants={slideInRightVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-30 floating-animation"></div>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern aesthetic clinic interior"
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10 border border-white/20"
                data-testid="hero-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
