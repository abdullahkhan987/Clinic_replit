import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
    { href: "/appointments", label: "Appointments" },
  ];

  const handleNavigation = (href: string) => {
    setLocation(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-gray-800" data-testid="logo">
              Ukaash
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  location === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 px-6 py-2 rounded-full font-semibold"
              onClick={() => handleNavigation("/appointments")}
              data-testid="button-book-appointment-desktop"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-gray-200" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6 text-gray-800" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-white p-6">
                <div className="flex justify-end">
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6 text-gray-800" />
                  </Button>
                </div>
                <div className="mt-6 space-y-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavigation(link.href)}
                      className="block w-full text-left text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors duration-300"
                      data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button 
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4 py-3 rounded-full font-semibold"
                    onClick={() => handleNavigation("/appointments")}
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
