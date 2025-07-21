import { Button } from "@/components/ui/button";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    { name: "عن الطبيب", href: "#about" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                <img src="/Dentistry.png" alt="Logo" className="w-6 h-6" />
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">د. طارق علي</h1>
              <p className="text-sm text-muted-foreground">عيادة طب الأسنان</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <a
              href="tel:+962123456789"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">962-123-456-789+ </span>
              <Phone className="w-4 h-4 mr-2" />
            </a>
            {/* <Button variant="medical" size="sm">
              <Calendar className="w-4 h-4 ml-2" />
              احجز موعد
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-up border-b-0">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* <div className="pt-4 border-t border-border ">
                <a
                  href="tel:+962123456789"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
                >
                  <span className="text-sm">962-123-456-789+</span>
                  <Phone className="w-4 h-4 mr-2" />
                </a>
                <Button variant="medical" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  احجز موعد
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
