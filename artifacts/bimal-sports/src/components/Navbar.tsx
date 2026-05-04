import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTENT } from "../content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-white shadow-md border-gray-100 py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-red-600 tracking-tight cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            {CONTENT.shopName}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</button>
            <button onClick={() => scrollToSection("products")} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Products</button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</button>
            <button onClick={() => scrollToSection("reviews")} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Reviews</button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${CONTENT.contact.phone}`}
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection("home")} className="text-left text-gray-800 font-medium py-2 border-b border-gray-100">Home</button>
          <button onClick={() => scrollToSection("products")} className="text-left text-gray-800 font-medium py-2 border-b border-gray-100">Products</button>
          <button onClick={() => scrollToSection("about")} className="text-left text-gray-800 font-medium py-2 border-b border-gray-100">About</button>
          <button onClick={() => scrollToSection("reviews")} className="text-left text-gray-800 font-medium py-2 border-b border-gray-100">Reviews</button>
          <button onClick={() => scrollToSection("contact")} className="text-left text-gray-800 font-medium py-2 border-b border-gray-100">Contact</button>
          <div className="flex flex-col space-y-3 pt-2">
            <a 
              href={`tel:${CONTENT.contact.phone}`}
              className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-900 py-3 rounded-md font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTENT.contact.phoneDisplay}</span>
            </a>
            <a 
              href={CONTENT.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3 rounded-md font-medium"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
