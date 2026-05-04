import { CONTENT } from "../content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">{CONTENT.shopName}</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              {CONTENT.tagline}. Providing top-quality equipment to athletes and enthusiasts since inception.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("products")} className="text-gray-400 hover:text-white transition-colors">Products</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <p>{CONTENT.contact.address}</p>
              <p>
                <a href={`tel:${CONTENT.contact.phone}`} className="hover:text-white transition-colors">
                  {CONTENT.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={CONTENT.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} {CONTENT.shopName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
