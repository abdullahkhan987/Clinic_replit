import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useLocation } from "wouter";

const Footer = () => {
  const [, setLocation] = useLocation();

  const handleNavigation = (href: string) => {
    setLocation(href);
  };

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { href: "/services/advanced-facials", label: "Advanced Facials" },
    { href: "/services/laser-treatments", label: "Laser Treatments" },
    { href: "/services/aesthetic-injectables", label: "Aesthetic Injectables" },
    { href: "/services/chemical-peels", label: "Chemical Peels" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-brand">
              Ukaash
            </h3>
            <p className="text-gray-400 mb-4" data-testid="footer-description">
              Leading the way in advanced skincare and aesthetic treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-social-facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-social-instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-social-twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-social-linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
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
                <li key={service.href}>
                  <button
                    onClick={() => handleNavigation(service.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    data-testid={`footer-service-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-address">123 Health St, Wellness City, 45678</li>
              <li data-testid="footer-phone">(123) 456-7890</li>
              <li data-testid="footer-email">contact@ukaash.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p data-testid="footer-copyright">
            © {new Date().getFullYear()} Ukaash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
