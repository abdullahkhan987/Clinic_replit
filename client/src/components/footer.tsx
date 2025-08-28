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
    <footer className="bg-secondary text-secondary-foreground py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-brand">
              Ukaash
            </h3>
            <p className="text-gray-300 mb-4" data-testid="footer-description">
              Premium skin and aesthetic treatments for radiant, healthy skin.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="footer-social-facebook">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="footer-social-instagram">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="footer-social-twitter">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-200" data-testid="footer-social-linkedin">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    data-testid={`footer-link-${link.toLowerCase()}`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-title">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    data-testid={`footer-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">
              Contact Info
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li data-testid="footer-address-line1">123 Beauty Boulevard</li>
              <li data-testid="footer-address-line2">Medical District, City 12345</li>
              <li data-testid="footer-phone">(555) 123-4567</li>
              <li data-testid="footer-email">info@ukaashclinic.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300" data-testid="footer-copyright">
            © 2024 Ukaash Skin Clinic. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
