import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTENT } from "../content";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CONTENT.hero.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 md:via-white/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border-l-2 border-red-600 bg-red-50 text-red-700 text-sm font-semibold tracking-wider uppercase">
              Rewari's Premier Sports Destination
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              {CONTENT.hero.headline}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {CONTENT.hero.subheadline}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              {CONTENT.hero.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${CONTENT.contact.phone}`}
                className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                data-testid="button-call-hero"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a 
                href={CONTENT.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                data-testid="button-whatsapp-hero"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
