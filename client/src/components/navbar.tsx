import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-sticky" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold gradient-text" data-testid="logo">
              Ukaash
            </h1>
            <div className="ml-3 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                    activeSection === link.href.slice(1)
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-gray-700 hover:text-primary hover:bg-primary/5"
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              className="gradient-bg text-white hover:opacity-90 hover:scale-105 transition-all duration-300 px-8 py-3 font-semibold neon-glow"
              data-testid="button-book-appointment-desktop"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full glass-card">
                <div className="px-4 pt-8 pb-6 space-y-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`block w-full text-left px-4 py-3 text-lg font-semibold transition-all duration-300 rounded-xl ${
                        activeSection === link.href.slice(1)
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-gray-700 hover:text-primary hover:bg-primary/5"
                      }`}
                      data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button 
                    className="w-full gradient-bg text-white hover:opacity-90 mt-6 py-4 font-semibold"
                    data-testid="button-book-appointment-mobile"
                  >
                    Book Appointment
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
