import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = ["Home", "About", "Services", "Contact"];
  const services = [
    "Advanced Facials",
    "Laser Treatments",
    "Aesthetic Injectables", 
    "Chemical Peels"
  ];

  const scrollToSection = (section: string) => {
    const element = document.querySelector(`#${section.toLowerCase()}`);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="animated-bg text-white py-20 relative overflow-hidden" data-testid="footer">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white" data-testid="footer-brand">
              Ukaash
            </h3>
            <p className="text-blue-100 mb-6 text-lg leading-relaxed" data-testid="footer-description">
              Premium skin and aesthetic treatments for radiant, healthy skin.
            </p>
            <div className="flex space-x-4">
              <button className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300" data-testid="footer-social-facebook">
                <Facebook className="h-6 w-6" />
              </button>
              <button className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300" data-testid="footer-social-instagram">
                <Instagram className="h-6 w-6" />
              </button>
              <button className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300" data-testid="footer-social-twitter">
                <Twitter className="h-6 w-6" />
              </button>
              <button className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300" data-testid="footer-social-linkedin">
                <Linkedin className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white" data-testid="footer-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-blue-100 hover:text-white transition-all duration-200 hover:translate-x-2 text-lg"
                    data-testid={`footer-link-${link.toLowerCase()}`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white" data-testid="footer-services-title">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    className="text-blue-100 hover:text-white transition-all duration-200 hover:translate-x-2 text-lg"
                    data-testid={`footer-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white" data-testid="footer-contact-title">
              Contact Info
            </h4>
            <ul className="space-y-4 text-blue-100 text-lg">
              <li className="flex items-start gap-3" data-testid="footer-address-line1">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <div>123 Beauty Boulevard</div>
                  <div data-testid="footer-address-line2">Medical District, City 12345</div>
                </div>
              </li>
              <li className="flex items-center gap-3" data-testid="footer-phone">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3" data-testid="footer-email">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                info@ukaashclinic.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <p className="text-blue-100 text-lg" data-testid="footer-copyright">
            © 2024 Ukaash Skin Clinic. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
